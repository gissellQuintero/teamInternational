import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';
import * as XLSX from 'xlsx';
import { TestPage } from '../../pages/testPage';
import { AvailabilityPage } from '../../pages/avail/AvailabilityPage';
import { PassengerPage } from '../../pages/pax/PassengerPage';
import { AncillariesPage } from '../../pages/ancil/AncillariesPage';
import { PurchasePage} from '../../pages/purc/PurchasePage';
import { ConfirmationPage} from '../../pages/conf/ConfirmationPage';
/*
const flowName = 'Test_04_SP_CO_OW_BookingPNR';
const env = 'PR';
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

    test('Avail page select default fare', async() => {
        const availPage = new AvailabilityPage(testPage,page);
        await availPage.selectFlightsByDefault(flowName,'TC04-availBounds',compare);
    });

    test('Trip summary check for bound cards', async() => {
        const availPage = new AvailabilityPage(testPage,page);
        await availPage.validateTripInfo(flowName,'TC04-TripSummary',compare);
    });

    test('Passenger page fill basic information', async() =>{
        const paxPage = new PassengerPage(testPage,page);
        await paxPage.fillOutPassengerInformation(flowName,'TC04-PassengerInformation',compare);
        await paxPage.enterSpecialFeatures(flowName,'TC04-SpecialServices',compare);
    })

    test('Passenger page fill contact information', async() =>{
        const paxPage = new PassengerPage(testPage,page);
        await paxPage.enterContactInfo(flowName,'TC04-ContactInformation',compare);
       
    })

    test('Ancillaries page Personalize your flight', async() => {
        const ancilPage = new AncillariesPage(testPage,page);
        await ancilPage.selectAdditionalBaggage(flowName,'TC04-BuyExtraBaggage',compare);
        
    });

    test('PURC page - Fill out Card Information', async() => {
        const purcPage = new PurchasePage(testPage,page);
        await purcPage.enterCardDetails(flowName,'TC04-CardInformation',compare);
    });

    test('PURC page - Fill out Debit payment method process', async() => {
        const purcPage = new PurchasePage(testPage,page);
        await purcPage.enterDebitDetails(flowName,'TC04-BillInformation',compare)
    });

    test('CONF page', async() =>{
        const confPage = new ConfirmationPage(testPage,page);
        await confPage.validatePNR(flowName,'TC04-ConfirmationPage',compare)
    });

});*/