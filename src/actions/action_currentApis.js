import store from "../components/store";
// return type: object

const action_currentApis = (event)=>{
	  const index = event.target.getAttribute("data-index"),
	  		result = store.getState().tables[index].apis;
	  return {
		  type: "CHANGEAPI",
		  payload: result
	  };
}

export default action_currentApis;