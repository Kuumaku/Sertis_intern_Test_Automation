//Create Playwright environment
//Create test name Search and enter certis
//1.Go to google.com
//2.Search for combobox by role and create const as search bar
//3.fill Sertis in search bar
//4.Press Enter
//5.See if sertis URL are visible in search results page

import {test, expect} from '@playwright/test';


test('Search and enter certis ', async ({page}) => { 


    await page.goto('https://www.google.com/')

    const search_bar = page.getByRole('combobox')

    await search_bar.fill(`Sertis`);
    
    await expect(search_bar).toHaveValue(`Sertis`)
    
    await search_bar.press('Enter')

    await expect(page.getByText(`https://www.sertiscorp.com/`)).toBeVisible;

    await page.close();

 })