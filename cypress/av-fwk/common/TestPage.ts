import { ExcelUtils } from "../utills/ExcelUtills";
import { TSMap } from "typescript-map";
import { WorkBook } from "xlsx/types";

export class TestPage {
  public dataMap: any;
  private static instance: TestPage = new TestPage();

  constructor() {}

  public setValue(key: any, value: any) {
    window.sessionStorage.setItem(key, value);
  }

  public getValue(key: any): any {
    const value = window.sessionStorage.getItem(key);
    if(value != null) return value
    else return ""
  }

  public setValueByMap(testData: TSMap<string, string>) {
    for (const key of testData.keys()) {
      const value = testData.get(key);
      if (value != "" && value != null) {
        this.setValue(key, value);
      }
    }
  }

  public intializeFlow(wb: any, testCaseName: string) {
    debugger;
    const length = testCaseName.split("\\").length
    testCaseName = testCaseName.split("\\")[length-1]
    testCaseName = testCaseName.substr(0, testCaseName.indexOf("."))
    this.readServerData(wb, testCaseName);
    this.readExcelData(wb, testCaseName);
    this.createUrl();
  }

  public readExcelData(wb: WorkBook, testCaseName: string) {
    const testData = ExcelUtils.getExcelTestDataAsMap(wb, 1, 0, testCaseName);
    this.setValueByMap(testData);
  }

  public readServerData(wb: WorkBook, testCaseName: string) {
    const testData = ExcelUtils.getExcelColumnValueAsMap(wb);
    this.setValueByMap(testData);
  }

  public createUrl() {
    let url = "";
    url = url + "avail?" + this.buildUrl();
    debugger
    this.setValue("constructedURL", url);
  }

  public returnShooterURL(): string {
    return this.getValue("constructedURL");
  }

  public buildUrl(): string {
    let url = "";
    const departureDate = new Date(+this.getValue("departureDate"));
    const returnDate = this.getValue("returnDate") ?
                       new Date(+this.getValue("returnDate")).toISOString().slice(0,10) : '';
    debugger
    url = url + "language=" + this.getValue("language") + "&"
              + "from=" + this.getValue("from") + "&"
              + "to=" + this.getValue("to") + "&"
              + "departureDate=" + departureDate.toISOString().slice(0,10) + "&"
              + "returnDate=" + returnDate+ "&"
              + "nbAdults=" + this.getValue("nbAdults") + "&"
              + "nbChildren=" + this.getValue("nbChildren") + "&"
              + "nbInfants=" + this.getValue("nbInfants") + "&"
              + "pointOfSale=" + this.getValue("pointOfSale") + "&"
              + "trace=" + this.getValue("trace") + "&"
              + "tripType=" + this.getValue("tripType")
    return url;
  }
}
