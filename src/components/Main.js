import React,{Component} from "react";
import DQArea from "./DQArea";
import DMArea from "./DMArea";
import PageController from "./PageController";
import Table from "./Table";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {hints} from "../../data/Texts";

const tableNames = ["User","Vehicle","StockHouse","OrderStatus"];

class Main extends Component{
	constructor(props){
		super(props);
	}
	render(){
	const props = this.props;

	return props.currentTable===null?(
	<div className="welcomeHint">
		{hints.map((hint,index)=>{
			return (<p key={index}>{hint}</p>);
		})}
	</div>):(<div className="main">
		<p className="title">{props.currentTable.name}</p>
		<DQArea/>
		<DMArea/>
		<Table/>
		{props.currentQuery?<PageController/>:null}
</div>);
	}
}


const mapStateToProps=(state)=>{
	  return {
		  currentTable: state.currentTable,
		  currentQuery: state.currentQuery
	  };
}



Main = connect(mapStateToProps)(Main);

export default Main;