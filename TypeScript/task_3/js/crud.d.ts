import { rowID, rowElement } from './interface.ts'

declare function insertRow(row: rowElement): number;
declare function deleteRow(rowId: rowID): void;
declare function updateRow(rowId: rowID, row: rowElement): rowID;
