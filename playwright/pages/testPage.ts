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

  public intializeFlow(wb: any, testCaseName: string) {

    this.readServerData(wb, testCaseName);
    this.readExcelData(wb, testCaseName);
    
  }

  public readExcelData(wb: WorkBook, testCaseName: string) {
    const testData = ExcelUtils.getExcelTestDataAsMap(wb, 1, 0, testCaseName);
    this.setValueByMap(testData);
  }

  public readServerData(wb: WorkBook, testCaseName: string) {
    const testData = ExcelUtils.getExcelColumnValueAsMap(wb);
    this.setValueByMap(testData);
  } 
}
