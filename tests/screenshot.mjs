import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const BASE_URL = process.env.SHOT_URL || 'http://localhost:5173/personal-website/'
const OUT = 'tests/shots'
const viewports = [
  { name: '320', width: 320, height: 720 },
  { name: '375', width: 375, height: 812 },
  { name: '768', width: 768, height: 1024 },
  { name: '1024', width: 1024, height: 768 },
  { name: '1440', width: 1440, height: 900 },
  { name: '1920', width: 1920, height: 1080 }
]
const themes = ['dark', 'light']

mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch({ channel: 'chrome' })
const problems = []

for (const theme of themes) {
  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      reducedMotion: 'reduce',
      deviceScaleFactor: 1
    })
    const page = await context.newPage()
    await page.addInitScript((t) => localStorage.setItem('portfolio-theme', t), theme)
    await page.goto(BASE_URL, { waitUntil: 'load', timeout: 90000 })
    await page
      .evaluate(() => Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 5000))]))
      .catch(() => {})
    await page.waitForTimeout(450)

    const overflow = await page.evaluate(() => {
      const docWidth = document.documentElement.scrollWidth
      const winWidth = window.innerWidth
      if (docWidth <= winWidth) return null
      const wide = []
      document.querySelectorAll('*').forEach((el) => {
        const r = el.getBoundingClientRect()
        if (r.right > winWidth + 1 || r.left < -1) {
          wide.push(`${el.tagName.toLowerCase()}.${[...el.classList].join('.')} → ${Math.round(r.left)}..${Math.round(r.right)}`)
        }
      })
      return { docWidth, winWidth, wide: wide.slice(0, 8) }
    })
    if (overflow) problems.push({ theme, vp: vp.name, overflow })

    await page.screenshot({ path: `${OUT}/${theme}-${vp.name}.png`, fullPage: true })
    await context.close()
  }
}

await browser.close()

if (problems.length) {
  console.log('OVERFLOW PROBLEMS:')
  for (const p of problems) console.log(JSON.stringify(p, null, 1))
  process.exit(1)
}
console.log('All screenshots captured, no horizontal overflow.')
