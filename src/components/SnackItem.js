import React from 'react'

function SnackItem({snack}) {
// console.log({snack})

const { img, name } = snack

console.log(img)
  return (
      <div>
          <h4>{name}</h4>
          <img src={img}/>
      </div>
  );
}

export default SnackItem;