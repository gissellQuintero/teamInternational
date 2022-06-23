import { expect, Page } from "@playwright/test";
import {commonPage} from "../commonPage"
import { TestPage } from "../TestPage";
import locators  from './AvailabilityPageLocator';

export class AvailabilityPage extends commonPage{

    constructor(testPage:TestPage, page:Page) {
        super(testPage,page);
    }

  
    public async selectFlightsByDefault(flowName: string,screenshotTitle:string, compare:boolean){
        const tripType: string = this.testPage.getValue("tripType")
        const fareOutBound: string = this.testPage.getValue("fareOutBound")
        const fareInBound: string = this.testPage.getValue("fareInBound")
      

        if(tripType.includes('round')){
            await this.page.waitForSelector(locators.Flight_AvailableBounds);
            await this.page.click(locators.Flight_AvailableBounds);

            switch(fareOutBound) { 
                case "XS": { 
                    await this.page.click(locators.BTN_FareXSMobile,{force:true});
                   break; 
                } 
                case "S": { 
                    await this.page.click(locators.BTN_FareS,{force:true});
                    await this.page.click(locators.BTN_ContinueFareS);
                   break; 
                } 
                case "M": { 
                    await this.page.click(locators.BTN_FareM,{force:true});
                    break; 
                 }
                 case "L": { 
                    await this.page.click(locators.BTN_FareL,{force:true});
                    break; 
                 }
                 case "XL": { 
                    await this.page.click(locators.BTN_BusinessClass); 
                    await this.page.click(locators.BTN_FareXL,{force:true});
                    break; 
                 }
                default: { 
                    await this.page.click(locators.BTN_BusinessClass); 
                    await this.page.click(locators.BTN_FareXXL,{force:true});
                   break; 
                } 
             } 
          
            await this.page.waitForSelector(locators.Flight_AvailableBounds);
            await this.page.waitForTimeout(5000)
            await this.page.click(locators.Flight_AvailableBounds);
           
        }
        if(tripType.includes('one')){
            await this.page.waitForSelector(locators.Flight_AvailableBounds);
            await this.page.click(locators.Flight_AvailableBounds);
        }
        //take the screenshot and add to the reporter
        await this.page.waitForSelector(locators.Flight_AvailableBounds);
        
        switch(fareInBound) { 
                case "XS": { 
                    await this.page.click(locators.BTN_FareXS,{force:true});
                   break; 
                } 
                case "S": { 
                    await this.page.click(locators.BTN_FareS,{force:true});
                   break; 
                } 
                case "M": { 
                    await this.page.click(locators.BTN_FareM,{force:true});
                    break; 
                 }
                 case "L": { 
                    await this.page.click(locators.BTN_FareLMobile,{force:true});
                    break; 
                 }
                 case "XL": { 
                    await this.page.click(locators.BTN_BusinessClass); 
                    await this.page.click(locators.BTN_FareXL,{force:true});
                    break; 
                 }
                default: { 
                    await this.page.click(locators.BTN_BusinessClass); 
                    await this.page.click(locators.BTN_FareXXL,{force:true});
                   break; 
                } 
         } 
       
        if (compare) 
        {
            await this.compareScreenshot(screenshotTitle);
        } 
        else
        {
            await this.addTestScreenshot(flowName, screenshotTitle);
        }
     
    }
    
    public async validateTripInfo(flowName:string,screenshotTitle:string, compare:boolean){
        try {
        const tripType: string = this.testPage.getValue("tripType");
        if(tripType.includes('round')){
            const visible = await this.page.isVisible(locators.LBL_footerOutbound);
            expect(visible).toBeTruthy();
        }else{
            const visible = await this.page.isVisible(locators.LBL_footerInbound);
            expect(visible).toBeTruthy();
        }
        if (compare) 
        {
            await this.compareScreenshot(screenshotTitle); 
        } 
        else
        {
            await this.addTestScreenshot(flowName, screenshotTitle);
        }
        await this.page.click(locators.BTN_Continue);
          } catch (error) {
            console.error(error);
        }
    }

}
