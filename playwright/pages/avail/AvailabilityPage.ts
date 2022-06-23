import { expect, Page } from "@playwright/test";
import {commonPage} from "../commonPage"
import { TestPage } from "../TestPage";
import locators  from './AvailabilityPageLocator';

export class AvailabilityPage extends commonPage{

    constructor(testPage:TestPage, page:Page) {
        super(testPage,page);
    }

    public async validateFromLocation(){
        const fromValue = this.testPage.getValue("from");
        const inputVal = await this.page.inputValue(locators.FlightDepartureCityInput);
        await expect(inputVal.indexOf(fromValue)).toBeTruthy();
    }

    
    public async validateToLocation(){
        const fromValue = this.testPage.getValue("from");
        await this.page.click('.modify-search-content > .header > .expander-button > .material-icons');
        const inputVal = await this.page.inputValue(locators.FlightArrivalCityInput);
        await expect(inputVal.indexOf(fromValue)).toBeTruthy();
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
                    //await this.page.click('[data-test=TA-ff-XS]',{force:true});
                    await this.page.click(locators.BTN_FareXS,{force:true});
                   break; 
                } 
                case "S": { 
                    await this.page.click(locators.BTN_FareS,{force:true});
                //    await this.page.click(locators.BTN_ContinueFareS);
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
            await this.page.click(locators.BTN_BestPrice);
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
            await this.addTestScreenshot(flowName, screenshotTitle);
        }
        await this.page.click(locators.BTN_Continue);
          } catch (error) {
            console.error(error);
        }
    }

}
