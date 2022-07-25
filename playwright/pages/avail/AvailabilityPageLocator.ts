export default  {
    LOC_FromHeading: "[placeholder='From']",
    LOC_ToHeading: "[placeholder= 'To']",
    Flight_AvailableBounds:"(//button[@role='main'])[1]",
    BTN_FareS:"#container-cabin-choice > cabin-choice-cont > cabin-choice-pres > div > div:nth-child(1) > fare-comparison-table-cont > dynamic-fare-comparison-table-pres > div > div.wrapper > div.ff-container.fare-family-S.ff-container-branded-fare.ff-container-not-show.ng-star-inserted > div > div.ff-attributes > div.available > div.button-desktop-container > button > span.amount.amount-branded-fare",
    BTN_FareXS: '[data-test="TA-ff-XS"]',
    //BTN_FareS: '[data-test="TA-ff-X"]',
    BTN_ContinueFareS: '//div[@class=\'cro-button cro-no-accept-upsell-button\']',
    BTN_FareM: '[data-test="TA-ff-M"]',

    BTN_FareL:'#container-cabin-choice > cabin-choice-cont > cabin-choice-pres > div > div:nth-child(1) > fare-comparison-table-cont > dynamic-fare-comparison-table-pres > div > div.wrapper > div.ff-container.fare-family-L.ff-container-branded-fare.ff-container-not-show.ng-star-inserted > div > div.ff-attributes > div.available > div.button-desktop-container > button > span.amount.amount-branded-fare',
   // BTN_FareL: '[data-test="TA-ff-L"]',
   BTN_FareXXL: '#container-cabin-choice > cabin-choice-cont > cabin-choice-pres > div > div:nth-child(2) > fare-comparison-table-cont > dynamic-fare-comparison-table-pres > div > div.wrapper > div.ff-container.fare-family-XXL.ff-container-branded-fare.ng-star-inserted > div > div.ff-attributes.attribute-XL-XXL > div.available > div.button-desktop-container > button',
    BTN_FareXL: '[data-test="TA-ff-XL"]',
    //BTN_FareXXL: '[data-test="TA-ff-XXL"]',
    BTN_BestPrice: '(//div[@class=\'new-filter-component vertical-aligned-line\']//button)[2]',
    BTN_BusinessClass: '(//span[@class=\'cabin-title\'])[2]',
    Flight_BondsStickyContainer: '.sticky >>>> .bound',
    Flight_Bonds_time: ".date-time-day-difference",
    FlightDepartureCityInput: "mat-input-4", 
    FlightArrivalCityInput: "#mat-input-3",
    BTN_Continue:"#continue-btn-footer",

///-----------------------elemnts for mobile mode -----------------------

BTN_FareXSMobile:'(//button[@class=\'continue-button\']//div)[3]',
BTN_FareLMobile:'(//div[@class=\'available\']/following-sibling::div)[4]',
LBL_footerOutbound:'(//div[@class=\'footer-mobile\'])[1]',
LBL_footerInbound:'(//div[@class=\'footer-mobile\'])[2]',

}
