import { useState } from "react";
import "./App.css";

let tasks=[];
function Form(){
    const [name,changename]=useState("");
    const [disc,changedisc]=useState("");
    const [c,hello]=useState('');
    const [issubmit,setis]=useState(false);
const change=(e)=>{
   if(e.target.name ==="name" ){
     changename(e.target.value);
   } 
   else{
      changedisc(e.target.value)
   }
}
const complete=(e)=>{
    console.log(e);
   if(e.target.id==="true"){
    hello('true');
   }
   else{
    hello('false');
}
}
const last=(e)=>{
 e.preventDefault();
 setis(true);
  if(name==='' || disc==='' || c==='' ) return;
  var h={
   name:name,
   discription:disc,
   iscomplete:c
  }
  tasks.push(h);
  changename("");
  changedisc("");
}
console.log(tasks)
    return(
      
        <>
          
        <div className="from">
        <form onSubmit={last}>
        <label for="id">Task name:</label>
        <input type="text" placeholder="enter the task name" id="id" name="name" onChange={change} value={name}></input><br></br>
        {name==="" && issubmit && <div>Task Name is required</div>}
        <label for="name">discription:</label>
        <input id="name" placeholder="enter the discribtion"name="disc" onChange={change} value={disc}></input><br></br>
        {disc==="" && issubmit && <div>discribtion is required</div>}
        <p>task is complete :</p>
        <input type="radio" id="true" name="complete" value={true} onChange={complete}></input>
        <label for="true">yes</label>
        <input type="radio" id="false" name="complete"value={c} onChange={complete}></input>
        <label for="false">No</label><br></br>
        {c==="" && issubmit && <div>complete is required</div>}
        <input type={"submit"}  ></input>
        </form>
        </div>
        <ul>
        {tasks.map((s)=> <li>Task-Name &as: {s.name}<br></br>Task-discription : {s.discription}<br></br>iscomplete  : {s.iscomplete}</li>)}
        </ul>
        </>
    )
}
export default Form