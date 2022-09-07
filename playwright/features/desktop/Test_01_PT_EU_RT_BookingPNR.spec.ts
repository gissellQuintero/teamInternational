import { test, expect, chromium, Browser, BrowserContext, Page, devices } from '@playwright/test';
import * as XLSX from 'xlsx';
import { TestPage } from '../../pages/testPage';
import { AvailabilityPage } from '../../pages/desktop/availability/AvailiabilityPage';


const flowName = 'Test_01_PT_EU_RT_BookingPNR';
const env = 'Release_UAT';
const compare = false;

test.describe(flowName, () => {
    let browser: Browser
    let context: BrowserContext;
    let page: Page;
    let testPage: TestPage;
    test.beforeAll(async() => {
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page =  await context.newPage();
        
        const testDataFile: string = "./playwright/testData.xlsx";
        testPage = new TestPage();
        const wb = XLSX.readFile(testDataFile);
        testPage.intializeFlow(wb, flowName, env);

        if(wb){
            await page.goto(testPage.returnShooterURL());
        }else{
            throw new Error('Cannot init the workbook')
        }
    });

    test('Availability Page', async() => {
        const initialPage = new AvailabilityPage(testPage,page);
        await initialPage.selectFlightsByDefault(flowName,'TC01-01InitialPage',compare);
    });

   

});