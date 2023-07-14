import React from 'react';
import { Cart } from '../../Data';

export default function Shop() {
    return (
        <figure className= "justify-self-end mt-4">
            <img src={Cart} />
        </figure>
    )
}