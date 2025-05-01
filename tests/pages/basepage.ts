import { Page } from '@playwright/test'; //mxolod mshobelshi
import { Actions } from './actions';
import { Assertions } from './assertions';

export  class basepage  {  //exporti tu gashareba gvinda klasis
    public page: Page;
    public actions: Actions;
    public assertions: Assertions;

    constructor(page: Page){
        this.page = page;
        this.actions = new Actions(page); //radgan chvenia amitom new
        this.assertions = new Assertions(page);
    
    }

}
