const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor')
const fs = require("fs");
var XLSX = require('xlsx');
const testConfig = require('../av-fwk/common/testConfigs')

//must export this function
//on -- is a function that you will use to register listeners on various events that Cypress exposes.
//config -- is the resolved Cypress configuration of the opened project.
module.exports = (on, config) => {

  //configure plugins here

  const myNodeTask = {
    readExcelSheet(filename) {
      return XLSX.readFile(filename);
    },
  };

  on("task", myNodeTask);
  on("file:preprocessor", cypressTypeScriptPreprocessor);

  //overwrite environment vairables through command line
  //--env platform = "{env}"
  return testConfig.overrideConfigs(config.env.platform);
}