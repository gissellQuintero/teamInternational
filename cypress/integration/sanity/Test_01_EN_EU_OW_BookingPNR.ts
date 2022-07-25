import { AvailabilityPage } from "../../Pagefactory/avail/AvailabilityPage";
import { TripPage } from "../../Pagefactory/trip/TripPage";
import { passengerPage } from "../../Pagefactory/apim/PassengerPage";
import { purchasePage } from "../../Pagefactory/purc/PurchasePage";
import { confirmationPage } from "../../Pagefactory/conf/ConfirmationPage"
import { Scenario } from "../../av-fwk/common/scenario";
import { CreditCardTypes } from "../../av-fwk/config/EnumConstants";
let fpow = new AvailabilityPage();
let trip = new TripPage();
let apim = new passengerPage();
let purc = new purchasePage();
let conf = new confirmationPage();

describe('Test_01_EN_EU_OW_BookingPNR', () => {

    it('FPOW page', () => {
        fpow.validateFromLocation();
        fpow.validateToLocation();
    });

    it('FPOW page - Select Departure flights', () => {
        fpow.selectFlightsByDefault();
    });

    it('TRIP page - review trip summary', () => {
        trip.continue();
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

    it('CONF page', () =>{
        conf.validatePNR()
    })
});