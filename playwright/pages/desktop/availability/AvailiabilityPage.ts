import { expect, Page } from "@playwright/test";
import {commonPage} from "../../commonPage"
import { TestPage } from "../../TestPage";
import locators  from './AvailabilityPageLocators';

export class AvailabilityPage extends commonPage{

       constructor(testPage:TestPage, page:Page) {
        super(testPage,page);
    }

    async selectFlightsByDefault(flowName: string, arg1: string, compare: boolean) {
        const tripType: string = this.testPage.getValue("tripType")
        const fareOutBound: string = this.testPage.getValue("fareOutBound")
        const fareInBound: string = this.testPage.getValue("fareInBound")

        if(tripType.includes('round')){
            await this.page.waitForSelector(locators.Flight_AvailableBounds);
            await this.page.locator(locators.Flight_AvailableBounds).click;

            switch(fareOutBound) { 
                case "XS": { 
                    await this.page.locator(locators.BTN_FareXS).click;
                   break; 
                } 
                case "S": { 
                    await this.page.locator(locators.BTN_FareS).click;
                //    await this.page.click(locators.BTN_ContinueFareS);
                   break; 
                } 
                case "M": { 
                    await this.page.locator(locators.BTN_FareM).click;
                    break; 
                 }
                 case "L": { 
                    await this.page.locator(locators.BTN_FareL).click;
                    break; 
                 }
                 case "XL": { 
                    await this.page.locator(locators.BTN_BusinessClass); 
                    await this.page.locator(locators.BTN_FareXL).click;
                    break; 
                 }
                default: { 
                    await this.page.locator(locators.BTN_BusinessClass); 
                    await this.page.locator(locators.BTN_FareXXL).click;
                   break; 
                } 
             } 
        }
    }

}