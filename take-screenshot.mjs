import { chromium } from 'playwright';

const url = process.argv[2] || 'http://localhost:3000/';
const outPath = process.argv[3] || 'screenshot.png';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 950 }, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle' });

await page.waitForTimeout(2000);

const found = await page.evaluate(() => {
  const byClass = document.querySelector('[class*="w-[11in]"]');
  if (byClass) { byClass.id = '__screenshot_target'; return 'class'; }
  const allDivs = document.querySelectorAll('div');
  for (const d of allDivs) {
    const s = d.getAttribute('style') || '';
    if (s.includes('11in')) { d.id = '__screenshot_target'; return 'style'; }
  }
  return null;
});

const locator = page.locator('#__screenshot_target');
await locator.screenshot({ path: outPath, type: 'png' });
await browser.close();
console.log('Found via:', found, '| Saved:', outPath);
