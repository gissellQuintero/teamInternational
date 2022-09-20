import { test, expect, chromium, Browser, BrowserContext, Page, devices } from '@playwright/test';
import * as XLSX from 'xlsx';
import { TestPage } from '../../pages/testPage';
import { AvailabilityPage } from '../../pages/mobile/availability/AvailabilityPage';
import { PassengerPage } from '../../pages/mobile/passenger/PassengerPage';
import { AncillariesPage } from '../../pages/mobile/ancillaries/AncillariesPage';
import { PurchasePage} from '../../pages/mobile/purchase/PurchasePage';
import { ConfirmationPage} from '../../pages//mobile/confirmation/ConfirmationPage';
import { TripSummaryPage } from '../../pages/desktop/tripSummary/TripSummaryPage';


const flowName = 'Test_01_PT_EU_RT_BookingPNR';
const env = 'Release_UAT';
const compare = false;
const path = "mobile";


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

    test('Availability Page select default fares', async() => {
        const availPage = new AvailabilityPage(testPage,page);
        await availPage.selectFlightsByDefault(flowName,'TC01-01InitialPage',compare,path);
    });

    test('Trip summary check for bound cards', async() => {
        const tripPage = new TripSummaryPage(testPage,page);
        await tripPage.validateTripInfo(flowName,'TC01-TripSummary',compare,path);
    });

    test('Passenger page fill passenger information', async() =>{
        const paxPage = new PassengerPage(testPage,page);
        await paxPage.fillOutPassengerInformation(flowName,'TC01-PassengerInformation',compare,path);
        await paxPage.enterContactInfo(flowName,'TC01-ContactInformation',compare,path);
    });
   
    test('Ancillaries page Personalize your flight', async() => {
        const ancilPage = new AncillariesPage(testPage,page);
        await ancilPage.selectAdditionalBaggage(flowName,'TC01-BuyExtraBaggage',compare,path);
        
    });
    
    test('Purchase page - Fill out Card Information', async() => {
        const purcPage = new PurchasePage(testPage,page);
        await purcPage.enterCardDetails(flowName,'TC01-CardInformation',compare,path);
    });

    test('Purchase page - Fill out Billing Information', async() => {
        const purcPage = new PurchasePage(testPage,page);
        await purcPage.enterBillingDetails(flowName,'TC01-BillInformation',compare,path)
    });

    test('CONF page', async() =>{
        const confPage = new ConfirmationPage(testPage,page);
        await confPage.validatePNR(flowName,'TC01-ConfirmationPage',compare,path)
    });

});