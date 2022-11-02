import { test, expect, chromium, Browser, BrowserContext, Page, devices } from '@playwright/test';
import * as XLSX from 'xlsx';
import { TestPage } from '../../pages/testPage';
import { PrincipalWebPage } from '../../pages/desktop/PrincipalPage';


const flowName = 'findSections';

test.describe(() => {
    let browser: Browser
    let context: BrowserContext;
    let page: Page;
    let testPage: TestPage;
    test.beforeAll(async() => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page =  await context.newPage();
        
        const testDataFile: string = "./playwright/testData.xlsx";
        testPage = new TestPage();
        const wb = XLSX.readFile(testDataFile);
        testPage.intializeFlow(wb,flowName);

        if(wb){
            await page.goto("https://www.teaminternational.com/");
        }else{
            throw new Error('Cannot init the workbook')
        }
    });

    test('Find available sections', async() => {
        const principalPage = new PrincipalWebPage(testPage,page);
        await principalPage.findSections(flowName,'TestCase01-');
    });
  

});