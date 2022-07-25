import {commonPage} from "../../av-fwk/common/commonPage"
import locators  from './TripPageLocator';


export class TripPage extends commonPage{

    constructor() {
        super();
    }

    public async continue() {
        cy.wait(3000)
        cy.get(locators.BTN_Continue).click()
    }

}
