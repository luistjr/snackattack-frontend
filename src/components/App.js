import React, { useEffect } from 'react';
import '../App.css';
import Header from './Header';
import Navbar from './NavBar';
import SnackContainer from './SnackContainer';


function App() {

  // useEffect(() => {
  //   fetch("http://[::1]:3001/snacks")
  //   .then(r => r.json())
  //   .then(snacksArray => {
  //     return console.log(snacksArray)
  //   })
  // }, []) 

  return (
    <div>
        <Navbar />
        <Header />
        <SnackContainer />
    </div>
  );
}

export default App;
