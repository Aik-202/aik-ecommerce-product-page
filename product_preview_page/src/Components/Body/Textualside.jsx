import React from 'react';
import {Productdescription, Buyitem} from '../'

export default function Textualside() {
    return(
        <article className= "flex flex-col sm:mt-5 sm:space-y-1 xl:mt-10 space-y-8">
            <Productdescription />
            <Buyitem />
        </article>
    )
}