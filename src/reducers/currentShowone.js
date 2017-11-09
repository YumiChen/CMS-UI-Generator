import redux from "redux";

// return type: array

const currentShowone = (state=null,action)=>{
	if(action.type=="CHANGESHOWONE"){
		return action.payload;
	}else if(action.type == "CURRENTTABLE"){
		// clear when current table changed
		return null;
	}else{
		return state;
	}
}

export default currentShowone;