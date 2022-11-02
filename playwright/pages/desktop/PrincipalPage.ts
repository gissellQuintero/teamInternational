import { expect, Page } from "@playwright/test";
import { commonPage } from "../commonPage"
import { TestPage } from "../testPage";
import locators from './PrincipalPageLocators';
import fetch from 'node-fetch';



export class PrincipalWebPage extends commonPage {

   constructor(testPage: TestPage, page: Page) {
      super(testPage, page);
   }

   public async findSections(flowName: string, screenshotTitle: string) {

   const selector = "(//span[@class='fp-sr-only'])";

   const selectorLinks = "(//ul[@class='sub-menu']//li//a)";

   const nodel = this.page.$$(selector);
    console.log ("NUMERO ELEMENTOS ---  " + (await nodel).length);

    const numberLinks = this.page.$$(selectorLinks);
    console.log ("NUMERO Links ---  " + (await numberLinks).length);
    

for (let i = 1; i < (await nodel).length; i++) {
 
   const final ="#fp-nav > ul > li:nth-child("+i+") > a";
   console.log("selector of element " + i + final );
   await this.page.locator(final).click();
   await this.addTestScreenshot(flowName, screenshotTitle+ i,"desktop");
}

await this.page.locator("(//div[@class='open-big-menu menu-btn'])").click();
await this.addTestScreenshot(flowName, "TestCase01-Menu","desktop");

for (let i = 1; i < (await numberLinks).length; i++) {
   
   let result = await this.page.locator("(//ul[@class='sub-menu']//li//a)["+i+"]").getAttribute("href");
   let value:string | undefined = '';;
   
   console.log("URL - " + i + " - " + result);
  
 /*const response = await fetch(<any>result, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
      console.log("REPUESTA - " + response);
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }*/  
    
} 
}
}