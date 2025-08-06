```javascript
import { test, expect } from '@playwright/test';

test('Verify Netflix logo is displayed', async ({ page }) => {
  await page.goto('./index.html');
  const logo = page.locator('nav span img');
  await expect(logo).toBeVisible();
  await expect(logo).toHaveAttribute('src', 'assets/images/logo.svg');
  await expect(logo).toHaveAttribute('alt', '');
});
```