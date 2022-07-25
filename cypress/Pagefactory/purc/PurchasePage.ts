import {commonPage} from "../../av-fwk/common/commonPage"
import locators from "./PurchasePageLocators";
import { CreditCardTypes } from "../../av-fwk/config/EnumConstants";


export class purchasePage extends commonPage {

    constructor() {
        super();
    }

    public enterCardDetails() {
        const cardInfo: string[] = this.getValue('cardInfo').split(',') 
        cy.get(locators.CC_Number).type(cardInfo[0])
        cy.get(locators.CC_Name).type(this.getValue('cardName'))
        cy.get(locators.CC_Exp).type(cardInfo[1])
        cy.get(locators.CC_CSC).type(cardInfo[2])
    }

    public enterBillingDetails() {
        cy.get(locators.Country).click()
        cy.get(locators.PANEL_ConutrySelection)
            .contains('Colombia').click()

        cy.get(locators.City)
            .type('city')

        cy.get(locators.ZIPCode)
            .type('123')

        cy.get(locators.Address)
            .type('address')

        cy.get(locators.Contact)
            .type('test@test.com')

        cy.get('.gdpr-checkbox-container').within(() => {
            cy.get('.mat-checkbox-input').check({force: true})
        })

        cy.get('.payment-button > .continue-btn').click({force: true})

    }


}
