import { combineReducers } from "redux";
import currentApis from "./currentApis";
import currentTable from "./currentTable";
import currentQuery from "./currentQuery";
import currentShowone from "./currentShowone";
import pageInfo from "./pageInfo";
import tables from "./tables";

const rootReducer = combineReducers({
	currentApis: currentApis,
	currentTable: currentTable,
	currentQuery: currentQuery,
	currentShowone: currentShowone,
	pageInfo: pageInfo,
	tables: tables
});

export default rootReducer;