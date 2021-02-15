import React from 'react'

function SnackItem({snack}) {
console.log({snack})

const { img, name } = snack

  return (
      <div>
          <h4>{name}</h4>
          <img src={img}/>
      </div>
  );
}

export default SnackItem;