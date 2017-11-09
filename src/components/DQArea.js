import React,{Component} from "react";
import Fields from "./Fields";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import action_currentQuery from "../actions/action_currentQuery";
// connected to state: currentapis
// connected to action: change current query

class DQArea extends Component{
	constructor(props){
		super(props);
		// binding this
		this.query = this.query.bind(this);
		this.clear = this.clear.bind(this);
	}
	query(event){
		event.preventDefault();
		let api = this.props.currentAPI.query,
			params = "";
		const fields = document.querySelectorAll(".DQField");

		// generate params
		params = [].map.call(fields,(field)=>{
			if(field.name == "_id" &&(field.value || field.value === 0))
				return "id=" + encodeURIComponent(field.value);
			if(field.value || field.value === 0)
				return field.name + "=" + encodeURIComponent(field.value);
		}).join("&");

			this.props.changeQuery(event,api+params,api+params+"&start=0","CHANGEQUERY");
	}
	clear(event){
		event.preventDefault();
		const fields = document.querySelectorAll(".DQField");
		[].forEach.call(fields,(field)=>{
			field.value="";
		});
	}
	render(){
		const props = this.props,
			  style = {
				color: "red",
				fontSize: ".5em"
			};

		const info = (props.currentTable===null)?null:(props.currentTable.fields).concat([
			{name:"rowsperpage",type:"int",PK:""}]
		);

		return (<div className="DQArea">
			<form>
			<p style={style}>*為主索引鍵</p>
			<Fields 
				cols={props.currentTable===null?null:info}
				customClass="DQField"	
			    />
			<button 
				type="submit" 
				className="btn btn-primary"
				onClick={this.query}
				id="query"
			>查詢</button>
			<button name = "clear" className="btn btn-primary" onClick={this.clear}>清空欄位</button>
			</form>
		</div>);
	}
}


const mapStateToProps=(state)=>{
	  return {
		  currentTable: state.currentTable,
		  currentAPI: state.currentApis,
		  pageInfo: state.pageInfo
		  };
	}

const mapDispatchToProps = (dispatch)=>{
	  return bindActionCreators({changeQuery: action_currentQuery},dispatch);
	}

DQArea = connect(mapStateToProps,mapDispatchToProps)(DQArea);

 export default DQArea;