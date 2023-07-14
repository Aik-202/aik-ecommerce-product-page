import React from 'react';
import {Bigimage, Slidermenu} from '../'

export default function Imagepreview() {
    return(
        <section className= "sm:flex flex-col space-y-5">
            <Bigimage />
            <Slidermenu />
        </section>
    )
}