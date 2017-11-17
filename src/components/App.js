import React from "react";
import NavBtn from "./NavBtn";
import Main from "./Main";
import store from "./store";
import {Provider} from "react-redux";

let App = (props)=>{
	
return (
	<Provider store={store} >
		<div className="container-fluid">
		<NavBtn/>
		<Main/>
		</div>
	</Provider>
	);
}



 export default App;