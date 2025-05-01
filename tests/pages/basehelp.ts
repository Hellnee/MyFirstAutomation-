import { Page } from "@playwright/test";

export class BaseHelp{
    public page: Page;
            
        constructor(page: Page){
            this.page = page;
        }
}