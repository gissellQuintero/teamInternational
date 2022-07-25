import { TSMap } from "typescript-map";
const addContext = require('mochawesome/addContext')
import { TestPage } from "./TestPage";

export class commonPage {
  testCaseName: string = "";
  testPage = new TestPage();
  constructor() {

  }
  // to place common method for all page factory classes

  public setValue(key: any, value: any) {
    debugger;
    this.testPage.setValue(key, value);
  }

  public getValue(key: any): any {
    return this.testPage.getValue(key);
  }

  public getTestClassName(): string {
    return Cypress.spec.name;
  }

  //function to add context in reporter
  public addTestContext(title: string, value: string) {
    cy.once('test:after:run', test => addContext({ test }, { title, value }));
  }

  //function to add screenshot in reporter
  public addTestScreenshot(title: string) {
    cy.once('test:after:run', (test, runnable) => {
      const screenshot = `${Cypress.config('screenshotsFolder')}/${
        Cypress.spec.name
      }/${runnable?.parent?.title} -- ${test.title}.png`;
      console.log(screenshot)
      addContext({ test }, {
        title: title,
        value: screenshot
      });
    });
  }
}
