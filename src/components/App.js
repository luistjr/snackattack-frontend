import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Header from './Header';
import Navbar from './NavBar';
import SnackContainer from './SnackContainer';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Profile from './Profile';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {

    fetch('http://[::1]:3001/me')
      .then(r => r.json())
      .then(user => setUser(user))
    // get request  // me
    // use response to set user in state
  }, [])

  // useEffect(() => {
  //   fetch("http://[::1]:3001/snacks")
  //   .then(r => r.json())
  //   .then(snacksArray => {
  //     return console.log(snacksArray)
  //   })
  // }, []) 

  console.log(user)

  return (
    <div className="App">
        <Navbar />
        <Switch>
          <Route path="/Login">
            <LoginForm setUser={setUser}/>
          </Route>
          <Route path="/New">
            <SignUpForm />
          </Route>
          <Route path="/Profile">
            { user ? <Profile user={user} setUser={setUser}/> : <h1>You must login to see this page</h1>  }
          </Route>
        </Switch>
        <Header />
        <SnackContainer />
    </div>
  );
}

export default App;
