
import React, { Component } from 'react';
import Header from './components/header';
import Router from './Router';
import Footer from './components/Footer';


import './App.css';




class App extends Component {
  render(){
    return (
      <div className="App">
        <Header/>
        
        <Router/>
        <Footer/>
     
       
      </div>
    );
  }

}

export default App;
