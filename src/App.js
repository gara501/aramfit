import React from 'react';
import './App.css';
import Header from './components/header';
import Intro from './components/intro';
import Plan from './components/plan';
import Glosary from './components/glosary';
import Advertising from './components/advertising';
import References from './components/references';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Intro></Intro>
        <Glosary></Glosary>
        <Advertising></Advertising>
        <Plan></Plan>
        <References></References>    
      </div>
    </div>
  );
}

export default App;
