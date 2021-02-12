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
  const [user, setUser] = useState([])

  // useEffect(() => {
  //   fetch("http://[::1]:3001/snacks")
  //   .then(r => r.json())
  //   .then(snacksArray => {
  //     return console.log(snacksArray)
  //   })
  // }, []) 

  useEffect(() => {
    fetch("http://[::1]:3001/users")
    .then(r => r.json())
    .then(usersArray => {
        setUser(usersArray.map(user => {
          return <Profile
          key={user.id}
          user={user}
          name={user.name}
          age={user.age}
          lifestyle={user.lifestyle}/>
      }))
    })
  }, []) 

  console.log(user)
  return (
    <div className="App">
        <Navbar />
        <Switch>
          <Route path="/Login">
            <LoginForm />
          </Route>
          <Route path="/New">
            <SignUpForm />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
        </Switch>
        <Header />
        <SnackContainer />
    </div>
  );
}

export default App;
