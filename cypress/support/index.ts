// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// Alternatively you can use CommonJS syntax:
// require('./commands')
import "../support/commands";
const addContext = require('mochawesome/addContext')
import { TestPage } from "../av-fwk/common/TestPage";

const testDataFile: string = "./cypress/testData.xlsx";
const testPage = new TestPage();

before("Intialize Test",  () => {
  //resolved by the task event in the pluginsFile
  //reading the excel data and generate URL
  cy.task("readExcelSheet", testDataFile).then((wb) => {
    if (wb) {
      //reading excel data by pass in the test name
      testPage.intializeFlow(wb, Cypress.spec.name);
      cy.visit(testPage.returnShooterURL()
      , {
        onBeforeLoad (win) {
          cy.spy(win, 'fetch') // todo make it applicable/available on all the pages
        }
      }
      )    
    }
  })
  // beforeEach("spy request", ()=>{
  //   cy.spy(win, 'fetch') 
  // })
});

//This will capture the put the screenshot in reporter once the test is failed
Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshot = `${Cypress.config('screenshotsFolder')}/${
      Cypress.spec.name
    }/${runnable?.parent?.title} -- ${test.title} (failed).png`;
    addContext({ test }, screenshot);
  }
});

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})


