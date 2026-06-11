import { chromium } from 'playwright'

const URL = 'http://localhost:8000/personal-website/'
const findings = []
const ok = (msg) => console.log(`  ✓ ${msg}`)
const bad = (msg) => {
  findings.push(msg)
  console.log(`  ✗ ${msg}`)
}

const browser = await chromium.launch({ channel: 'chrome' })
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const page = await context.newPage()

const consoleErrors = []
const failedRequests = []
page.on('console', (m) => {
  if (m.type() === 'error' || m.type() === 'warning') consoleErrors.push(`${m.type()}: ${m.text()}`)
})
page.on('pageerror', (e) => consoleErrors.push(`pageerror: ${e.message}`))
page.on('requestfailed', (r) => failedRequests.push(`${r.url()} → ${r.failure()?.errorText}`))

console.log('— Load & document —')
await page.goto(URL, { waitUntil: 'load', timeout: 60000 })
await page.evaluate(() => Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 5000))]))
await page.waitForTimeout(600)

const title = await page.title()
title.includes('Cybersecurity') ? ok(`title: "${title}"`) : bad(`unexpected title: "${title}"`)

const h1 = await page.locator('h1').innerText()
h1.toLowerCase().includes('forensics') ? ok(`h1 communicates the field: "${h1.replace(/\n/g, ' ')}"`) : bad(`h1 unclear: "${h1}"`)

console.log('— Navigation anchors —')
for (const [label, id] of [['Work', 'work'], ['Toolkit', 'toolkit'], ['Projects', 'projects'], ['Contact', 'contact']]) {
  await page.click(`nav >> text=${label}`)
  await page.waitForTimeout(900)
  const visible = await page.evaluate((sectionId) => {
    const el = document.getElementById(sectionId)
    if (!el) return false
    const r = el.getBoundingClientRect()
    return r.top > -r.height * 0.5 && r.top < window.innerHeight * 0.6
  }, id)
  visible ? ok(`nav "${label}" scrolls to #${id}`) : bad(`nav "${label}" did not land on #${id}`)
}
await page.evaluate(() => window.scrollTo(0, 0))
await page.waitForTimeout(400)

console.log('— Images (after full scroll-through) —')
const brokenImages = await page.evaluate(async () => {
  const imgs = [...document.querySelectorAll('img')]
  await Promise.all(imgs.map((i) => i.decode().catch(() => {})))
  return imgs.filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.src)
})
brokenImages.length === 0 ? ok('all images loaded & decoded') : bad(`broken images: ${brokenImages.join(', ')}`)

console.log('— Theme toggle —')
const before = await page.evaluate(() => document.documentElement.dataset.theme)
await page.click('button[aria-label^="Switch to"]')
await page.waitForTimeout(300)
const after = await page.evaluate(() => ({
  theme: document.documentElement.dataset.theme,
  stored: localStorage.getItem('portfolio-theme'),
  contactBg: getComputedStyle(document.querySelector('.contact')).backgroundColor
}))
after.theme !== before && after.stored === after.theme
  ? ok(`theme toggles ${before} → ${after.theme}, persisted, contact band = ${after.contactBg}`)
  : bad(`theme toggle broken: ${JSON.stringify(after)}`)
await page.click('button[aria-label^="Switch to"]')
await page.waitForTimeout(200)

console.log('— External links & email —')
const linkAudit = await page.evaluate(() =>
  [...document.querySelectorAll('a[target="_blank"]')].map((a) => ({
    href: a.href,
    rel: a.rel
  }))
)
const badRel = linkAudit.filter((l) => !/noopener/.test(l.rel))
badRel.length === 0
  ? ok(`${linkAudit.length} external links all have rel=noopener`)
  : bad(`links missing noopener: ${badRel.map((l) => l.href).join(', ')}`)
const linkedinCount = linkAudit.filter((l) => l.href.includes('linkedin.com/in/hanshengliu')).length
linkedinCount >= 3 ? ok(`LinkedIn linked ${linkedinCount}×`) : bad(`LinkedIn only linked ${linkedinCount}×`)
const mailto = await page.locator('a[href^="mailto:"]').count()
mailto >= 2 ? ok(`${mailto} mailto links present`) : bad('missing mailto links')

console.log('— Keyboard access (fresh load) —')
await page.goto(URL, { waitUntil: 'load', timeout: 60000 })
await page.waitForTimeout(500)
await page.keyboard.press('Tab')
const firstFocus = await page.evaluate(() => document.activeElement?.textContent?.trim())
firstFocus?.toLowerCase().includes('skip')
  ? ok(`first Tab lands on skip link ("${firstFocus}")`)
  : bad(`first Tab landed on: "${firstFocus}"`)
for (let i = 0; i < 5; i++) await page.keyboard.press('Tab')
const focusOutline = await page.evaluate(() => {
  const s = getComputedStyle(document.activeElement)
  return s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) > 0
})
focusOutline ? ok('focused element shows visible outline') : bad('focus outline missing')

console.log('— Hover micro-interaction —')
const arrowBefore = await page.evaluate(() => {
  const el = document.querySelector('.btn--primary .btn__arrow')
  return el ? getComputedStyle(el).transform : 'missing'
})
await page.hover('.btn--primary')
await page.waitForTimeout(400)
const arrowAfter = await page.evaluate(() => getComputedStyle(document.querySelector('.btn--primary .btn__arrow')).transform)
arrowAfter !== arrowBefore ? ok('primary button arrow animates on hover') : bad('hover animation inert')

console.log('— Logo containment —')
const leaks = await page.evaluate(async () => {
  const imgs = [...document.querySelectorAll('.work-row__logo img')]
  imgs.forEach((img) => {
    img.loading = 'eager'
    img.scrollIntoView()
  })
  await Promise.all(imgs.map((img) => img.decode().catch(() => {})))
  return [...document.querySelectorAll('.work-row__logo')]
    .map((plate, i) => {
      const p = plate.getBoundingClientRect()
      const m = plate.querySelector('img').getBoundingClientRect()
      const out = m.left < p.left - 1 || m.right > p.right + 1 || m.top < p.top - 1 || m.bottom > p.bottom + 1
      return out ? i : null
    })
    .filter((x) => x !== null)
})
leaks.length === 0 ? ok('all 6 logos contained in plates') : bad(`logo overflow in rows: ${leaks.join(',')}`)

console.log('— Mobile (375×812) —')
const mobile = await context.newPage()
mobile.on('pageerror', (e) => consoleErrors.push(`mobile pageerror: ${e.message}`))
await mobile.setViewportSize({ width: 375, height: 812 })
await mobile.goto(URL, { waitUntil: 'load', timeout: 60000 })
await mobile.waitForTimeout(800)
const mOverflow = await mobile.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
mOverflow <= 0 ? ok('no horizontal overflow at 375px') : bad(`375px overflows by ${mOverflow}px`)
const tapTargets = await mobile.evaluate(() =>
  [...document.querySelectorAll('a.btn, .site-header__toggle, .site-header__cta')].map((el) => {
    const r = el.getBoundingClientRect()
    return { label: el.textContent.trim().slice(0, 18) || 'toggle', h: Math.round(r.height) }
  })
)
const smallTaps = tapTargets.filter((t) => t.h < 32)
smallTaps.length === 0
  ? ok(`tap targets ≥32px: ${tapTargets.map((t) => `${t.label}:${t.h}`).join(', ')}`)
  : bad(`small tap targets: ${JSON.stringify(smallTaps)}`)
await mobile.close()

console.log('— Console & network —')
const realErrors = consoleErrors.filter((e) => !e.includes('favicon'))
realErrors.length === 0 ? ok('zero console errors/warnings') : bad(`console: ${realErrors.join(' | ')}`)
failedRequests.length === 0 ? ok('zero failed requests') : bad(`failed: ${failedRequests.join(' | ')}`)

console.log('— ARIA landmark snapshot (hero region) —')
const aria = await page.locator('header.site-header, main >> nth=0').first().ariaSnapshot()
console.log(aria.split('\n').slice(0, 14).join('\n'))

await browser.close()
console.log(findings.length === 0 ? '\nAUDIT PASS — no findings' : `\nAUDIT FINDINGS: ${findings.length}`)
process.exit(findings.length === 0 ? 0 : 1)
