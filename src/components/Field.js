import React from "react";

// connect to state: current table

let Field = (props)=>{
	let type;
	switch(props.type){
		case "varchar":
			type = "text";
			break;
//		"tinyint":
//			type = "";
		case "date":
			type = "date";
			break;
		default:
			type = "number";
	}
	const style = {
		color: "red",
		fontSize: ".5em"
	};
	return (
	<div className="form-group">
	{props.PK!=""?<span style={style}>*</span>:null}
	<label htmlFor={props.name}>{props.name+":"}</label>
	<input 
		type={type} 
		className={"form-control "+props.customClass} 
		id={props.name} 
		name = {props.name}
		aria-describedby={props.name}
		min="0"
		max={(props.type=="tinyint")?1:null}
		data-pk={(props.PK!="")?"PK":null}
		placeholder={"input " + props.name + "..."}/>
	</div>
	);
}



 export default Field;