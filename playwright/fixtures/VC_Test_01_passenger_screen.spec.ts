import { test, expect, chromium, Browser, BrowserContext, Page } from '@playwright/test';
import * as XLSX from 'xlsx';
import { TestPage } from '../pages/testPage';
import { AvailabilityPage } from '../pages/avail/AvailabilityPage';
import { PassengerPage } from '../pages/pax/PassengerPage';

/*
const flowName = 'VC_Test_01_passenger_screen';
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

    test('Avail page From City', async() => {
        const availPage = new AvailabilityPage(testPage,page);
        await availPage.validateFromLocation();
    });

    test('Avail page To City', async() => {
        const availPage = new AvailabilityPage(testPage,page);
        await availPage.validateToLocation();
    });

    test('Avail page select default fare', async() => {
        const availPage = new AvailabilityPage(testPage,page);
        await availPage.selectFlightsByDefault(flowName,'TC01-availBounds',false);
    });

    test('Trip summary check for bound cards', async() => {
        const availPage = new AvailabilityPage(testPage,page);
        await availPage.validateTripInfo(flowName,'TC01-TripSummary',false);
    });

    test('Passenger page fill basic information', async() =>{
        const paxPage = new PassengerPage(testPage,page);
        await paxPage.fillOutPassengerInformation(flowName,'TC01-PassengerInformation',false);
    })

    test('Passenger page fill contact information', async() =>{
        const paxPage = new PassengerPage(testPage,page);
        await paxPage.enterContactInfo(flowName,'TC01-ContactInformation',compare);
    })

    
});*/