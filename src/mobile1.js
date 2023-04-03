import React from "react";
import "./App.css"
let whysorting;
let price;
let fil;

class Ram extends  React.Component{
    constructor(props){
        super(props);
        let h=this.props.g;
        this.state= {
         h
        };
       }
render(){
    let f=this.state.h;
    whysorting=(siva)=>{
        var so=[...f].sort((a,b) => {
            var sad=a.name.toUpperCase()
            var sosad=b.name.toUpperCase()
            if(sad<sosad){return -1}
            if(sad>sosad){return 1}
            return 0;
     })
     {siva==='yeru' ? this.setState({h:so}):this.setState({h:so.reverse()})}
       }
       price=()=>{
    var data=[...f].sort((a,b)=>a.price-b.price)
    this.setState({h:data})
   }
    fil=()=>{
    let buy=[...f].filter(s=>s.isPurchased===true)
    this.setState({h:buy})
   }  
    return(
        <>
        <div className="flex">
       <button onClick={()=>whysorting("yeru")}>ascending order</button>
       <button onClick={()=>whysorting("siva")}>decending order</button>
       <button onClick={()=>price()}>price list</button>
       <button onClick={()=>fil()}>isPurchased</button>
       </div>
        {f.map((v,i)=><h1 key={i}>{v.name}-{v.price}</h1>)}
        </>
    )
}

}
export default Ram