import { test, expect } from '@playwright/test';

test('Ajouter un nouveau livre et regarder qu\'il s\'affiche', async ({ page }) => {
  
  await page.goto('http://127.0.0.1:4200', { waitUntil: 'load', timeout: 60000 });

  await page.fill('input[placeholder="Entrez le titre d\'un livre"]', 'Mon nouveau livre');

  await page.click('button:has-text("Save")');

  await expect(page.locator('ul > li')).toHaveText('Mon nouveau livre');
});