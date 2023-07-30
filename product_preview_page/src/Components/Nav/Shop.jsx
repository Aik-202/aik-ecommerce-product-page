import React from 'react';
import { Cart1 } from '../../Data';

export default function Shop(props) {
    return (
        <section>
            <figure className= "justify-self-end mt-4 cursor-pointer" onClick={props.cartOpen}>
                <img src={Cart1} />
            </figure>
        </section>
    )
}