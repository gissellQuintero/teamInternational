import { commonPage } from "../../av-fwk/common/commonPage";
import locators from "./PassengerPageLocator";
import { O_CREAT } from "constants";

export class passengerPage extends commonPage {
  constructor() {
    super();
  }

    public async enterPassengerInformation(){
        
        const year = new Date().getFullYear();
        const nbAdult = this.getValue("nbAdults")
        for(let i = 0; i < nbAdult; i++){
            cy.get(locators.PassengerInfoTab).within(() => {
                cy.get(locators.FirstName)
                    .type('Adult')

                cy.get(locators.LastName)
                    .type('Adult')

                cy.get(locators.BTN_Next).click()
            })
        }

        const nbChildren = this.getValue("nbChildren")
        for(let i = 0; i < nbChildren; i++){
        cy.get(locators.PassengerInfoTab).within(() => {
                cy.get(locators.FirstName)
                    .type('Child')

                cy.get(locators.LastName)
                    .type('Child')

                cy.get(locators.Day)
                    .type('1')

                cy.get(locators.Year)
                    .type((+year - 4) + "")

                cy.get(locators.Month)
                    .click()
            })
            cy.get(locators.PANEL_MonthSelection)
                .contains('January').click()

            cy.get(locators.PassengerInfoTab).within(() => {
                cy.get(locators.BTN_Next).click()
            })
        }

        const nbInfant = this.getValue("nbInfants")
        for(let i = 0; i < nbInfant; i++){
            cy.get(locators.PassengerInfoTab).within(() => {
                cy.get(locators.FirstName)
                    .type('Infant')

                cy.get(locators.LastName)
                    .type('Infant')

                cy.get(locators.Day)
                    .type('3')

                cy.get(locators.Year)
                    .type((+year - 1) +"")

                cy.get(locators.Month)
                    .click()
            })
            cy.get(locators.PANEL_MonthSelection)
                .contains('May').click()

            cy.get(locators.PassengerInfoTab).within(() => {
                cy.get(locators.BTN_Next).click()
            })
        }
    }

    public async enterContactInfo() {
        //const aa = await 2*2;
        cy.get(locators.PassengerInfoTab).within(() => {
            cy.get(locators.Email)
                .type('test@test.com')

            cy.get(locators.Phone)
                .type('12345678')

            cy.get(locators.AgreePolicy).within(() => {
                cy.get(locators.CHECKBOX_Agree).check({force: true})
            })

            cy.get(locators.BTN_Continue).click()
        })
    }

    public async  validatePaxDetails() {
        cy.get('.traveler-header > div > img', { timeout: 100000 })
            .should('have.class', 'done')
            .and('have.class', 'ng-star-inserted')
        cy.get(locators.CONTAINER_Service)
            .should('contain', 'Book your seat')
            .and('contain', 'Buy extra baggage')
            .and('contain', 'Add sports equipment')
    }

    public async selectAdditionalBaggage() {
        cy.get(locators.CONTAINER_Service).contains('Buy extra baggage').click()
    }

    public async addBaggage(){
        cy.get('.plus-control').click()
        cy.get('.save-button').click()
    }

    public async verifyBaggage() {
        // cy.get('.service-container').contains('Additional Baggage')
        // .get('.price-section').should('have.class', 'img')
        cy.get(locators.CONTAINER_Service).should('contain', 'Book your seat')
    }

    public clickContinue() {
        cy.get(locators.BTN_NextPage).click();
    }
}
