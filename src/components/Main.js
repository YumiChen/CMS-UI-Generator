import React from "react";
import DQArea from "./DQArea";
import DMArea from "./DMArea";
import PageController from "./PageController";
import Table from "./Table";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const tableNames = ["User","Vehicle","StockHouse","OrderStatus"];

let Main = (props)=>{

	return props.currentTable===null?<div className="welcometitle">Please select a table</div>:(<div className="main">
	<p className="title">{props.currentTable.name}</p>
	<DQArea/>
	<DMArea/>
	<Table/>
	{props.currentQuery?<PageController/>:null}
</div>);
}


const mapStateToProps=(state)=>{
	  return {
		  currentTable: state.currentTable,
		  currentQuery: state.currentQuery
	  };
}



Main = connect(mapStateToProps)(Main);

export default Main;