import React from 'react';
import { Menu } from '../../Data';

export default function Hamburger() {
    return (
        <figure className= "ml-3 mt-6 sm:hidden">
            <img src={Menu} />
        </figure>
    )
}