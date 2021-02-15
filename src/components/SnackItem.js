import React from 'react'

function SnackItem({snack}) {

const { img, name } = snack

const img_url = `http://[::1]:3001${img}`

  return (
      <div>
          <h4>{name}</h4>
          <img src={img_url}/>
          <br />
          <button>Add to Favorites</button>
          <hr />
      </div>
  );
}

export default SnackItem;