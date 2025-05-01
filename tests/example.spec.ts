import { test } from '@playwright/test';
import { Homepage } from './pages/homepage';
import { Actions } from './pages/actions';
import { describe } from 'node:test';
import { ElementsPage } from './pages/elementsPage';

//test('first',{tag: ['@first']}, async ({ page }) => {}  tagis gamoyeneba
test.describe('redirection', {tag:  ['@redirection']}, async ()=>{


test.only('check elements visibility', async ({ page }) => {
  const homePage = new  Homepage(page);
  const elementsPage = new ElementsPage(page);
   //esaris instansi
  await homePage.actions.navigateToUrl('https://demoqa.com/');
  await homePage.assertions.verifyElementIsVisible(homePage.elements)
  await homePage.actions.clickOnElement(homePage.elements);
  await homePage.assertions.verifyRedirectedTo('https://demoqa.com/elements');

  await elementsPage.assertions.verifyElementIsVisible(elementsPage.textBox);
  await elementsPage.actions.clickOnElement(elementsPage.textBox);

  await elementsPage.assertions.verifyElementIsVisible(elementsPage.nameField);
  await elementsPage.actions.clickOnElement(elementsPage.nameField);
  await elementsPage.actions.fillOutField(elementsPage.nameField, 'Test Testerashvili');

  await elementsPage.assertions.verifyElementIsVisible(elementsPage.emailInput);
  await elementsPage.actions.clickOnElement(elementsPage.emailInput);
  await elementsPage.actions.fillOutField(elementsPage.emailInput, 'example@gmail.com');

  await elementsPage.assertions.verifyElementIsVisible(elementsPage.currentAddress);
  await elementsPage.actions.clickOnElement(elementsPage.currentAddress);
  await elementsPage.actions.fillOutField(elementsPage.currentAddress, 'Pawia st.18');

  await elementsPage.assertions.verifyElementIsVisible(elementsPage.permanentAddress);
  await elementsPage.actions.clickOnElement(elementsPage.permanentAddress);
  await elementsPage.actions.fillOutField(elementsPage.permanentAddress, 'Pawia st.20');

  /*await page.pause();*/

  await elementsPage.actions.clickOnElement(elementsPage.submitButton);

  await elementsPage.assertions.verifyFormOutputIsCorrect(
    'Test Testerashvili',
    'example@gmail.com',
    'Pawia st.18',
    'Pawia st.20'
  );

});

test('check forms visibility', async ({ page }) => {
  const homePage = new  Homepage(page);
   //esaris instansi
  await homePage.actions.navigateToUrl('https://demoqa.com/');
  await homePage.assertions.verifyElementIsVisible(homePage.forms)
  await homePage.actions.clickOnElement(homePage.forms);
  
});

test('check alerts visibility', async ({ page }) => {
  const homePage = new  Homepage(page);
   //esaris instansi
  await homePage.actions.navigateToUrl('https://demoqa.com/');
  await homePage.assertions.verifyElementIsVisible(homePage.alerts)
  await homePage.actions.clickOnElement(homePage.forms);
  
});

test('check widgets visibility', async ({ page }) => {
  const homePage = new  Homepage(page);
   //esaris instansi
  await homePage.actions.navigateToUrl('https://demoqa.com/');
  await homePage.assertions.verifyElementIsVisible(homePage.widgets)
  await homePage.actions.clickOnElement(homePage.forms);
  
});

test('check interactions visibility', async ({ page }) => {
  const homePage = new  Homepage(page);
   //esaris instansi
  await homePage.actions.navigateToUrl('https://demoqa.com/');
  await homePage.assertions.verifyElementIsVisible(homePage.interactions)
  await homePage.actions.clickOnElement(homePage.forms);
  
});

test('check applications visibility', async ({ page }) => {
  const homePage = new  Homepage(page);
   //esaris instansi
  await homePage.actions.navigateToUrl('https://demoqa.com/');
  await homePage.assertions.verifyElementIsVisible(homePage.bookStoreApplication)
  await homePage.actions.clickOnElement(homePage.forms);
  
});

})