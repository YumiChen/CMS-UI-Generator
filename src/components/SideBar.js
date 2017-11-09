import React,{Component} from "react";
import Nav from "./Nav";


export default class SideBar extends Component{
  constructor(props){
  super(props);
  this.state = {show: false};
  this.showNav = this.showNav.bind(this);
}
showNav(){
  const show = this.state.show;
  this.setState({show: !show,
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
    <i className="navControl fa fa-plus" onClick={this.showNav} 
    aria-hidden="true"
    style={this.state.style}
    ></i>

    {this.state.show?<Nav/>:""}

    </div>);
  }
}