import {commonPage} from "../../av-fwk/common/commonPage"
import locators from "./ConfirmationPageLocator";

export class confirmationPage extends commonPage {

    constructor() {
        super();
    }

    public async validatePNR() {
        cy.get(locators.BookingCode, { timeout: 100000 })
    }
}