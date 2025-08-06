```javascript
import { test, expect } from '@playwright/test';

test('Test the link colors within the "last-sec" section.', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const lastSecLinks = await page.locator('.last-sec a');

  for (let i = 0; i < await lastSecLinks.count(); i++) {
    const link = lastSecLinks.nth(i);
    const color = await link.evaluate((element) => {
      return window.getComputedStyle(element).color;
    });

    console.log(`Link ${i + 1} color: ${color}`);
    expect(color).toBe('rgb(81, 81, 239)');
  }
});
```