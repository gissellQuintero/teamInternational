import { expect, Page } from "@playwright/test";
import { commonPage } from "../../commonPage"
import { TestPage } from "../../TestPage";
import locators from './AvailabilityPageLocators';

export class AvailabilityPage extends commonPage {

   constructor(testPage: TestPage, page: Page) {
      super(testPage, page);
   }

   /*async BTN_FareXXLl(este: string) {
      return "(//button[@data-test='"+este+"'])[1]"
  }*/
  

   async selectFlightsByDefault(flowName: string, screenshotTitle: string, compare: boolean) {
      const tripType: string = this.testPage.getValue("tripType")
      const fareOutBound: string = this.testPage.getValue("fareOutBound")
      const fareInBound: string = this.testPage.getValue("fareInBound")

      await this.page.waitForSelector(locators.Flight_AvailableBounds);
      await this.page.locator(locators.Flight_AvailableBounds).click();

      if (tripType.includes('round')) {


         switch (fareOutBound) {
            case "XS": {
               await this.page.locator(locators.BTN_FareXS).click();
               break;
            }
            case "S": {
               await this.page.locator(locators.BTN_FareS).click();
                         
               //    await this.page.click(locators.BTN_ContinueFareS);
               break;
            }
            case "M": {
               await this.page.locator(locators.BTN_FareM).click();
               break;
            }
            case "L": {
               await this.page.locator(locators.BTN_FareL).click();
               break;
            }
            case "XL": {
               await this.page.locator(locators.BTN_BusinessClass).click();
               await this.page.locator(locators.BTN_FareXL).click();
               break;
            }
            default: {
               await this.page.locator(locators.BTN_BusinessClass).click();
               await this.page.locator(locators.BTN_FareXXL).click();
               break;
            }
         }

         if (compare) 
         {
             await this.compareScreenshot(screenshotTitle + " Outbound");
         } 
         else
         {
             await this.addTestScreenshot(flowName, screenshotTitle+ " Outbound");
         }

         await this.page.locator(locators.Flight_AvailableBounds).waitFor;
         await this.page.waitForTimeout(5000)
         await this.page.locator(locators.Flight_AvailableBounds).click();

         switch (fareInBound) {
            case "XS": {
               await this.page.locator(locators.BTN_FareXS).click();
               break;
            }
            case "S": {
               await this.page.locator(locators.BTN_FareS).click();
               //    await this.page.click(locators.BTN_ContinueFareS);
               break;
            }
            case "M": {
               await this.page.locator(locators.BTN_FareM).click();
               break;
            }
            case "L": {
               await this.page.locator(locators.BTN_FareL).click();
               break;
            }
            case "XL": {
               await this.page.locator(locators.BTN_BusinessClass).click();
               await this.page.locator(locators.BTN_FareXL).click();
               break;
            }
            default: {
               await this.page.locator(locators.BTN_BusinessClass).click();
               await this.page.locator(locators.BTN_FareXXL).click();
               break;
            }
         }
         if (compare) 
         {
             await this.compareScreenshot(screenshotTitle+" Inbound");
         } 
         else
         {
             await this.addTestScreenshot(flowName, screenshotTitle);
         }

      }

      if (tripType.includes('one')) {
         await this.page.waitForSelector(locators.Flight_AvailableBounds);
         await this.page.click(locators.Flight_AvailableBounds);

         //take the screenshot and add to the reporter
         await this.page.waitForSelector(locators.Flight_AvailableBounds);

         switch (fareInBound) {
            case "XS": {
               await this.page.locator(locators.BTN_FareXS).click();
               break;
            }
            case "S": {
               await this.page.locator(locators.BTN_FareS).click();
               //    await this.page.click(locators.BTN_ContinueFareS);
               break;
            }
            case "M": {
               await this.page.locator(locators.BTN_FareM).click();
               break;
            }
            case "L": {
               await this.page.locator(locators.BTN_FareL).click();
               break;
            }
            case "XL": {
               await this.page.locator(locators.BTN_BusinessClass).click();
               await this.page.locator(locators.BTN_FareXL).click();
               break;
            }
            default: {
               await this.page.locator(locators.BTN_BusinessClass).click();
               await this.page.locator(locators.BTN_FareXXL).click();
               break;
            }
         }

      }
   }

}