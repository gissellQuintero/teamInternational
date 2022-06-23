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
        await this.page.click('.modify-search-content > .header > .expander-button > .material-icons');
        const inputVal = await this.page.inputValue(locators.FlightDepartureCityInput);
        await expect(inputVal.indexOf(fromValue)).toBeTruthy();
    }

    
    public async validateToLocation(){
        const fromValue = this.testPage.getValue("from");
        await this.page.click('.modify-search-content > .header > .expander-button > .material-icons');
        const inputVal = await this.page.inputValue(locators.FlightArrivalCityInput);
        await expect(inputVal.indexOf(fromValue)).toBeTruthy();
    }

    public async selectFlightsByDefault(screenshotTitle:string){
        const tripType: string = this.testPage.getValue("tripType")
        
        if(tripType.includes('round')){
            await this.page.waitForSelector(locators.Flight_AvailableBounds);
            await this.page.click(locators.Flight_AvailableBounds);
            await this.page.click(locators.BTN_FareM,{force:true});
            await this.page.waitForSelector(locators.Flight_AvailableBounds);
            await this.page.waitForTimeout(5000)
            await this.page.click(locators.Flight_AvailableBounds);
        }
        if(tripType.includes('one')){
            await this.page.waitForSelector(locators.Flight_AvailableBounds);
            await this.page.click(locators.Flight_AvailableBounds);
        }
        //take the screenshot and add to the reporter
        await this.page.waitForSelector(locators.BTN_FareM);
        await this.page.click(locators.BTN_FareM,{force:true});
        await this.compareScreenshot(screenshotTitle);
        
     
    }
    
    public async validateTripInfo(screenshotTitle:string){
        const tripType: string = this.testPage.getValue("tripType");
        await this.page.waitForSelector('.trip-summary-title');
        const boundCardsTripInfo = await this.page.$$('bound-displayer-cont');
        if(tripType.includes('round')){
            expect(boundCardsTripInfo.length).toBe(2);
        }else{
            expect(boundCardsTripInfo.length).toBe(1);
        }


        
        await this.compareScreenshot(screenshotTitle);
        await this.page.click(locators.BTN_Continue);
    }

}
