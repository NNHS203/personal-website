import { chromium } from 'playwright'
const browser = await chromium.launch({ channel: 'chrome' })
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await page.addInitScript(() => localStorage.setItem('portfolio-theme', 'dark'))
await page.goto('http://localhost:8000/personal-website/', { waitUntil: 'load', timeout: 90000 })
await page.evaluate(async () => {
  await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 5000))])
  const img = document.querySelector('.dossier__figure img')
  await img.decode().catch(() => {})
})
await page.waitForTimeout(300)
const photoState = await page.evaluate(() => {
  const img = document.querySelector('.dossier__figure img')
  return { complete: img.complete, w: img.naturalWidth, h: img.naturalHeight, src: img.currentSrc.split('/').pop() }
})
console.log('photo:', JSON.stringify(photoState))
await page.locator('#top').screenshot({ path: 'tests/shots/hero-full.png' })
await page.setViewportSize({ width: 375, height: 812 })
await page.waitForTimeout(400)
await page.locator('#top').screenshot({ path: 'tests/shots/hero-mobile.png' })
await browser.close()
console.log('done')
