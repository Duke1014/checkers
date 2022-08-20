import React from 'react'
import Column from './Column';

export default function Checkers() {

    const boardSize = [8,7,6,5,4,3,2,1]

    return (
        <div className='checker-board'>
            {boardSize.map((n) => {
                return <Column key={n}/>
            })}
        </div>
    );
}
