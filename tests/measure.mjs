import { chromium } from 'playwright'
const browser = await chromium.launch({ channel: 'chrome' })
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.goto('http://localhost:8000/personal-website/', { waitUntil: 'load', timeout: 90000 })
await page.waitForTimeout(800)
const data = await page.evaluate(() => {
  return [...document.querySelectorAll('.work-row__logo')].map((plate, i) => {
    const img = plate.querySelector('img')
    const p = plate.getBoundingClientRect()
    const m = img.getBoundingClientRect()
    const cs = getComputedStyle(img)
    return `row${i}: plate ${Math.round(p.width)}x${Math.round(p.height)} @(${Math.round(p.left)},${Math.round(p.top)}) | img ${Math.round(m.width)}x${Math.round(m.height)} @(${Math.round(m.left)},${Math.round(m.top)}) | css w=${cs.width} h=${cs.height} fit=${cs.objectFit}`
  })
})
console.log(data.join('\n'))
await browser.close()
