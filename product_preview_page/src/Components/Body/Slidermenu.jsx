import React from 'react';

export function Slidermenu()  {
    return(
        <nav className= "hidden sm:flex flex-row space-x-5">
            <figure>
            <img src="./images/image-product-1-thumbnail.jpg" className= "rounded-lg"></img>
            </figure>
            <figure>
            <img src="./images/image-product-2-thumbnail.jpg" className= "rounded-lg"></img>
            </figure>
            <figure>
            <img src="./images/image-product-3-thumbnail.jpg" className= "rounded-lg"></img>
            </figure>
            <figure>
            <img src="./images/image-product-4-thumbnail.jpg" className= "rounded-lg"></img>
            </figure>
        </nav>
    )
}