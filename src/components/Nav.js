import React,{Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import action_currentApis from "../actions/action_currentApis";
import action_currentTable from "../actions/action_currentTable";
import action_getTables from "../actions/action_getTables";
import {TableListTitle} from "../../data/Texts";
import TableInfo from "../../data/TableInfo";

// connected to state:tablenames
// connected to action: change current table

class Nav extends Component{
	constructor(props){
		super(props);
		this.state = {names: null};

		// binding this
		this.getNames = this.getNames.bind(this);
		this.change = this.change.bind(this);
	}
	getNames(api){
		fetch(api).then((data)=>{
			return data.json();
		}).then((data)=>{
			console.log(data);
			this.setState({names: data});
			this.props.getTables(data);
			return;
		});
	}
	change(event){
		// clear query params
		const fields = document.querySelectorAll(".DQField");
		if(fields != null){
			[].forEach.call(fields,(field,index)=>{
				field.value = "";
			});
		}

		// change global state
		this.props.changeAPI(event);
		this.props.changeTable(event);
	}
	componentDidMount(){
		if(TableInfo.AjaxAPI){
			this.getNames(TableInfo.AjaxAPI);
		}else{
			const names = TableInfo.tables.map((table,index)=>{
				return table.name;
			});
			this.setState({names: names});
			this.props.getTables(TableInfo.tables);
		}
	}
	render(){
		const tables = this.state.names === null?(<font color="white">Loading...</font>):this.state.names.map((name,index)=>{
		return  (<a href="#" 
							key={index} 
							className="list-group-item list-group-item-action"
							onClick={this.change}
							data-index={index}
						>
							{name}
						</a>);
		});
		return (
		<div className="list-group nav">
		  <div className="tableNames">
		<a href="#" className="list-group-item active">
		{TableListTitle}</a>
		{tables}
		    </div>
		</div>
		);
	}
}
 

const mapDispatchToProps = (dispatch)=>{
	  return bindActionCreators({
		  	changeAPI: action_currentApis,
			changeTable: action_currentTable,
	  		getTables: action_getTables
		  },dispatch);
	}

Nav = connect(null,mapDispatchToProps)(Nav);

 export default Nav;