import React,{Component} from "react";
import {connect} from "react-redux";
import TableRow from "./TableRow";
import action_currentQuery from "../actions/action_pageInfo";

// connected to state: current query
// connected to action: change current showone

class Table extends Component{
constructor(props){
super(props);
}
render(){
	const props = this.props,
				thead = (props.currentTable===null || props.currentTable === undefined)?null:
					props.currentTable.fields.map((cols,index)=>{
		return (<th key={index}>{cols.name}</th>);
	});
	const rows = (props.currentQuery === null)?null:props.currentQuery.list.map((item,index)=>{
		return (<TableRow key= {index} count = {index} rowData={item}/>);
	});
	return (
		<table className="table table-hover table-responsive">
			<thead>
				<tr>
				<th>修改</th>
				{thead}
				</tr>
			</thead>
			<tbody>
				{rows}
			</tbody>
		</table>
		
		);
	}
}

const mapStateToProps=(state)=>{
	  return {
		  currentTable: state.currentTable,
		  currentQuery: state.currentQuery
		  };
	}

Table = connect(mapStateToProps,null)(Table);


export default Table;