import {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import action_currentQuery from "../actions/action_currentQuery";
import action_pageInfo from "../actions/action_pageInfo";

class PageController extends Component{
	constructor(props){
		super(props);
		this.changePage = this.changePage.bind(this);
	}
	changePage(event){
		event.preventDefault();
		const page = event.target.innerHTML,
			start = (page-1)*(this.props.pageInfo.rowsperpage),
			api = this.props.currentQuery.api;
		
		this.props.changeQuery(event,api,api + "&start=" + start,"UPDATEQUERY");
		this.props.changePageInfo(page);
	}
	render(){
		const props = this.props,
			  finalpage = props.pageInfo.finalpage;
		let pages = [];
		
		if(props.currentQuery.list.length > 0 ){
			for(let i = 1;i <= finalpage ; i++){
					pages.push(<li 
						className = {props.pageInfo.currentpage == i?"page-item active":"page-item"}
						onClick={this.changePage} key={i}>
						<a className="page-link" href="#">{i}</a>
					</li>);
			}
		}
		
		return (
				<nav>
				  <ul className="pagination">
				  	{pages}
				  </ul>
				</nav>
		);
	}
}

const mapStateToProps=(state)=>{
	  return {
		  currentQuery: state.currentQuery,
		  pageInfo: state.pageInfo
		  };
	}

const mapDispatchToProps = (dispatch)=>{
	  return bindActionCreators({
		  changeQuery: action_currentQuery,
		  changePageInfo: action_pageInfo
		  },dispatch);
	}

PageController = connect(mapStateToProps,mapDispatchToProps)(PageController);


export default PageController;