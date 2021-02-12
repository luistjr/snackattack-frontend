import React from 'react';

function Profile({ user }) {
// function Profile() {
    // const { name, age, lifestyle } = user
    // const { id, name, age, lifestyle } = user
    console.log(user)

    return (
       <div>
           <h1>Profile</h1>
           <ul>
               <li className="profile-details">
                   {/* <h4>{name}</h4>
                   <h4>{age}</h4>
                   <h4>{lifestyle}</h4> */}
                   <button>Edit Profile</button>
                   <button>Delete Account</button>
               </li>
           </ul>
       </div>
    )
}

export default Profile;