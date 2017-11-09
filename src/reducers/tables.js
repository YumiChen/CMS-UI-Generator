import redux from "redux";

// return type: array

const tables = (state=null,action)=>{
	let result;
	if(action.type=="GETTABLES"){
		result = action.payload;
	}
	return result?result:state;
}

export default tables;