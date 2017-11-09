import store from "../components/store";

// return type: array

const action_currentTable = (event)=>{
		const index = event.target.getAttribute("data-index"),
					result = store.getState().tables[index];
		
		return {
			type: "CURRENTTABLE",
			payload: result
		};
}

export default action_currentTable;