// change current page for refreashing
const action_pageInfo = (num)=>{
	return {
		type: "CHANGECURRENTPAGE",
		payload: num
	};
}

export default action_pageInfo;
