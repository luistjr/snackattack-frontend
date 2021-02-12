import React, {useState} from 'react';
import UpdateForm from './UpdateForm.js';

function Profile({ user, setUser }) {

    const {name, age, lifestyle} = user 

    const img_url = "https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG"
    console.log(user.id)

    function handleDeleteClick(){
       fetch(`http://[::1]:3001/users/${user.id}`, {
           method: "DELETE"
       })
        // .then(response => response.json())
        // // .then(setUser(null)
        // ) 
    }

    return (
        <div>
                <h1>{name}</h1>
                <p className="title">{age}</p>
                <p>{lifestyle}</p>
                <p><button onClick={handleDeleteClick}>Delete Account</button></p>
                <UpdateForm user={user} setUser={setUser}/>
                <p><button>Edit Account</button></p>
        </div>
    )
}

export default Profile;