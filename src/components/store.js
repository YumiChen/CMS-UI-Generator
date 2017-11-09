import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import rootReducer from "../reducers/rootReducer";

const store = createStore(rootReducer,applyMiddleware(thunk));

store.subscribe(()=>{
	const showone = store.getState().currentShowone;
	if(showone != null){
		const fields = document.querySelectorAll(".DMField");
		let name;
		
		[].forEach.call(fields,(field,index)=>{
			name = field.getAttribute("name");
			field.value = showone[name];
		});
	}
	else if(showone === null){
		let fields = document.querySelectorAll(".DMField");
		if(fields != null){
			[].forEach.call(fields,(field,index)=>{
				field.value = "";
			});
		}
	}
	
});

export default store;