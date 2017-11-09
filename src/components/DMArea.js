import React,{Component} from "react";
import Fields from "./Fields";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import action_currentQuery from "../actions/action_currentQuery";

// connect to state: currentapis, currentshowone

class DMArea extends Component{
	constructor(props){
		super(props);
		sweetAlert.setDefaults({ 
		    confirmButtonText: "是",
		    cancelButtonText: "取消",
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33'
		});
		// bind this
			this.handleFetch = this.handleFetch.bind(this);
			this.add = this.add.bind(this);
			this.update = this.update.bind(this);
			this.delete = this.delete.bind(this);
			this.clear = this.clear.bind(this);
			this.refresh = this.refresh.bind(this);
	}
	handleFetch(action,fields,mes1){
		let api = this.props.currentAPI[action], params = "";
		const props = this.props,
			  refresh = this.refresh,
			  changeQuery = props.changeQuery;
		
		// generate params
		params = [].map.call(fields,(field)=>{
				return field.name + "=" + encodeURIComponent(field.value);
		}).join("&");
		
		console.log(api+params);
		
		fetch(api+params).then((data)=>{
			return data.json();
		}).then((data)=>{
			console.log("result");
			console.log(data.success);
			console.log(data.mes);
			if(data.success==false || data.success == "failed" || data.mes=="failed"){
				sweetAlert('Error','您填寫的資料有誤或網路暫時無法服務','error');
			}else if(data.success == true || data.mes == "success"){
				sweetAlert('Success',mes1,'success');
				// refresh
				if(props.currentQuery != null){
					refresh(event);
				}
			}
		}).catch((error)=>{
			console.log(error);
	  		sweetAlert('Error','您填寫的資料有誤或網路暫時無法服務','error');
  		});
	}
	refresh(event){
		const props = this.props,
			  api = props.currentQuery.api,
			  start = (props.pageInfo.currentpage - 1)*(props.pageInfo.rowsperpage);
			  
		console.log("refresh api: " + api + "&start=" + start);
		props.changeQuery(event,api,api + "&start=" + start,"UPDATEQUERY");
	}
	add(event){
		event.preventDefault();
		const fields = document.querySelectorAll(".DMField"),
			  handleFetch = this.handleFetch
			  length = fields.length;
		let count = 0, i;
		for(i = 0;i < length;i++){
			if(fields[i].value == ""){
				count++;
			}
		}
		
		if(count == length){
			sweetAlert('Error',"您未填寫任何資料",'error');
			return;
		}else if(count > 0){
			sweetAlert({
				  title: '您有欄位未填寫，是否要繼續?',
				  text: "請確認您欲更新的資料都已填寫",
				  type: 'warning',
				  showCancelButton: true
				}).then(function () {
					handleFetch("insert",fields,"您的資料已新增");
				});
			return;
		}
		handleFetch("insert",fields);
		
	}
	update(event){
		event.preventDefault();
		const fields = document.querySelectorAll(".DMField"),
		handleFetch = this.handleFetch;
		for(let i = 0;i<fields.length;i++){
			if(fields[i].value == ""){
				if(fields[i].getAttribute("data-pk")=="PK"){
					sweetAlert('Error','主索引鍵不可為空白','error');
					return;
				}else{
					sweetAlert({
						  title: '您有欄位未填寫，是否要繼續?',
						  text: "請確認您欲更新的資料都已填寫",
						  type: 'warning',
						  showCancelButton: true
						}).then(function () {
							handleFetch("update",fields,"您的資料已更新");
						});
					return;
				}
			}
		}
		handleFetch("update",fields,"您的資料已更新");
	}
	delete(event){
		event.preventDefault();
		const fields = document.querySelectorAll(".DMField"),
			handleFetch = this.handleFetch;
		for(let i = 0;i<fields.length;i++){
			if(fields[i].value == ""){
				if(fields[i].getAttribute("data-pk")=="PK"){
					sweetAlert('Error','主索引鍵不可為空白','error');
					return;
				}
			}
			sweetAlert({
				  title: '您是否要刪除此筆資料?',
				  text: "注意:此動作無法回復",
				  type: 'warning',
				  showCancelButton: true
				}).then(function () {
					handleFetch("delete",fields,"您的資料已刪除");
				});
		}
	}
	clear(event){
		event.preventDefault();
		const fields = document.querySelectorAll(".DMField");
		[].forEach.call(fields,(field)=>{
			field.value="";
		});
	}
	render(){
		const style = {
			color: "red",
			fontSize: ".5em"
		};
		
		return (<div className="DMArea">
			<form>
			<p style={style}>*為主索引鍵，若欲修改或刪除資料則此欄位不可為空白</p>
			<Fields 
				cols={this.props.currentTable===null?null:this.props.currentTable.fields}
				customClass="DMField"
			/>
			<button name = "add" type="submit" className="btn btn-primary" onClick={this.add}>新增</button>
			<button name = "update" type="submit" className="btn btn-primary" onClick={this.update}>修改</button>
			<button name = "delete" type="submit" className="btn btn-primary" onClick={this.delete}>刪除</button>
			<button name = "clear" className="btn btn-primary" onClick={this.clear}>清空欄位</button>
			</form>
		</div>);
	}
}

const mapStateToProps=(state)=>{
	  return {
		  currentTable: state.currentTable,
		  currentAPI: state.currentApis,
		  currentShowone: state.currentShowone,
		  currentQuery: state.currentQuery,
		  pageInfo: state.pageInfo
		  };
}

const mapDispatchToProps = (dispatch)=>{
	  return bindActionCreators({
		  changeQuery: action_currentQuery
		  },dispatch);
	}

DMArea = connect(mapStateToProps,mapDispatchToProps)(DMArea);


 export default DMArea;