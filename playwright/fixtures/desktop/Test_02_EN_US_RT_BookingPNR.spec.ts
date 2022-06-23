import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';
import * as XLSX from 'xlsx';
import { TestPage } from '../../pages/testPage';
import { AvailabilityPage } from '../../pages/avail/AvailabilityPage';
import { PassengerPage } from '../../pages/pax/PassengerPage';
import { AncillariesPage } from '../../pages/ancil/AncillariesPage';
import { PurchasePage} from '../../pages/purc/PurchasePage';
import { ConfirmationPage} from '../../pages/conf/ConfirmationPage';
/*
const flowName = 'Test_02_EN_US_RT_BookingPNR';
const env = 'Release_UAT'
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
        await availPage.selectFlightsByDefault(flowName,'TC02-availBounds',compare);
    });

    test('Trip summary check for bound cards', async() => {
        const availPage = new AvailabilityPage(testPage,page);
        await availPage.validateTripInfo(flowName,'TC02-TripSummary',compare);
    });

    test('Passenger page fill basic information', async() =>{
        const paxPage = new PassengerPage(testPage,page);
        await paxPage.fillOutPassengerInformation(flowName,'TC02-PassengerInformation',compare);
    })

    test('Passenger page fill contact information', async() =>{
        const paxPage = new PassengerPage(testPage,page);
        await paxPage.enterContactInfo(flowName,'TC02-ContactInformation',compare);
    })

    test('Ancillaries page select Time To Think', async() => {
        const ancilPage = new AncillariesPage(testPage,page);
        await ancilPage.selectTTTOption(flowName,'TC02-TimeToThink',compare);
        
    });

    test('PURC page - Fill out International Card Information', async() => {
        const purcPage = new PurchasePage(testPage,page);
        await purcPage.enterInternationalCardDetails(flowName,'TC02-CardInformation',compare);
    });

    test('PURC page - Fill out Cardholder Information', async() => {
        const purcPage = new PurchasePage(testPage,page);
        await purcPage.enterCardholderInformation(flowName,'TC02-CardInformation',compare);
    });

    test('PURC page - Fill out International Billing Information', async() => {
        const purcPage = new PurchasePage(testPage,page);
        await purcPage.enterInternationalBillingDetails(flowName,'TC02-BillInformation',compare);
    });

    test('CONF page', async() =>{
        const confPage = new ConfirmationPage(testPage,page);
        await confPage.validatePNRTTT(flowName,'TC02-ConfirmationPage',compare)
    });

});*/