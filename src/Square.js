import React from "react"
// import Piece from "./Piece"

export default function Row(id) {
    const isEven = id.number % 2 === 0

    const handleClick = (e) => {
        console.log(e)
    }

    return (
        <div onClick={handleClick}>
            <div>{id.number}</div>
            {isEven ? <div className='square light'></div> : <div className='square dark'></div>}
        </div>
    )
}

