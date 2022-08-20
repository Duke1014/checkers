import React from "react"
import Piece from "./Piece"

export default function Row(props) {
    const isEven = props.number % 2 === 0

    return (
        <div>
            <div>{props.number}</div>
            {isEven ? <div className='square light'><Piece/></div> : null}
            <div className='square dark'></div>
            <div className='square light'><Piece/></div>
            <div className='square dark'></div>
            <div className='square light'><Piece/></div>
            <div className='square dark'></div>
            <div className='square light'><Piece/></div>
            <div className='square dark'></div>
            {isEven ? null : <div className='square light'></div>}
            <th>{props.number}</th>
        </div>
    )
}

