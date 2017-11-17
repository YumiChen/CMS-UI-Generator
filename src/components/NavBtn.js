import React,{Component} from "react";
import Nav from "./Nav";

export default class NavBtn extends Component{
  constructor(props){
  super(props);
  this.state = {show: false, style: null, touched: false};
  this.toggleNav = this.toggleNav.bind(this);
}
toggleNav(){
  const show = this.state.show;
  this.setState({show: !show,
                  touched: true,
                  style: {transformOrigin:"50% 50%",
                  transform: "rotate(0deg)"}
              });
    if(!(show)){
      this.setState({style: {
      transformOrigin: "50% 50%",
      transform: "rotate(45deg)"}});
    }else{
      this.setState({style: {
      transformOrigin: "50% 50%",
      transform: "rotate(0deg)"}
    });
  }
}
render(){

  return (
    <div className="sidebar">
    <i className="navControl fa fa-plus" onClick={this.toggleNav} 
    aria-hidden="true"
    style={this.state.style}
    ></i>
    {!this.state.touched?<i className="fa fa-arrow-left arrowHint" aria-hidden="true"></i>:null}
    {this.state.show?<Nav hideSelf={this.toggleNav}/>:""}

    </div>);
  }
}