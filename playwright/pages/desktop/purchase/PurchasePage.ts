import { expect, Page } from "@playwright/test";
import { type } from "os";
import {commonPage} from "../../commonPage"
import { TestPage } from "../../testPage";
import locators  from './PurchasePageLocators';
export class PurchasePage extends commonPage{
       
   
    constructor(testPage:TestPage, page:Page) {
        super(testPage,page);
    }

    public async  enterCardDetails(flowName:string,screenshotTitle:string,compare:boolean, path:string) {
        const methodPayment = this.testPage.getValue("methodPayment");
        const cardInfo: string[] = this.testPage.getValue('cardInfo').split(',');
        const name = this.testPage.getValue('cardName');
       
        if (methodPayment == "Credit Card") 
        {
        await this.page.type(locators.CC_Number, cardInfo[0]);
        await this.page.type(locators.CC_Name,name);
        await this.page.type(locators.CC_Exp, cardInfo[1]);
        await this.page.type(locators.CC_CSC, cardInfo[2]);
        } 
        if (methodPayment == "PSE") 
        {
         await this.page.click(locators.RDB_DebitOption);
         await this.page.waitForTimeout(5000)
         await this.page.click(locators.SLC_SelectBank);
         await this.page.waitForTimeout(5000)
         await this.page.click(locators.SLC_BUC);
         await this.page.click(locators.RDB_NaturalPerson);
         await this.page.click(locators.SLC_DocumentID);
         await this.page.click(locators.SLC_CC_Selection);
         await this.page.type(locators.TXT_CC_Number_DD, cardInfo[0]);
         await this.page.click(locators.CHCK_PrivacyPolicy);
         await this.page.click(locators.BTN_SecurePayment);

        }
        if (methodPayment == "OnSite") 
        {
         await this.page.click(locators.RDB_OnsiteOption);
         await this.page.waitForTimeout(5000)
         await this.page.click(locators.RDB_BancoBogota);
         await this.page.waitForTimeout(5000)
         await this.page.click(locators.CHCK_PrivacyPolicy);
         await this.page.click(locators.BTN_SecurePayment);

        }

        if (compare) 
        {
            await this.compareScreenshot(screenshotTitle);
        } 
        else
        {
            await this.addTestScreenshot(flowName, screenshotTitle, path);
        }
    }

    public async enterBillingDetails(flowName:string,screenshotTitle: string,compare:boolean, path:string) {
       
        await this.page.click(locators.Country);
        await this.page.click(locators.PANEL_CountrySelection);
        await this.page.type(locators.City,'City');
        await this.page.type(locators.ZIPCode,'123');
        await this.page.type(locators.Address,'address');
        await this.page.type(locators.Contact,'test@test.com');
        await this.page.check(locators.Accept_information);
        if (compare) 
        {
            await this.compareScreenshot(screenshotTitle);
        } 
        else
        {
            await this.addTestScreenshot(flowName, screenshotTitle,path);
        }
        
        await this.page.click(locators.BTN_Continueandpay);
  
            
    }

    public async enterDebitDetails(flowName: string, screenshotTitle: string, compare: boolean, path:string) {
        const authorization = this.testPage.getValue("AuthorizationID");
        var today = new Date();
        var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

        await this.page.click(locators.BTN_Debug);
        await this.page.type(locators.TXT_Bank_Process_Date,date);
        await this.page.type(locators.TXT_Authorization_ID,authorization);
        await this.page.click(locators.BTN_Call);
        await this.page.click(locators.BTN_Return);

        if (compare) 
        {
            await this.compareScreenshot(screenshotTitle);
        } 
        else
        {
            await this.addTestScreenshot(flowName, screenshotTitle, path);
        }
    }

    public async enterInternationalCardDetails(flowName: string, screenshotTitle: string, compare: boolean, path:string) {
        const cardInfo: string[] = this.testPage.getValue('cardInfo').split(',');

        await this.page.type(locators.CC_Number, cardInfo[0]);
        await this.page.type(locators.CC_Name, (this.testPage.getValue('cardName')));
        await this.page.type(locators.CC_Exp, cardInfo[1]);
        await this.page.type(locators.CC_CSC, cardInfo[2]);
        await this.page.click(locators.SLC_PlaceOfIssueOfTheCard);
        await this.page.click(locators.SLC_PlaceOfIssueOfTheCardOption);

        if (compare) 
        {
            await this.compareScreenshot(screenshotTitle);
        } 
        else
        {
            await this.addTestScreenshot(flowName, screenshotTitle,path);
        }
    }
       

    public async enterCardholderInformation(flowName: string, screenshotTitle: string, compare: boolean, path:string) {
        const cardHolderName = this.testPage.getValue("cardHolderName");
        const cardHolderSurname = this.testPage.getValue("cardHolderSurname");
        const cardHolderIdNumber = this.testPage.getValue("cardHolderIdNumber");
        const cardHolderEmail = this.testPage.getValue("cardHolderEmail");
        const cardHolderPhoneNumber = this.testPage.getValue("cardHolderPhoneNumber");


        await this.page.type(locators.TXT_cardHolderName,cardHolderName);
        await this.page.type(locators.TXT_cardHolderSurname,cardHolderSurname);
        await this.page.click(locators.SLC_DocumentType);
        await this.page.click(locators.SLC_DocumentTypeSelect);
        await this.page.type(locators.TXT_cardHolderIdNumber,cardHolderIdNumber);
        await this.page.type(locators.TXT_cardHolderEmail,cardHolderEmail);
        await this.page.click(locators.SLC_AreaCode);
        await this.page.click(locators.SLC_AreaCodeSelect);      
        await this.page.type(locators.TXT_cardHolderPhoneNumber,cardHolderPhoneNumber);
        
        if (compare) 
        {
            await this.compareScreenshot(screenshotTitle);
        } 
        else
        {
            await this.addTestScreenshot(flowName, screenshotTitle,path);
        }
    }

    public async enterInternationalBillingDetails(flowName:string,screenshotTitle: string,compare:boolean, path:string) {
        const billingAddressCity = this.testPage.getValue("City");
        const billingAddressZipCode = this.testPage.getValue("ZipCode");
        const billingAddressAddress = this.testPage.getValue("Address");
     

        await this.page.click(locators.SLC_State);
        await this.page.click(locators.SLC_StateSelect);
        await this.page.type(locators.City,billingAddressCity);
        await this.page.type(locators.ZIPCode,billingAddressZipCode);
        await this.page.type(locators.Address,billingAddressAddress);
        await this.page.check(locators.CHCK_InternationalPrivacyPolicy);
       
        if (compare) 
        {
            await this.compareScreenshot(screenshotTitle);
        } 
        else
        {
            await this.addTestScreenshot(flowName, screenshotTitle, path);
        }
        
        await this.page.click(locators.BTN_SecurePayment);
            
    }


    public async enterCardDetailsCPD(flowName: string, arg1: string, compare: boolean, path:string) {
       const cardInfo: string[] = this.testPage.getValue('cardInfo').split(',');
   
        await this.page.type(locators.TXT_cardNumber,cardInfo[0]);
        await this.page.type(locators.TXT_cardExpiryDate,cardInfo[1]);
        await this.page.type(locators.TXT_cardVerificationCode,cardInfo[2])
    }

    public async enterCardholderInformationCPD(flowName: string, screenshotTitle: string, compare: boolean, path:string) {
        const cardHolderName = this.testPage.getValue("cardHolderName");
        const cardHolderSurname = this.testPage.getValue("cardHolderSurname");
        const cardHolderIdNumber = this.testPage.getValue("cardHolderIdNumber");
        const cardHolderEmail = this.testPage.getValue("cardHolderEmail");
        const cardHolderPhoneNumber = this.testPage.getValue("cardHolderPhoneNumber");


        await this.page.type(locators.TXT_cardHolderNameCPD,cardHolderName);
        await this.page.type(locators.TXT_cardHolderSurnameCPD,cardHolderSurname);
        await this.page.click(locators.SLC_DocumentTypeCPD);
        await this.page.click(locators.SLC_DocumentTypeSelectCPD);
        await this.page.type(locators.TXT_cardHolderIdNumberCPD,cardHolderIdNumber);
        await this.page.type(locators.TXT_cardHolderEmailCPD,cardHolderEmail);
        await this.page.click(locators.SLC_AreaCodeCPD);
        await this.page.click(locators.SLC_AreaCodeSelectCPD);      
        await this.page.type(locators.TXT_cardHolderPhoneNumberCPD,cardHolderPhoneNumber);
        
        if (compare) 
        {
            await this.compareScreenshot(screenshotTitle);
        } 
        else
        {
            await this.addTestScreenshot(flowName, screenshotTitle,path);
        }
    }

    public async enterInternationalBillingDetailsCPD(flowName:string,screenshotTitle: string,compare:boolean, path:string) {
        const billingAddressCity = this.testPage.getValue("City");
        const billingAddressAddress = this.testPage.getValue("Address");
     

        await this.page.type(locators.TXT_cityCPD,billingAddressCity);
        await this.page.type(locators.TXT_addressCPD,billingAddressAddress);
        await this.page.check(locators.CHCK_InternationalPrivacyPolicyCPD);
       
        if (compare) 
        {
            await this.compareScreenshot(screenshotTitle);
        } 
        else
        {
            await this.addTestScreenshot(flowName, screenshotTitle,path);
        }
        
        await this.page.click(locators.BTN_continueAndPayCPD);
            
    }

}