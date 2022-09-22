import { expect, Page } from "@playwright/test";
import { commonPage } from "../../commonPage"
import { TestPage } from "../../testPage";
import locators from ".//TripSummaryPageLocators"

export class TripSummaryPage extends commonPage {
    
    constructor(testPage: TestPage, page: Page) {
       super(testPage, page);
    }

    public async validateTripInfo(flowName: string, screenshotTitle: string, compare: boolean, path:string) {
        try {
             if (compare) 
            {
                await this.compareScreenshot(screenshotTitle); 
            } 
            else
            {
                await this.addTestScreenshot(flowName, screenshotTitle,path,locators.BTN_Continue);
            }
            await this.page.click(locators.BTN_Continue);
              } catch (error) {
                console.error(error);
            }
    }

}