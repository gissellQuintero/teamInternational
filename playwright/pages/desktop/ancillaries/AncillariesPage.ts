import { expect, Page } from "@playwright/test";
import {commonPage} from "../../commonPage"
import { TestPage } from "../../testPage";
import locators  from './AncillariesPageLocators';

export class AncillariesPage extends commonPage{
    
    constructor(testPage:TestPage, page:Page) {
        super(testPage,page);
    }

    public async selectAdditionalBaggage(flowName:string,screenshotTitle:string,compare:boolean, path:string) {
        const extraBaggage = this.testPage.getValue("BuyExtraBaggage");
        const sportEquipment = this.testPage.getValue("SportEquipment");
        const insurance = this.testPage.getValue("Insurance");
        const seat = this.testPage.getValue("Seat");

        if(seat=="X")
        {
        await this.page.click(locators.Add_Seat);
        await this.page.click(locators.BTN_SelectSeat);
        await this.page.click(locators.BTN_NextFligth);
        await this.page.click(locators.BTN_Confirm);
        } 

        if(extraBaggage=="X")
        {
        await this.page.waitForSelector(locators.Add_Baggage, { timeout: 20000 })
        await this.page.click(locators.Add_Baggage);
        await this.page.click(locators.Add_CarryOn);
        await this.page.click(locators.Add_AditionalBaggage);
        } 
        
        
        if(insurance=="X")
        {
        await this.page.click(locators.Add_Insurance);
        await this.page.click(locators.BTN_SaveAndCloseInsurance);
        } 

        if(sportEquipment=="X")
        {
        await this.page.click(locators.Add_SportEquipment);
        await this.page.click(locators.Add_Bycicle);
        await this.page.click(locators.Add_Golf);
        await this.page.click(locators.BTN_SaveAndClose);
        
        } 
       
        if (compare) 
        {
            await this.compareScreenshot(screenshotTitle);
        } 
        else
        {
            await this.addTestScreenshot(flowName, screenshotTitle,path);
        }
        await this.page.click(locators.BTN_NextPage);
           
    }

    public async selectTTTOption(flowName: string, screenshotTitle: string, compare: boolean, path:string) {
        if (compare) 
        {
            await this.compareScreenshot(screenshotTitle);
        } 
        else
        {
            await this.addTestScreenshot(flowName, screenshotTitle,path);
        }
        
        await this.page.click(locators.BTN_TimeToThink)
    }
       
}
