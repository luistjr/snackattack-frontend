import React, { useState } from 'react'

function Stash({ user }) {

    console.log( user )
    // const { img, name } = favSnack

    // let img_url = `http://[::1]:3001/${img}`

    return (
        <div>
            {/* <h4>{name}</h4> */}
            {/* <img src={img_url}/> */}
            <br />
            <button>Eat Me</button>
            <hr />
        </div>
    )

}

export default Stash;