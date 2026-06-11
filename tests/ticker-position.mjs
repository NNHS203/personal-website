import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const URL = process.env.SHOT_URL || 'http://localhost:8000/personal-website/'
mkdirSync('tests/shots', { recursive: true })

const browser = await chromium.launch({ channel: 'chrome' })
const findings = []

for (const [label, viewport] of [
  ['desktop-1440', { width: 1440, height: 900 }],
  ['mobile-390', { width: 390, height: 844 }],
]) {
  const page = await browser.newPage({ viewport })
  await page.goto(URL, { waitUntil: 'networkidle' })
  await page.waitForTimeout(900)

  const boxes = {}
  for (const [key, sel] of [
    ['kicker', '.hero__kicker'],
    ['ticker', '.hero__ticker'],
    ['title', '.hero__title'],
    ['photo', '.dossier__figure img'],
  ]) {
    const el = page.locator(sel).first()
    boxes[key] = await el.boundingBox()
    if (!boxes[key]) findings.push(`${label}: ${sel} not found/invisible`)
  }

  if (boxes.kicker && boxes.ticker && boxes.kicker.y + boxes.kicker.height > boxes.ticker.y) {
    findings.push(`${label}: ticker not below name (kicker bottom ${boxes.kicker.y + boxes.kicker.height} > ticker top ${boxes.ticker.y})`)
  }
  if (boxes.ticker && boxes.title && boxes.ticker.y + boxes.ticker.height > boxes.title.y) {
    findings.push(`${label}: ticker not above title`)
  }
  if (boxes.ticker && boxes.photo && boxes.ticker.y + boxes.ticker.height > boxes.photo.y) {
    findings.push(`${label}: ticker not above photo`)
  }

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  )
  if (overflow > 1) findings.push(`${label}: horizontal overflow ${overflow}px`)

  console.log(label, JSON.stringify(boxes, null, 0))
  await page.screenshot({ path: `tests/shots/ticker-pos-${label}.png` })
  await page.close()
}

await browser.close()

if (findings.length) {
  console.error('FINDINGS:\n' + findings.join('\n'))
  process.exit(1)
}
console.log('TICKER POSITION OK')
