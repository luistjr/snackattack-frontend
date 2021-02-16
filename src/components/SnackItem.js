import React, { useState } from 'react'

function SnackItem({ snack, user }) {

  function handleAddToStash(e) {
    const favorite = { 
      user_id: user.id,
      snack_id: e.target.getAttribute('data-tag')
    }
    
    fetch('http://[::1]:3001/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(favorite),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
  }

  const { img, name, id } = snack

  let img_url = `http://[::1]:3001/${img}`

  
    return (
        <div>
            <h4>{name}</h4>
            <img src={img_url}/>
            <br />
            <button onClick={handleAddToStash} data-tag={id}>Add to Favorites</button>
            <hr />
        </div>
    );
}

export default SnackItem;