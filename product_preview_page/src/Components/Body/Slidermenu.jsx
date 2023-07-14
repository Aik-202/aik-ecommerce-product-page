import React from 'react';
import { Smallproduct1, Smallproduct2, Smallproduct3, Smallproduct4 } from '../../Data';

export default function Slidermenu()  {
    return(
        <nav className= "hidden sm:flex flex-row space-x-5">
            <figure>
            <img src={Smallproduct1} className= "rounded-lg"/>
            </figure>
            <figure>
            <img src={Smallproduct2} className= "rounded-lg"/>
            </figure>
            <figure>
            <img src={Smallproduct3} className= "rounded-lg"/>
            </figure>
            <figure>
            <img src={Smallproduct4} className= "rounded-lg"/>
            </figure>
        </nav>
    )
}