import React from "react";
class Life extends 
React.Component{
    constructor(props){
        super(props);
       let  m = this.props.siva;
        this.state={
           m 
        }
        console.log(this.state.m);
    }
    componentDidMount(){
        // console.log("2");
        // setInterval(()=>this.setState({m : this.state.m[0].price+500 }),2000);
    }
    
    componentDidUpdate(){
        console.log(this.state.m)
    }
      render(){
        console.log("3");
      
        return(
            <>
             {this.state.m.map((s,i)=><h1 id={i}>{s.name}-{s.price}</h1>)}
            </>
        )
      }
}
export default Life