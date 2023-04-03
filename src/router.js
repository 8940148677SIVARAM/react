import React from "react";
import {BrowserRouter,
  Route,
  Routes} from "react-router-dom";
  import Mobile from "./mobile";
  import Ram from "./mobile1";
  import App from "./App.js"
  let mobiles = [{
    id:"001",
    name :"oneplus11",
    price : 56999,
    isPurchased: true},
    {
    id:"002",
    name : "Vivi Y100",
    price : 24999,
    isPurchased: false},
    {
    id:"003",
    name : "Redmi 10",
    price : 56999,
    isPurchased : true},
    {
    id:"004",
    name : "iphone 13",
    price : 62990,
    isPurchased : false},
    {
    id:"005",
    name : "Nokia",
    price : 12000,
    isPurchased : true},
    {
    id:"006",
    name : "Poco M4",
    price : 13999,
    isPurchased : true}]
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
        
  class Router extends React.Component{
      render(){
        return(
            <BrowserRouter> 
                <Routes> 
                <Route  path='/'
                      element={<App flt={books}/>}>        
                  </Route>
                  <Route path='/about'
                      element={<Ram g={mobiles}/>}>
                  </Route>
                  <Route  path='/contact'
                      element={<Mobile dd={mobiles}/>}>
                  </Route>
                  <Route path="*" element={<h1>falls</h1>}>
                  </Route>
                </Routes>
            </BrowserRouter>
        )
      }
  }
  export default Router;