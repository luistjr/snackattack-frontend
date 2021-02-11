import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Navbar from './NavBar';
import SnackContainer from './SnackContainer';


function App() {

  useEffect(() => {
    fetch("http://[::1]:3001/snacks")
    .then(r => r.json())
    .then(snacksArray => {
      return console.log(snacksArray)
    })
  }, []) 

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Navbar />
        <SnackContainer />
      </header>
    </div>
  );
}

export default App;
