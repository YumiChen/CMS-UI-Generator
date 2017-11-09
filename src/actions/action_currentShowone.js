import store from "../components/store";

const action_currentShowone = (event)=>{
	  const index = event.target.getAttribute("value");
	  let result = store.getState().currentQuery.list[index];
	  return {
		  type: "CHANGESHOWONE",
		  payload: result
	  };
}

export default action_currentShowone;