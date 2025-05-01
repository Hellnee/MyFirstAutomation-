import { Locator } from '@playwright/test'; 
import { BaseHelp } from './basehelp';

export class Actions extends BaseHelp{
   
    async clickOnElement(element: Locator){  //metodis saxelis win
        await element.click();  //nebismieri moqmedebis win await
    }
    async navigateToUrl(url: string){
        await this.page.goto(url);
    }
    async fillOutField(element: Locator, value: string){
        await element.fill(value);
    }
}
