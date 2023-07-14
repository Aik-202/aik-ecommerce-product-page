import React from 'react';
import { Bigproduct1 } from '../../Data';

export default function Bigimage() {
    return(
        <figure>
        <img src={Bigproduct1} className= "pointer-events-none sm:rounded-lg"/>
    </figure> 
    )
}