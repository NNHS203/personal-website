import { chromium } from 'playwright'
const browser = await chromium.launch({ channel: 'chrome' })
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.addInitScript(() => localStorage.setItem('portfolio-theme', 'dark'))
await page.goto('http://localhost:8000/personal-website/', { waitUntil: 'load', timeout: 90000 })
await page.waitForTimeout(500)
// Force-load all lazy images, wait until every one is decoded
await page.evaluate(async () => {
  const imgs = [...document.querySelectorAll('.work-row__logo img')]
  imgs.forEach((img) => (img.loading = 'eager'))
  imgs.forEach((img) => img.scrollIntoView())
  await Promise.all(imgs.map((img) => img.decode().catch(() => {})))
})
const rows = page.locator('.work-row')
const n = await rows.count()
for (let i = 0; i < n; i++) {
  await rows.nth(i).scrollIntoViewIfNeeded()
  await page.waitForTimeout(250)
  await rows.nth(i).locator('.work-row__logo').screenshot({ path: `tests/shots/logo-${i}.png` })
}
// Overflow audit: any logo img drawing outside its plate?
const leaks = await page.evaluate(() =>
  [...document.querySelectorAll('.work-row__logo')].map((plate, i) => {
    const p = plate.getBoundingClientRect()
    const m = plate.querySelector('img').getBoundingClientRect()
    const leak = m.left < p.left - 0.5 || m.right > p.right + 0.5 || m.top < p.top - 0.5 || m.bottom > p.bottom + 0.5
    return leak ? `row ${i} leaks` : null
  }).filter(Boolean)
)
console.log('overflow leaks:', leaks.length ? leaks : 'none')
await browser.close()
console.log(`captured ${n} logo plates`)
