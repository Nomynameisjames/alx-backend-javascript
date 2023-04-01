/// <reference path="crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
    firstName: 'Adava',
    lastName: 'Onimisi',
}

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {age: 28, ...row};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
