import { ExcelUtils } from "../utils/ExcelUtills";
import { TSMap } from "typescript-map";
import { WorkBook } from 'xlsx'

export class TestPage {
  public dataMap: any;
  private static instance: TestPage = new TestPage();

  private window = {};

  constructor() {}

  public setValue(key: any, value: any) {
    this.window[key] = value;
  }

  public getValue(key: any): any {
    const value = this.window[key];
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

  public intializeFlow(wb: any, testCaseName: string, env:string) {

    this.readServerData(wb, testCaseName);
    this.readExcelData(wb, testCaseName);
    this.createUrl(env);
  }

  public readExcelData(wb: WorkBook, testCaseName: string) {
    const testData = ExcelUtils.getExcelTestDataAsMap(wb, 1, 0, testCaseName);
    this.setValueByMap(testData);
  }

  public readServerData(wb: WorkBook, testCaseName: string) {
    const testData = ExcelUtils.getExcelColumnValueAsMap(wb);
    this.setValueByMap(testData);
  }

  public createUrl(env: string) {
    let url = "";
    url = this.getValue(env) +  this.buildUrl();
    this.setValue("constructedURL", url);
  }

  public returnShooterURL(): string {
    return this.getValue("constructedURL");
  }

  public buildUrl(): string {
    let url = "";
   
    url = url + "identification?identifier=" + this.getValue("pnr") + "&"
              + "lang=" + this.getValue("language") + "&"
              + "lastName=" + this.getValue("lastName") + "&"
              + "pointOfSale=" + this.getValue("pointOfSale") + "&"
              + "trace=" + this.getValue("trace") + "&"
              + 'overrides=%7B%22isExternalScriptsActivated%22%3A%22false%22%2C%22useHPP%22%3A%22true%22%7D'
    return url;
  }
}
