import { expect,Page } from "@playwright/test";
import { TestPage } from "./TestPage";


export class commonPage {
 /* static compareScreenshot(arg0: string) {
      throw new Error('Method not implemented.');
  }*/
  protected testPage: TestPage;
  protected page: Page;
  constructor(testPage: TestPage, page: Page) {
    this.testPage=testPage;
    this.page=page
  }
  //function to add screenshot in reporter
  protected async addTestScreenshot(flowName:string,title:string){
    await this.page.waitForTimeout(8000)
    await this.page.screenshot({fullPage:true, path:'./playwright/fixtures/desktop/VC_'+flowName+'.spec.ts-snapshots/'+title+'-Chrome-Stable-win32.png'})
  }

  protected async compareScreenshot(title:string){
   //function compare screenshots 
    await this.page.waitForTimeout(8000)
    expect(await this.page.screenshot({ fullPage: true })).toMatchSnapshot(title+".png");

  }
 }
