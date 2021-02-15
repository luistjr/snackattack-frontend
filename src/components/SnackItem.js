import React from 'react'

function SnackItem({snack}) {
// console.log({snack})

const { img, name } = snack

let img_url = `http://[::1]:3001/${img}`

console.log(img)
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