import React from 'react'

function FavSnackItem({ stashItem }) {

const { img, name, id } = stashItem;

let img_url = `http://[::1]:3001/${img}`

function handleRemoveFavorite(){
    console.log('success');
}

  return (
      <div>
           <h4>{name}</h4>
            <img src={img_url}/>
            <br />
            <button onClick={handleRemoveFavorite} data-tag={id}>Remove from Stash</button>
            <hr />
      </div>
  );
}

export default FavSnackItem;