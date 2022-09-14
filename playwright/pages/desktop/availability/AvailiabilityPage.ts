import { expect, Page } from "@playwright/test";
import { commonPage } from "../../commonPage"
import { TestPage } from "../../TestPage";
import locators from './AvailabilityPageLocators';

export class AvailabilityPage extends commonPage {

   constructor(testPage: TestPage, page: Page) {
      super(testPage, page);
   }

   async selectFlightsByDefault(flowName: string, screenshotTitle: string, compare: boolean) {
      const tripType: string = this.testPage.getValue("tripType")
      const fareOutBound: string = this.testPage.getValue("fareOutBound")
      const fareInBound: string = this.testPage.getValue("fareInBound")

      await this.page.waitForSelector(locators.Flight_AvailableBounds);
      await this.page.locator(locators.Flight_AvailableBounds).click({ force: true });

      if (tripType.includes('round')) {


         switch (fareOutBound) {
            case "XS": {
               await this.page.locator(locators.BTN_FareXS).first().click({ force: true });
               break;
            }
            case "S": {
               await this.page.locator(locators.BTN_FareS).first().click({ force: true });
               //    await this.page.click(locators.BTN_ContinueFareS);
               break;
            }
            case "M": {
               await this.page.locator(locators.BTN_FareM).first().click({ force: true });
               break;
            }
            case "L": {
               await this.page.locator(locators.BTN_FareL).first().click({ force: true });
               break;
            }
            case "XL": {
               await this.page.locator(locators.BTN_BusinessClass).first().click({ force: true });
               await this.page.locator(locators.BTN_FareXL).first().click({ force: true });
               break;
            }
            default: {
               await this.page.locator(locators.BTN_BusinessClass).first().click({ force: true });
               await this.page.locator(locators.BTN_FareXXL).first().click({ force: true });
               break;
            }
         }

         await this.page.locator(locators.Flight_AvailableBounds).waitFor;
         await this.page.waitForTimeout(5000)
         await this.page.locator(locators.BTN_BestPrice).click({ force: true });
         await this.page.locator(locators.Flight_AvailableBounds).click({ force: true });

         switch (fareInBound) {
            case "XS": {
               await this.page.locator(locators.BTN_FareXS).first().click({ force: true });
               break;
            }
            case "S": {
               await this.page.locator(locators.BTN_FareS).first().click({ force: true });
               //    await this.page.click(locators.BTN_ContinueFareS);
               break;
            }
            case "M": {
               await this.page.locator(locators.BTN_FareM).first().click({ force: true });
               break;
            }
            case "L": {
               await this.page.locator(locators.BTN_FareL).first().click({ force: true });
               break;
            }
            case "XL": {
               await this.page.locator(locators.BTN_BusinessClass).click({ force: true });
               await this.page.locator(locators.BTN_FareXL).first().click({ force: true });
               break;
            }
            default: {
               await this.page.locator(locators.BTN_BusinessClass).click({ force: true });
               await this.page.locator(locators.BTN_FareXXL).first().click({ force: true });
               break;
            }
         }
      }

      if (tripType.includes('one')) {
         await this.page.waitForSelector(locators.Flight_AvailableBounds);
         await this.page.click(locators.Flight_AvailableBounds);

         //take the screenshot and add to the reporter
         await this.page.waitForSelector(locators.Flight_AvailableBounds);

         switch (fareInBound) {
            case "XS": {
               await this.page.locator(locators.BTN_FareXS).first().click({ force: true });
               break;
            }
            case "S": {
               await this.page.locator(locators.BTN_FareS).first().click({ force: true });
               //    await this.page.click(locators.BTN_ContinueFareS);
               break;
            }
            case "M": {
               await this.page.locator(locators.BTN_FareM).first().click({ force: true });
               break;
            }
            case "L": {
               await this.page.locator(locators.BTN_FareL).first().click({ force: true });
               break;
            }
            case "XL": {
               await this.page.locator(locators.BTN_BusinessClass).click({ force: true });
               await this.page.locator(locators.BTN_FareXL).first().click({ force: true });
               break;
            }
            default: {
               await this.page.locator(locators.BTN_BusinessClass).click({ force: true });
               await this.page.locator(locators.BTN_FareXXL).first().click({ force: true });
               break;
            }
         }

      }
   }

}