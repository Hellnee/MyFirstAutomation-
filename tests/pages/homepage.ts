import { Locator } from "@playwright/test";
import { basepage } from "./basepage";

export class Homepage extends basepage { //nishnavs ro shvilia
    
    public elements: Locator = this.page.locator('//h5[text()="Elements"]');
    public forms: Locator = this.page.locator('//h5[text()="Forms"]')
    public alerts: Locator = this.page.locator('//h5[text()="Alerts, Frame & Windows"]')
    public widgets: Locator = this.page.locator('//h5[text()="Widgets"]')
    public interactions: Locator = this.page.locator('//h5[text()="Interactions"]')
    public bookStoreApplication: Locator = this.page.locator('//h5[text()="Book Store Application"]')
}
