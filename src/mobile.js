import React, {useState} from 'react'
import "./App.css"
import { Link } from 'react-router-dom';
import App from './App';

let books = [
    { name:"You Are Born to Blossom",
    year : 2011
    },
    { name:"Spirit of India",
    year :2013
    },{ name:" Governance for Growth in India",
    year : 2014
    },{ name:"The Family and the Nation",
    year :2015
    },{ name:"  Mission of India",
    year :2005
    },{ name:"Wings of fire",
    year : 1999
    },{ name: "You are Unique:",
    year :2012
    }
    ]
function Mobile(props){
    let h=props.dd;
   const [mobile,whychange]=useState(h) 
   
   const whysorting=(siva)=>{
    var so=[...h].sort((a,b) => {
        var sad=a.name.toUpperCase()
        var sosad=b.name.toUpperCase()
        if(sad<sosad){return -1}
        if(sad>sosad){return 1}
        return 0;
        
 })
{siva==='yeru' ? whychange(so):whychange(so.reverse())}
   }
   let price=()=>{
    var data=[...h].sort((a,b)=>a.price-b.price)
    whychange(data)
   }
   let fil=()=>{
    let buy=[...h].filter(s=>s.isPurchased===true)
    whychange(buy)
   }  
    return(
       <>
       <div className="flex">
       <button onClick={()=>whysorting("yeru")}>ascending order</button>
       <button onClick={()=>whysorting("siva")}>decending order</button>
       <button onClick={()=>price()}>price list</button>
       <button onClick={()=>fil()}>isPurchased</button>
       <Link to={"/"} element={<App flt={books}/>}>hrg</Link>
       </div>
       {mobile.map((v,i)=><h1 key={i}>{v.name}-{v.price}</h1>)}
       </>
    )
}
export default Mobile;