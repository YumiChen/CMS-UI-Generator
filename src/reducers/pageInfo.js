import redux from "redux";

//{
//	currentpage: int,
//	finalpage: int,
//	rowsperpage: int
//}

const pageInfo = (state=null,action)=>{
	switch(action.type){
		case "CHANGEQUERY": 
			let result = {};
			const value = document.querySelector("#rowsperpage").value,
			rowsperpage = document.querySelector("#rowsperpage").value?value:action.payload.count;
			let finalpage = action.payload.count%rowsperpage==0?action.payload.count/rowsperpage:
				Math.floor((action.payload.count/rowsperpage))+1;
			result.rowsperpage = rowsperpage;
			result.currentpage = 1;
			result.finalpage = finalpage;
			return result;
		case "UPDATEQUERY":
			return state;
		case "CHANGECURRENTPAGE": 
			let newResult = state;
			newResult.currentpage = action.payload;
			return newResult;
		case "CURRENTTABLE": 
			return null;
		default:
			return state;
	}
}


export default pageInfo;