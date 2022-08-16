import React from 'react'
// import ReactGridLayout from 'react-grid-layout'

export default function Checkers() {

    // const checkerboard = () => {
    //     for (let i=0; i<8; i++) {
    //         let row = 
    //         <tr>
    //             for (let j=0; j<8; j++) {
    //                 <td>

    //                 </td>
    //             }
    //         </tr>
    //     }
    // }


    return (
        <div>
    <table className='no-border'>
      <thead>
        <tr><th></th><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th><th>f</th><th>g</th><th>h</th><th></th></tr>
      </thead>
      <tbody>
        <tr><th>8</th><td className='square light'></td><td className='square dark'></td><td className='square light'></td><td className='square dark'></td><td className='square light'></td><td className='square dark'></td><td className='square light'></td><td className='square dark'></td><th>8</th></tr>
        <tr><th>7</th><td className='square dark'></td><td className='square light'></td> /* ... */</tr>
        /* ... */
      </tbody>
      <tfoot>
        <tr><th></th><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th><th>f</th><th>g</th><th>h</th><th></th></tr>
      </tfoot>
    </table>
        </div>
    );
}
