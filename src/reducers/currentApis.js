import redux from "redux";

// reducer example

const currentApis = (state=null,action)=>{
	if(action.type=="CHANGEAPI"){
		return action.payload;
	}else{
		return state;
	}
}

export default currentApis;