import React from "react";
import SideBar from "./SideBar";
import Main from "./Main";
import store from "./store";
import {Provider} from "react-redux";

let App = (props)=>{
	
return (
	<Provider store={store} >
		<div className="container-fluid">
		<SideBar/>
		<Main/>
		</div>
	</Provider>
	);
}



 export default App;