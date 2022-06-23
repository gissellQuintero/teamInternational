import { TSMap } from "typescript-map";
import * as XLSX from "xlsx";
import { WorkBook, WorkSheet } from "xlsx";
// import { writeFileSync } from "fs";

export namespace ExcelUtils {
  /**
   * Method obtaining test data of the corresponding test name
   *
   * @param fileName
   *            - name of the excel file
   * @param sheetNo
   *            starting at index 0
   * @param columnNo
   *            - index of the column name (starting at index 0) to search the text
   * @param keyName
   *            - the test name to fetch the data (this is key name searched in column)
   * @return hash map containing all the test data
   *
   */
  export function getExcelTestDataAsMap(
    wb: WorkBook,
    sheetNo: number,
    columnNo: number,
    keyName: string
  ): TSMap<string, string> {
    let testData = new TSMap<string, string>();
    try {
      const sheet: WorkSheet = getWorkSheet(wb, sheetNo);
      const rowNo: number = getRowNoByColumnValue(sheet, columnNo, keyName);
      testData = getRowValueAsMap(sheet, rowNo);
      //console.log(testData);
    } catch (e) {
      console.log("Error: " + e);
    }
    return testData;
  }

  export function getWorkSheet(wb: WorkBook, sheetNo: number): WorkSheet {
    try {
      //console.log(wb.Sheets[wb.SheetNames[sheetNo]]);
      return wb.Sheets[wb.SheetNames[sheetNo]];
    } catch (e) {
      console.log(e);
    }
    return wb.Sheets[wb.SheetNames[sheetNo]];
  }

  /**
   * Method obtaining test data of the corresponding test name
   *
   * @param fileName
   *            - name of the excel file
   * @param sheetNo
   *            starting at index 0
   * @param columnNo
   *            - index of the column name (starting at index 0) to search the text
   * @param keyName
   *            - the test name to fetch the data (this is key name searched in column)
   * @return hash map containing all the test data
   *
   */
  // export function getExcelTestDataRowAsMap(fileName: string, sheetNo: number, rowNo: number): TSMap<string, string> {
  //     let testData = new TSMap<string, string>();
  //     try {
  //         const sheet: WorkSheet = getWorkSheet(fileName, sheetNo);
  //         testData = getRowValueAsMap(sheet, rowNo);
  //     } catch (e) {
  //         console.log("Error: " + e);
  //     }
  //     return testData;
  // }

  /**
   * Method obtaining test data as list (Row wise)
   *
   * @param fileName
   *            - name of the excel file
   * @param sheetNo
   *            - sheet no to fetch data (starting at index 0)
   * @param columnNo
   *            - index of the test data column (starting at index 0)
   * @return Array containing test data
   *
   */
  // export function getExcelColumnValueAsArray(
  //   fileName: string,
  //   sheetNo: number,
  //   columnNo: number
  // ): string[] {
  //   const sheet: WorkSheet = getWorkSheet(fileName, sheetNo);
  //   return getColumnValueAsArray(sheet, columnNo);
  // }

  /**
   * Method obtaining test data as list (Row wise)
   *
   * @param fileName
   *            - name of the excel file
   * @param sheetNo
   *            - sheet no to fetch data (starting at index 0)
   * @param rowNo
   *            - index of the test data row (starting at index 0)
   * @return Array containing test data
   *
   */
  // export  function getExcelRowValueAsArray(fileName: string, sheetNo: number, rowNo: number): string[] {
  //     const sheet: WorkSheet = getWorkSheet(fileName, sheetNo);
  //     return getRowValueAsArray(sheet, rowNo);
  // }

  /**
   * Method obtaining last row number
   *
   * @param fileName
   *            - name of the excel file
   * @param sheetNo
   *            - sheet no to fetch data (starting at index 0)
   * @param rowNo
   *            - index of the test data row (starting at index 0)
   * @return Array containing test data
   *
   */
  // export  function getExcelLastRowNo(fileName: string, sheetNo: number): number {
  //     const sheet: WorkSheet = getWorkSheet(fileName, sheetNo);
  //     return getLastRowNo(sheet);
  // }

  /**
   * Method to Get workbook
   *
   * @param fileName
   *            Excel sheet file name
   *
   */
  // function getWorkBook(fileName: any): WorkBook {
  //     try {
  //         return XLSX.readFile(fileName);
  //     } catch (e) {
  //         console.log(e);
  //     }
  // }

  /**
   * Method to Get WorkSheet
   *
   * @param fileName
   *            Excel sheet file name
   * @param sheetNo
   *
   */
  // function getWorkSheet(fileName: string, sheetNo: number): WorkSheet {
  //     try {
  //         const wb = getWorkBook(fileName);
  //         return wb.Sheets[wb.SheetNames[sheetNo]];
  //     } catch (e) {
  //         console.log(e);
  //     }
  // }

  /**
   * Method to obtain the row no of the test name
   *
   * @param sheet
   *            WorkSheet object
   * @param columnNo
   *            - index of the key column name
   * @param keyName
   *            - the test name to fetch the data
   * @return the row no of the test name
   *
   */
  function getRowNoByColumnValue(
    sheet: WorkSheet,
    columnNo: number,
    keyName: string
  ): number {
    let rowNo: number = -1;
    try {
      const rowLen = getLastRowNo(sheet);
      for (let j = 1; j <= rowLen; j++) {
        const value = getCellValue(sheet, j, columnNo);
        //console.log(value);
        if (Boolean(value) && keyName === String(value)) {
          rowNo = j;
          break;
        }
        // if (Boolean(value) && CompareUtils.equalsIgnoreCase(String(value), keyName)) {
        //     rowNo = j;
        //     break;
        // }
      }
    } catch (e) {
      console.log("Error Inside obtainSheetRowNo: " + e);
    }
    return rowNo;
  }

  /**
   * Method obtaining test data of the corresponding test name
   *
   * @param sheet
   *            WorkSheet object
   * @param rowNo
   *            - index of the row (starting at index 1) to search the text
   *            in column)
   * @return hash map containing all the test data
   *
   */
  function getRowValueAsMap(
    sheet: WorkSheet,
    rowNo: number
  ): TSMap<string, string> {
    const testData = new TSMap<string, string>();
    if (rowNo > 0) {
      const colLen = getLastColumnNo(sheet);
      for (let k = 0; k <= colLen; k++) {
        const header = getCellValue(sheet, 0, k);
        const value = getCellValue(sheet, rowNo, k);
        if (Boolean(header)) {
          if (Boolean(value)) {
            testData.set(header, value);
          } else {
            testData.set(header, "");
          }
        }
      }
    } else {
      console.log("Row number is not proper to get the column value: " + rowNo);
    }
    return testData;
  }

  /**
   * Method obtaining test data of the corresponding test name
   *
   * @param sheet
   *            WorkSheet object
   * @param columnNo
   *            - index of the column name (starting at index 0) to search the text
   * @return hash map containing all the test data
   *
   */
  function getColumnValueAsArray(sheet: WorkSheet, columnNo: number): string[] {
    const testData = [];
    if (columnNo > -1) {
      const rowLen = getLastRowNo(sheet);
      for (let i = 0; i <= rowLen; i++) {
        const value = getCellValue(sheet, i, columnNo);
        if (Boolean(value)) {
          testData.push(value);
        }
      }
    } else {
      console.log(
        "Column number is not proper to get the column value: " + columnNo
      );
    }
    return testData;
  }

  /**
   * Method obtaining test data of the corresponding test name
   *
   * @param sheet
   *            WorkSheet object
   * @param rowNo
   *            - index of the row (starting at index 1) to search the text
   *            in column)
   * @return hash map containing all the test data
   *
   */
  function getRowValueAsArray(sheet: WorkSheet, rowNo: number): string[] {
    const testData = [];
    if (rowNo > 0) {
      const colLen = getLastColumnNo(sheet);
      for (let i = 0; i <= colLen; i++) {
        const value = getCellValue(sheet, rowNo, i);
        if (Boolean(value)) {
          testData.push(value);
        }
      }
    } else {
      console.log("Row number is not proper to get the row value: " + rowNo);
    }
    return testData;
  }

  /**
   * @return cell reference
   *
   */
  function getCellRef(row: number, column: number): any {
    const cellAddress = { c: column, r: row };
    return XLSX.utils.encode_cell(cellAddress);
  }

  /**
   * @return Last row number
   *
   */
  function getLastRowNo(sheet: WorkSheet): number {
    const range = XLSX.utils.decode_range(sheet["!ref"]!);
    return range.e.r;
  }

  /**
   * @return Last column number
   *
   */
  function getLastColumnNo(sheet: WorkSheet): number {
    //const range
    //try {
    const range = XLSX.utils.decode_range(sheet["!ref"]!);
    //} catch (e) {
    //}
    return range.e.c;
  }

  /**
   * @return cell value
   *
   */
  function getCellValue(
    sheet: WorkSheet,
    rowNo: number,
    columnNo: number
  ): string {
    const cellRef = getCellRef(rowNo, columnNo);
    const cell = sheet[cellRef];
    //return "a";
    return cell ? String(cell.v) : null!;
  }

  // export function readFile(): void{
  // const workBook = XLSX.readFile("./cypress/testData.xlsx");
  // const testData = XLSX.utils.sheet_to_json(workBook.Sheets.AVIANCA);
  // const serverData = XLSX.utils.sheet_to_json(workBook.Sheets.Server);
  // writeFileSync(
  //     "./cypress/fixtures/testData.json",
  //     JSON.stringify(testData, null, 4)
  // );
  // writeFileSync(
  //     "./cypress/fixtures/serverData.json",
  //     JSON.stringify(serverData, null, 4)
  // );
  // }

  export function getExcelColumnValueAsMap(wb: WorkBook): TSMap<string, string> {
    let testData = new TSMap<string, string>();
    const sheet: WorkSheet = getWorkSheet(wb, 0);
    const properties: string[] = getColumnValueAsArray(sheet, 0);
    const value: string[] = getColumnValueAsArray(sheet, 1);
    let index = 0;
    for (const property of properties) {
      testData.set(property, value[index++]);
    }
    return testData;
  }

}
