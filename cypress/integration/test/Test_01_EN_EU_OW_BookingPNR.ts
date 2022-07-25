import { AvailabilityPage } from "../../Pagefactory/avail/AvailabilityPage";
import { passengerPage } from "../../Pagefactory/apim/PassengerPage";
import { purchasePage } from "../../Pagefactory/purc/PurchasePage";
const addContext = require('mochawesome/addContext')
import { Scenario } from "../../av-fwk/common/scenario";
import { CreditCardTypes } from "../../av-fwk/config/EnumConstants";
let fpow = new AvailabilityPage();
let apim = new passengerPage();
let purc = new purchasePage();

describe('AV_test_spec', function() {

    it('FPOW page', function() {
        fpow.addTestContext('test title', 'this is the test context')
        fpow.validateFromLocation();
        fpow.validateToLocation();
    });

    it('FPOW page - Select Departure flights', function() {
        addContext(this, 'www.google.com')
        fpow.selectFlightsByDefault();
    });

    it('APIM page - fill out passengerPage information', () => {
        apim.enterPassengerInformation();
    });

    it('APIM page - fill out phone number and email', () => {
        apim.enterContactInfo();
    });

    it('APIM page - Personalize your flight', () => {
        apim.validatePaxDetails()
        apim.clickContinue();
    });

    it('PURC page - Fill out Card Information', () => {
        purc.enterCardDetails();
    });

    it('PURC page - Fill out Billing Information', () => {
        purc.enterBillingDetails()
    });

});