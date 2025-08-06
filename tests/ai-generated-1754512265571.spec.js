```javascript
import { test, expect } from '@playwright/test';

test('Verify trending content images match ranking', async ({ page }) => {
  await page.goto('./index.html');

  const imageSources = [
    'assets/images/sqdwebp.webp',
    'assets/images/raid2.webp',
    'assets/images/kapil.webp',
    'assets/images/Hit.webp',
    'assets/images/AAPJaisaKoi.webp',
    'assets/images/jaat.webp',
    'assets/images/Thug.webp',
    'assets/images/Chosen.webp',
    'assets/images/Raina.webp',
    'assets/images/Chaava.webp',
  ];

  for (let i = 0; i < 10; i++) {
    const imageElement = page.locator(`.boxes:nth-child(${i + 1}) img`);
    await expect(imageElement).toHaveAttribute('src', imageSources[i]);
  }
});
```