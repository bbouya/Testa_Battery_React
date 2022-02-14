import './App.css';
import React,{ Component } from 'react';
import Header from './components/Header/Header';
import TeslaBattery from './containers/TeslaBattery';


function App() {
  return (
    <div className="App">
      <h2> lets get started</h2>
      <Header/>
      <TeslaBattery/>
    </div>
  );
}

export default App;
