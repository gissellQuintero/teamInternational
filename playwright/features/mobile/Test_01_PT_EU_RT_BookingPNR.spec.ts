import { test, expect, chromium, Browser, BrowserContext, Page, devices } from '@playwright/test';
import * as XLSX from 'xlsx';
import { TestPage } from '../../pages/testPage';
import { AvailabilityPage } from '../../pages/mobile/availability/AvailabilityPage';
//import { TripSummaryPage} from '../../pages/mobile/TripSummary/TripSummaryPage';
//import { PassengerPage } from '../../pages/mobile/passenger/PassengerPage';
//import { AncillariesPage } from '../../pages/mobile/ancillaries/AncillariesPage';
//import { PurchasePage} from '../../pages/mobile/purchase/PurchasePage';
//import { ConfirmationPage} from '../../pages//mobile/confirmation/ConfirmationPage';


const flowName = 'Test_01_PT_EU_RT_BookingPNR';
const env = 'Release_UAT';
const compare = false;
const iPhone = devices['iPhone 6'];


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
        await availPage.selectFlightsByDefault(flowName,'TC01-01InitialPage',compare);
    });
/*
    test('Trip summary check for bound cards', async() => {
        const tripPage = new TripSummaryPage(testPage,page);
        await tripPage.validateTripInfo(flowName,'TC01-TripSummary',compare);
    });

    test('Passenger page fill basic information', async() =>{
        const paxPage = new PassengerPage(testPage,page);
        await paxPage.fillOutPassengerInformation(flowName,'TC01-PassengerInformation',false);
    });

    test('Passenger page fill contact information', async() =>{
        const paxPage = new PassengerPage(testPage,page);
        await paxPage.enterContactInfo(flowName,'TC01-ContactInformation',compare);
    });
    
    test('Ancillaries page Personalize your flight', async() => {
        const ancilPage = new AncillariesPage(testPage,page);
        await ancilPage.selectAdditionalBaggage(flowName,'TC01-BuyExtraBaggage',compare);
        
    });
    test('Purchase page - Fill out Card Information', async() => {
        const purcPage = new PurchasePage(testPage,page);
        await purcPage.enterCardDetails(flowName,'TC01-CardInformation',compare);
    });

    test('Purchase page - Fill out Billing Information', async() => {
        const purcPage = new PurchasePage(testPage,page);
        await purcPage.enterBillingDetails(flowName,'TC01-BillInformation',compare)
    });

    test('CONF page', async() =>{
        const confPage = new ConfirmationPage(testPage,page);
        await confPage.validatePNR(flowName,'TC01-ConfirmationPage',compare)
    });*/

});