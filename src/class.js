import React from "react"

class Siva extends React.Component{
    
 render(){
    var s=this.props.hr
    function siva(a){
        let h=s.filter((s)=>a>=s.year);
        console.log(h.map((g)=>g.name));
     }
    return s.map((s,i)=><h1 key={i}>{s.year}books<button onClick={()=>{siva(s.year)}}>click</button></h1>)
 }
}
export default Siva