import { expect, Page } from "@playwright/test";
import { commonPage } from "../../commonPage"
import { TestPage } from "../../testPage";
import locators  from './PassengerPageLocators';

export class PassengerPage extends commonPage{
    
    constructor(testPage:TestPage, page:Page) {
     super(testPage,page);
 }

 public async fillOutPassengerInformation(flowName:string,screenshotTitle:string, compare:boolean, path:string) {
     const year = new Date().getFullYear();
     const nbAdult = this.testPage.getValue("nbAdults");
     const nbChildren = this.testPage.getValue("nbChildren");
     const nbInfant = this.testPage.getValue("nbInfants")
     const aditionalData = this.testPage.getValue("AditionalData")

     for(let i = 0; i < nbAdult; i++){
         if(i>0 && i <nbAdult){
             await this.page.click(locators.BTN_NextPassenger);
         }
        
         await this.page.type(locators.FirstName,'Adult');
         await this.page.type(locators.LastName,'Adult');

         if(aditionalData == 'Yes' )
         {
             await this.page.click(locators.SLC_Gender);
             await this.page.click(locators.SLC_GenderSelect);
             await this.page.click(locators.SLC_Nationality);
             await this.page.click(locators.SLC_NationalitySelec);
             await this.page.type(locators.Day,'1');
             await this.page.click(locators.SLC_MonthAditional);
             await this.page.click(locators.SLC_Month);
             await this.page.type(locators.Year,(+year - 20) + "");
             await this.addTestScreenshot(flowName,'TC02-PassengerDataAditional',path);
         }

         if (compare) 
         {
             await this.compareScreenshot(screenshotTitle);
         } 
         else
         {
             await this.addTestScreenshot(flowName, screenshotTitle,path);
         }
     }
 
     for(let i = 0; i < nbChildren; i++){
     
         await this.page.click(locators.BTN_NextChildren);
         await this.page.type(locators.FirstNameChild,'Child');
         await this.page.type(locators.LastNameChild,'Child');
         
         if(aditionalData == 'Yes' )
         {
             await this.page.click(locators.SLC_Gender);
             await this.page.click(locators.SLC_GenderSelect);
             await this.page.click(locators.SLC_Nationality);
             await this.page.click(locators.SLC_NationalitySelec);
             await this.page.type(locators.Day,'1');
             await this.page.click(locators.SLC_MonthAditional);
             await this.page.click(locators.SLC_Month);
             await this.page.type(locators.Year,(+year - 4) + "");
         }
         else
         {
             await this.page.type(locators.Day,'1');
             await this.page.click(locators.Month);
             await this.page.click(locators.SLC_Month);
             await this.page.type(locators.Year,(+year - 4) + "");

         }
         
         await this.addTestScreenshot(flowName,'TC03-PassengerChildren',path);
         
     }

     
     for(let i = 0; i < nbInfant; i++){
         await this.page.click(locators.BTN_NextInfant);
         await this.page.type(locators.FirstName,'Infant');
         await this.page.type(locators.LastName,'Infant');

         if(aditionalData == 'Yes' )
         {
             await this.page.click(locators.SLC_Gender);
             await this.page.click(locators.SLC_GenderSelect);
             await this.page.click(locators.SLC_Nationality);
             await this.page.click(locators.SLC_NationalitySelec);
             await this.page.type(locators.Day,'28');
             await this.page.click(locators.SLC_MonthAditional);
             await this.page.click(locators.SLC_Month);
             await this.page.type(locators.Year,(+year - 1) + "");
         }
         else
         {
             await this.page.type(locators.Day,'28');
             await this.page.click(locators.Month);
             await this.page.click(locators.SLC_Month);
             await this.page.type(locators.Year,(+year - 1) + "");

         }
     }

     await this.addTestScreenshot(flowName,screenshotTitle,path);
    
 }

 public async enterContactInfo(flowName:string,screenshotTitle:string, compare:boolean, path:string) {
     
     await this.page.type(locators.Email,'test@test.com');
     await this.page.type(locators.Phone,'12345678');
     if (compare) 
     {
         await this.compareScreenshot(screenshotTitle);
     } 
     else
     {
         await this.addTestScreenshot(flowName, screenshotTitle,path);
    }
     await this.page.click(locators.BTN_Continue);
 }

 public async enterSpecialFeatures(flowName: string, screenshotTitle: string, compare: boolean, path:string) {
     const specialAssistance: string = this.testPage.getValue("SpecialAssistance")
     const lifeMiles: string = this.testPage.getValue("LifeMiles")
     
     if (lifeMiles.includes('X'))
     {
         await this.page.click(locators.CHKBOX_LifeMiles);
         await this.page.type(locators.FrequentTravelerNum,'98765461');


     }

     if (specialAssistance.includes('X'))
     {
         await this.page.click(locators.CHKBOX_SpecialAssitance);
         await this.page.click(locators.Box_SpecialAssitance);
         
     }

     if (compare) 
     {
         await this.compareScreenshot(screenshotTitle);
     } 
     else
     {
         await this.addTestScreenshot(flowName, screenshotTitle,path);
    }
   
   
 }

}