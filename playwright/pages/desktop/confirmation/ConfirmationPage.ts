import { expect, Page } from "@playwright/test";
import {commonPage} from "../../commonPage"
import { TestPage } from "../../testPage";
import locators  from './ConfirmationPageLocators';


export class ConfirmationPage extends commonPage{
    constructor(testPage:TestPage, page:Page) {
     super(testPage,page);
 }

 public async validatePNR(flowName:string,screenshotTitle:string, compare:boolean, path:string) {
    //debugger
    try {
        await this.page.waitForSelector(locators.BookingCode)
      } catch (error) {'enter code here'
        console.log("The element didn't appear.")
      }
      if (compare) 
            {
                await this.compareScreenshot(screenshotTitle);
            } 
            else
            {
                await this.addTestScreenshot(flowName, screenshotTitle,path,locators.BookingCode); 
            }
            
        await this.page.waitForSelector(locators.BookingCode)

        const visible = await this.page.isVisible(locators.BookingCode);
        expect(visible).toBeTruthy();
 
}

public async validatePNRTTT(flowName:string,screenshotTitle:string, compare:boolean, path:string) {
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
                await this.addTestScreenshot(flowName, screenshotTitle,path,locators.BookingCodeTimeToThink); 
            }
            
        await this.page.waitForSelector(locators.BookingCodeTimeToThink)

        const visible = await this.page.isVisible(locators.BookingCodeTimeToThink);
        expect(visible).toBeTruthy();
 
}

}
