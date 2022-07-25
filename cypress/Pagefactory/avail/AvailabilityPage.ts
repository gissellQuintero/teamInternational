import {commonPage} from "../../av-fwk/common/commonPage"
import locators  from './AvailabilityPageLocator';


export class AvailabilityPage extends commonPage{

    constructor() {
        super();
    }

    public closePopUp(){
        cy.wait(3000)
        cy.get('.QSIWebResponsiveDialog-Layout1-SI_bwHl1RHqr9UfBI1_close-btn > img').click()
    }

    public async validateFromLocation(){
        const loc = this.getValue("From");
        cy.get('.modify-search-content > .header > .expander-button > .material-icons').click();
        cy.wait(500)
        cy.get(locators.LOC_FromHeading)
            .should('contain.value', loc)
    }

    public async validateToLocation(){
        const loc = this.getValue("to")
        this.addTestContext('inside title', 'this is the context comes from inside method')
        cy.get(locators.LOC_ToHeading)
            .should('contain.value', loc)
    }

    public async selectFlightsByDefault(){
        const tripType: string = this.getValue("tripType")
        if(tripType.includes('round')){
            cy.get(locators.Flight_AvailableBounds).first().click()
            cy.get(locators.BTN_FareM).click({force: true})
            cy.wait(5000)
            cy.get(locators.Flight_AvailableBounds).first().click()
        }
        if(tripType.includes('one')){
            cy.get(locators.Flight_AvailableBounds).first().click()
        }
        //take the screenshot and add to the reporter
        cy.screenshot()
        this.addTestScreenshot('selectFlightsByDefault')
        cy.get(locators.BTN_FareM).click({force: true})
    }

    public async validateTripInfo(){
        const flightsInfo = cy.get(locators.Flight_BondsStickyContainer)
        flightsInfo.within(() =>{
            cy.get(locators.Flight_Bonds_time).should('not.be.undefined')
        })
    }

}
