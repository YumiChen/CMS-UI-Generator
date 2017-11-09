import redux from "redux";

const currentTable = (state=null,action)=>{
	let result;
	if(action.type=="CURRENTTABLE"){
		result = action.payload;
	}
	return result?result:state;
}

export default currentTable;