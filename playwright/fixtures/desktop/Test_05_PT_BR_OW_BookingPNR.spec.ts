import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';
import * as XLSX from 'xlsx';
import { TestPage } from '../../pages/testPage';
import { AvailabilityPage } from '../../pages/avail/AvailabilityPage';
import { PassengerPage } from '../../pages/pax/PassengerPage';
import { AncillariesPage } from '../../pages/ancil/AncillariesPage';
import { PurchasePage} from '../../pages/purc/PurchasePage';
import { ConfirmationPage} from '../../pages/conf/ConfirmationPage';

const flowName = 'Test_05_PT_BR_OW_BookingPNR';
const env = 'PR';
const compare = false;
/*
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

    test('Avail page select default fare', async() => {
        const availPage = new AvailabilityPage(testPage,page);
        await availPage.selectFlightsByDefault(flowName,'TC05-availBounds',compare);
    });

    test('Trip summary check for bound cards', async() => {
        const availPage = new AvailabilityPage(testPage,page);
        await availPage.validateTripInfo(flowName,'TC05-TripSummary',compare);
    });

    test('Passenger page fill basic information', async() =>{
        const paxPage = new PassengerPage(testPage,page);
        await paxPage.fillOutPassengerInformation(flowName,'TC05-PassengerInformation',compare);
        await paxPage.enterSpecialFeatures(flowName,'TC05-SpecialServices',compare);
    })

    test('Passenger page fill contact information', async() =>{
        const paxPage = new PassengerPage(testPage,page);
        await paxPage.enterContactInfo(flowName,'TC05-ContactInformation',compare);
       
    })

    test('Ancillaries page Personalize your flight', async() => {
        const ancilPage = new AncillariesPage(testPage,page);
        await ancilPage.selectAdditionalBaggage(flowName,'TC05-BuyExtraBaggage',compare);
        
    });

    test('PURC page - Fill out Card Information', async() => {
        const purcPage = new PurchasePage(testPage,page);
        await purcPage.enterCardDetailsCPD(flowName,'TC05-CardInformation',compare);
    });

    test('PURC page - Fill out Cardholder Information', async() => {
        const purcPage = new PurchasePage(testPage,page);
        await purcPage.enterCardholderInformationCPD(flowName,'TC05-CardInformation',compare);
    });

    test('PURC page - Fill out International Billing Information', async() => {
        const purcPage = new PurchasePage(testPage,page);
        await purcPage.enterInternationalBillingDetailsCPD(flowName,'TC05-BillInformation',compare);
    });

    test('CONF page', async() =>{
        const confPage = new ConfirmationPage(testPage,page);
        await confPage.validatePNR(flowName,'TC05-ConfirmationPage',compare)
    });

});*/