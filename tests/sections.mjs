import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const BASE_URL = process.env.SHOT_URL || 'http://localhost:5173/personal-website/'
const OUT = 'tests/shots/sections'
const theme = process.env.SHOT_THEME || 'dark'
const width = Number(process.env.SHOT_W || 1440)
const height = Number(process.env.SHOT_H || 900)

mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch({ channel: 'chrome' })
const context = await browser.newContext({
  viewport: { width, height },
  reducedMotion: 'reduce'
})
const page = await context.newPage()
await page.addInitScript((t) => localStorage.setItem('portfolio-theme', t), theme)
await page.goto(BASE_URL, { waitUntil: 'load', timeout: 90000 })
await page
  .evaluate(() => Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 5000))]))
  .catch(() => {})
await page.waitForTimeout(400)

const contactBg = await page.evaluate(() => {
  const el = document.querySelector('.contact')
  return el ? getComputedStyle(el).backgroundColor : 'MISSING'
})
console.log('contact background:', contactBg)

for (const anchor of ['top', 'work', 'toolkit', 'projects', 'contact']) {
  await page.evaluate((id) => document.getElementById(id)?.scrollIntoView(), anchor)
  await page.waitForTimeout(250)
  await page.screenshot({ path: `${OUT}/${theme}-${width}-${anchor}.png` })
}

await browser.close()
console.log('done')
