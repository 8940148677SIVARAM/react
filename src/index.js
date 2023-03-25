import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Mobile from './mobile';

const root = ReactDOM.createRoot(document.getElementById('root'));

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
    
root.render(
  <React.StrictMode>
    <h1>Mobiles</h1>
    <Mobile dd={mobiles}/>
    <hr></hr>
    <h1>books</h1>
    <App flt ={books}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
