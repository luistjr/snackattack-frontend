import React from 'react';

function Profile({ user }) {
    // function Profile() {
    // const { name, age, lifestyle } = user
    // const { id, name, age, lifestyle } = user
    const {name, age, lifestyle} = user 

    const img_url = "https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG"

    return (
        <div>
                <h1>{name}</h1>
                <p class="title">{age}</p>
                <p>{lifestyle}</p>
                <p><button>Delete Account</button></p>
                <p><button>Edit Account</button></p>
        </div>
    )
}

export default Profile;