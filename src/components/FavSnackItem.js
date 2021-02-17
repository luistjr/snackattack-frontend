import React from 'react'

function FavSnackItem({ stashItem }) {

const { id, snack } = stashItem;
// const { userId, snackId} = favorite

// const favoriteObj = {
//   favUserId: favorites.id,
//   snackId: favorites.snackId,
//   favoritesId: favorites.favoritesId
// }

console.log({stashItem})

let img_url = `http://[::1]:3001/${snack.img}`

// How do we get favorites id? // 

function handleRemoveFavorite(){
    fetch(`http://[::1]:3001/favorites/${id}`, {
           method: "DELETE"
       })
        .then(response => response.json())
        .then(data => {
           console.log(data)
        })
}

  return (
      <div>
           <h4>{snack.name}</h4>
            <img src={img_url}/>
            <br />
            <button onClick={handleRemoveFavorite} >Remove from Stash</button>
            <hr />
      </div>
  );
}

export default FavSnackItem;