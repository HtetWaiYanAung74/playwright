import { test, expect } from '@playwright/test';
import exp from 'constants';

test.describe('Home page', () => {
    test('Verify url and logo ', async ({ page }) => {
        // access the page
        await page.goto('https://www.icc-cricket.com/tournaments/cricketworldcup');

        // verify url
         expect(page.url()).toContain('cricket');
        
         // check logo visible
          expect(page.locator("//img[@alt='Header Logo']")).toBeVisible;
    })

    test('Scenario 2, Search and verify new url and heading', async ({ page }) => {
        // access the page link
        await page.goto('https://www.icc-cricket.com/tournaments/cricketworldcup');

        // click search button
        await page.locator("//span[@class='font-cta inline']").click();
        

        const searchInput = page.getByPlaceholder('what are you looking for?');
        await searchInput.fill('India');
        await searchInput.press('Enter');

      
    })   
    
})
