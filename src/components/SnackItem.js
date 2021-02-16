import React, { useState} from 'react'

function SnackItem({snack, user}) {
  const [stash, setStash] = useState({
   
  })
// console.log({snack})
  console.log(user)
  function handleAddToStash() {

  }
  const { img, name } = snack

  let img_url = `http://[::1]:3001/${img}`

  console.log(img)
    return (
        <div>
            <h4>{name}</h4>
            <img src={img_url}/>
            <br />
            <button onClick={handleAddToStash}>Add to Favorites</button>
            <hr />
        </div>
    );
}

export default SnackItem;