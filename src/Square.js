import React from "react"
// import Piece from "./Piece"

export default function Row(key) {
    const isEven = key.number % 2 === 0

    return (
        <div>
            <div>{key.number}</div>
            {isEven ? <div className='square light'></div> : <div className='square dark'></div>}
        </div>
    )
}

