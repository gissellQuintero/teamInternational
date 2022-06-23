import { expect, Page } from "@playwright/test";
import {commonPage} from "../commonPage"
import { TestPage } from "../TestPage";
import locators  from './ConfirmationPageLocator';


export class ConfirmationPage extends commonPage{
    constructor(testPage:TestPage, page:Page) {
     super(testPage,page);
 }

 public async validatePNR(flowName:string,screenshotTitle:string, compare:boolean) {
    //debugger
    try {
        await this.page.waitForSelector(locators.BookingCode, { timeout: 10000 })
      } catch (error) {'enter code here'
        console.log("The element didn't appear.")
      }
      if (compare) 
            {
                await this.compareScreenshot(screenshotTitle);
            } 
            else
            {
                await this.addTestScreenshot(flowName, screenshotTitle); 
            }
            
        await this.page.waitForSelector(locators.BookingCode, { timeout: 20000 })

        const visible = await this.page.isVisible(locators.BookingCode);
        expect(visible).toBeTruthy();
 
}

public async validatePNRTTT(flowName:string,screenshotTitle:string, compare:boolean) {
    //debugger
    try {
        await this.page.waitForSelector(locators.BookingCodeTimeToThink, { timeout: 5000 })
      } catch (error) {'enter code here'
        console.log("The element didn't appear.")
      }
      if (compare) 
            {
                await this.compareScreenshot(screenshotTitle);
            } 
            else
            {
                await this.addTestScreenshot(flowName, screenshotTitle); 
            }
            
        await this.page.waitForSelector(locators.BookingCodeTimeToThink, { timeout: 20000 })

        const visible = await this.page.isVisible(locators.BookingCodeTimeToThink);
        expect(visible).toBeTruthy();
 
}

}
