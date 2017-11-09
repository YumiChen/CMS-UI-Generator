import React from "react";
import Field from "./Field";
import {connect} from "react-redux";

let Fields = (props)=>{
	const fields = props.cols===null?null:props.cols.map((col,index)=>{
		return <Field 
					key={index} 
					customClass={props.customClass}			
					name={col.name} 
					PK = {col.PK}
					type={col.type}
		/>
	});
	return (<div>
	{fields}
	</div>);
}

 export default Fields;