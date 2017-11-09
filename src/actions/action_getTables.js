const action_getTables = (data)=>{
	  return {
		  type: "GETTABLES",
		  payload: data
	  };
}

export default action_getTables;