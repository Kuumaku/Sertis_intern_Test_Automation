import {test, expect} from '@playwright/test';
``

test('Search and enter certis ', async ({page}) => { 


    await page.goto('https://www.google.com/')

    const search_bar = page.getByRole('combobox')

    await search_bar.fill(`Sertis`);
    
    await expect(search_bar).toHaveValue(`Sertis`)
    
    await search_bar.press('Enter')

    await page.waitForLoadState("networkidle");

    await expect(page.getByText(`https://www.sertiscorp.com/`)).toBeVisible;

    await page.close();

 })