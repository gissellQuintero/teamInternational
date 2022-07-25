export default  {
    LOC_FromHeading: "[placeholder='From']",
    PassengerInfoTab: ".mat-tab-body-active",
    FirstName: '(//input[contains(@class,\'mat-input-element mat-form-field-autofill-control\')])[1]',
    LastName: '(//input[contains(@class,\'mat-input-element mat-form-field-autofill-control\')])[2]',
    Day: '(//input[contains(@class,\'mat-input-element mat-form-field-autofill-control\')])[3]',
    Month: ".month .mat-select",
    SLC_Month:'(//span[@class=\'mat-option-text\'])[1]',
    Month_Infant:'(//div[@class=\'mat-select-value\']//span)[1]',
    Year: '(//input[@name=\'bday-year\'])[1]',
    YearInfant:'(//input[@name=\'bday-year\'])[1]',
    PANEL_MonthSelection: ".mat-select-panel-wrap",
    BTN_Next: ".passenger-btn",

    SLC_Gender: '.gender-select',
    SLC_GenderSelect:'[data-test="TA-ff-male"]',
    SLC_Nationality:'#mat-select-value-5 > span',
    SLC_NationalitySelec:'[data-test="TA-ff-Colombia"]',
    SLC_MonthAditional:'#mat-select-value-3 > span',
  
    FirstNameChild: '(//input[contains(@class,\'mat-input-element mat-form-field-autofill-control\')])[1]',
    LastNameChild: '(//input[contains(@class,\'mat-input-element mat-form-field-autofill-control\')])[2]',

    Email:'(//input[@data-placeholder=\'E-mail\'])[1]',
    Phone: '(//input[contains(@class,\'mat-input-element mat-form-field-autofill-control\')])[2]',
    BTN_Continue: ".continue-btn",
    AgreePolicy: ".agree-everything",
    CHECKBOX_Agree: ".mat-checkbox-input",

    CONTAINER_Service: ".service-container",
    CHKBOX_SpecialAssitance:'(//span[@class=\'mat-checkbox-inner-container\'])[2]',
    Box_SpecialAssitance: '(//button[@role=\'checkbox\'])[1]',
    CHKBOX_LifeMiles:'(//label[@class=\'mat-checkbox-layout\']//span)[1]',
    FrequentTravelerNum:'(//input[contains(@class,\'mat-input-element mat-form-field-autofill-control\')])[3]',

    BTN_NextPage: "#continue-btn-footer-static",
    BTN_NextPassenger: '#mat-tab-content-0-0 > div > div > div > button',
    BTN_NextChildren: '(//button[contains(@class,\'btn-primary passenger-btn\')])[1]',
    BTN_NextInfant:'//div[@class= \'passenger-button-section ng-star-inserted\']//button[1]',


///-----------------------elements for mobile mode -----------------------

    TXT_FirstNameMobile:'(//input[contains(@class,\'mat-input-element mat-form-field-autofill-control\')])[3]',
    TXT_LastNameMobile:'(//input[@formcontrolname=\'lastName\'])[2]',
    CHKBOX_LifeMilesMobile:'(//span[@class= \'mat-checkbox-inner-container\'])[3]',
    TXT_FrequentTravelerNumMobile:'//input[@formcontrolname=\'cardNumber\']',
    CHKBOX_SpecialAssitanceMobile:'(//label[@for=\'mat-checkbox-8-input\']//span)[1]',

}