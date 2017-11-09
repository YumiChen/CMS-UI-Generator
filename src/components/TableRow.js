import {Component} from "react";
import {connect} from "react-redux";
import action_currentShowone from "../actions/action_currentShowone";
import {bindActionCreators} from "redux";

// connect to state: current table, currentShowone

class TableRow extends Component{
	constructor(props){
		super(props);
	}
	render(){
	const props = this.props,
				rowData = props.rowData,
				currentTable = props.currentTable===null?null:props.currentTable.info;

	const data = [];
	if(rowData!=null && currentTable != null){
		currentTable.forEach((table,index)=>{
			data.push(<td key = {index}>{rowData[table.name]}</td>);
		});
	}

	return (
			<tr>
				<button 
					scope="row" 
					onClick = {props.changeShowone}
					className="btn btn-primary id"
					value = {props.count}>
					{props.count+1}
				</button>
				{data}
			</tr>
		);
	}
};

const mapStateToProps=(state)=>{
	  return {
		  currentTable: state.currentTable,
		  currentShowone: state.currentShowone
	  };
}

const mapDispatchToProps = (dispatch)=>{
	  return bindActionCreators({changeShowone: action_currentShowone},dispatch);
	}

TableRow = connect(mapStateToProps,mapDispatchToProps)(TableRow);

export default TableRow;