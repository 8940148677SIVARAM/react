
import './App.css';
function App(props) {
   let s=props.flt;
   
   function siva(a){
      let h=s.filter((s)=>a>=s.year);
      console.log(h.map((g)=>g.name));
   }
  return ( 
    <>
      <div>
        {s.map((s,i)=><h1 key={i}>{s.year}books<button onClick={()=>{siva(s.year)}}>click</button></h1>)}

      </div>
    </>
  );
}

export default App;
