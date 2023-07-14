import React from 'react';

export default function Navlist() {
    return(
        <ul className= "hidden sm:flex justify-between flex-row">
            <li className="sm:my-5 mx-2 lg:m-5">Collections</li>
            <li className="sm:my-5 mx-2 lg:m-5">Men</li>
            <li className="sm:my-5 mx-2 lg:m-5">Women</li>
            <li className="sm:my-5 mx-2 lg:m-5">About</li>
            <li className="sm:my-5 mx-2 lg:m-5">Contact</li>
        </ul>
    )
}