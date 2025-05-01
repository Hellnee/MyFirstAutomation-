import { Locator } from "@playwright/test";
import { basepage } from "./basepage";

export class ElementsPage extends basepage {
    public textBox: Locator = this.page.locator('//span[text()="Text Box"]')
    public nameField: Locator = this.page.locator('#userName');
    public emailInput: Locator = this.page.locator('#userEmail');
    public currentAddress: Locator = this.page.locator('//p[@id="currentAddress"]');
    public permanentAddress: Locator = this.page.locator('//p[@id="permanentAddress"]');
    public submitButton: Locator = this.page.locator('#submit');
}
