import redux from "redux";

// return type: array

const currentQuery = (state=null,action)=>{
	let result;
	if(action.type=="CHANGEQUERY"){
		result = action.payload;
	}else if(action.type == "CURRENTTABLE"){
		// clear when current table changed
		state = null;
	}else if(action.type == "UPDATEQUERY"){
		result = action.payload;
	}
	return result?result:state;
}

export default currentQuery;