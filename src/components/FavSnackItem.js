import React from 'react'

function FavSnackItem({ stashItem }) {

const { img, name, id } = stashItem;
console.log(id)
let img_url = `http://[::1]:3001/${img}`

function handleRemoveFavorite(id){
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
           <h4>{name}</h4>
            <img src={img_url}/>
            <br />
            <button onClick={handleRemoveFavorite} >Remove from Stash</button>
            <hr />
      </div>
  );
}

export default FavSnackItem;