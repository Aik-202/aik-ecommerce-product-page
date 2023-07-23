import React from 'react';
import { Menu } from '../../Data';

export default function Hamburger(props) {
    return (
        <figure className= "ml-3 mr-2 mt-6 sm:hidden" onClick={props.open}>
            <img src={Menu} />
        </figure>
    )
}