import React, { useState } from 'react';
import UpdateForm from './UpdateForm.js';

function Profile({ user, setUser }) {

    const {name, age, lifestyle} = user 

    console.log(user)

    function handleDeleteClick(){
       fetch(`http://[::1]:3001/users/${user.id}`, {
           method: "DELETE"
       })
        .then(response => response.json())
        .then(data => {
            redirect()
            setUser(null)
        }) 
    }
    console.log(user)

    function redirect() {
        window.location = "http://localhost:3000/"
        // console.log("click")
    }
    // const {name, age, lifestyle} = user 

    return (
        <div>
                <h1>{name}</h1>
                <p className="title">{age}</p>
                <p>{lifestyle}</p>
                <UpdateForm user={user} setUser={setUser}/>
                {/* <p><button>Edit Account</button></p> */}
                <p><button onClick={handleDeleteClick}>Delete Account</button></p>
        </div>
    )
}

export default Profile;