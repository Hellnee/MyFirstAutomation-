import { Locator, expect } from '@playwright/test'; 
import { BaseHelp } from './basehelp';
//shedegis shemowmebis miznit iqmneba 

export class Assertions extends BaseHelp{
 
    async verifyElementIsVisible(element: Locator){
        await expect(element).toBeVisible();
    }
    async verifyRedirectedTo(url: string) {
        await expect(this.page).toHaveURL(url);
    }
    async verifyFormOutputIsCorrect(name: string, email: string, currentAddress: string, permanentAddress: string) {
        const output = this.page.locator('div.border.col-md-12.col-sm-12');
        await expect(output).toBeVisible();
    
        
        await expect(this.page.locator('#name')).toHaveText(`Name:${name}`);
        await expect(this.page.locator('#email')).toHaveText(`Email:${email}`);
        await expect(this.page.locator('p#currentAddress')).toContainText(currentAddress);
        await expect(this.page.locator('p#permanentAddress')).toContainText(permanentAddress);

}
    
      
}