import { expect, Page } from "@playwright/test";
import { commonPage } from "../../commonPage"
import { TestPage } from "../../testPage";
import locators from './TripSummaryPageLocators';

export class TripSummaryPage extends commonPage {
    
    constructor(testPage: TestPage, page: Page) {
       super(testPage, page);
    }

    public async validateTripInfo(flowName: string, screenshotTitle: string, compare: boolean, path:string) {
        try {
            const tripType: string = this.testPage.getValue("tripType");
            await this.page.waitForSelector('.trip-summary-title');
            const boundCardsTripInfo = await this.page.$$('bound-displayer-cont');
            if(tripType.includes('round')){
                expect(boundCardsTripInfo.length).toBe(2);
            }else{
                expect(boundCardsTripInfo.length).toBe(1);
            }
            if (compare) 
            {
                await this.compareScreenshot(screenshotTitle); 
            } 
            else
            {
                await this.addTestScreenshot(flowName, screenshotTitle,path);
            }
            await this.page.click(locators.BTN_Continue);
              } catch (error) {
                console.error(error);
            }
    }

}