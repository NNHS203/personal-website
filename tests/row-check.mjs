import { chromium } from 'playwright'
const browser = await chromium.launch({ channel: 'chrome' })
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.addInitScript(() => localStorage.setItem('portfolio-theme', 'dark'))
await page.goto('http://localhost:8000/personal-website/', { waitUntil: 'load', timeout: 90000 })
await page.evaluate(async () => {
  const imgs = [...document.querySelectorAll('img')]
  imgs.forEach((i) => { i.loading = 'eager'; i.scrollIntoView() })
  await Promise.all(imgs.map((i) => i.decode().catch(() => {})))
  window.scrollTo(0, 0)
})
await page.waitForTimeout(400)
for (const i of [1, 4, 5]) {
  await page.locator('.work-row').nth(i).scrollIntoViewIfNeeded()
  await page.waitForTimeout(300)
  await page.locator('.work-row').nth(i).screenshot({ path: `tests/shots/row-${i}.png` })
}
await browser.close()
console.log('done')
