import React from 'react';
import {Imagepreview, Textualside} from '../'

export default function Body() {
    return(
        <section className= "flex flex-col mt-3 space-x-5 sm:flex-row sm:mt-10 sm:space-x-10 lg:space-x-40">
            <Imagepreview />
            <Textualside />
        </section>
    )
}