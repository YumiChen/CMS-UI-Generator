const action_currentQuery = (event,api,newApi,action)=>{
	  
	  console.log(newApi);
	   return (dispatch)=>{
		   fetch(newApi).then((data)=>{
	         return data.json();
	       }).then((data)=>{
	    	 data.api = api;
	    	 if(action == "CHANGEQUERY"){
	    		 dispatch({
	    			 type: "CHANGEQUERY",
	    			 payload: data
	    		 });
	    	 }else if(action == "UPDATEQUERY"){
	    		 dispatch({
	    			 type: "UPDATEQUERY",
	    			 payload: data
	    		 });
	    	 }
	       })
	  		.catch((error)=>{
		  		console.log(error);
		  		sweetAlert('Error','您填寫的資料有誤或網路暫時無法服務','error');
	  		});
	   };
}

export default action_currentQuery;