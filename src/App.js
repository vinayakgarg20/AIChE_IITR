import {BrowserRouter as Router,Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";

import Team from "./components/Team/Team.jsx";

import Activities from "./components/Activities/Activities.jsx";

import React from "react";

import './index.css';

import Navbar from "./components/Navbar/Navbar.jsx";

import Footer from "./components/Footer/Footer.jsx";


class App extends React.Component{
  
  constructor(props){
    super(props);
  }
  
  render(){
    return <Router>
              <Navbar />
              <Route exact path = "/" render ={() => <Home/>} />
              <Route exact path = "/Blogs" render ={() => <Blogs/>} />
              <Route exact path = "/Activities" render = {() => <Activities/>} />         
              <Route exact path = "/Team" render = {() => <Team/>} />
              <Footer/>
          </Router>
  }
}



export default App;



