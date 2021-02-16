import React, { useState, useEffect } from 'react'
import FavSnackItem from './FavSnackItem'

function Stash({ user }) {

    const { id } = user;
    const [stash, setStash] = useState([])

    useEffect(() => {
        fetch(`http://[::1]:3001/users/${id}`) 
            .then(r => r.json())
            .then(data => setStash(data.snacks))
    }, [])

    let favoriteSnack = stash.map((stashItem) => {
            return <FavSnackItem stashItem={stashItem} />
            // need to create a unique key prop
            // console.log(stashItem)
        })

    return (
        <div>
         {favoriteSnack}
        </div>
    )

}

export default Stash;