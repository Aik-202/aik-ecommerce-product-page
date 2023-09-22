import React from 'react';
import {Productdescription, Buyitem} from '../'

export default function Textualside(props) {
    return(
        <article className= "flex flex-col sm:mt-5 sm:space-y-1 xl:mt-10 space-y-8">
            <Productdescription />
            <Buyitem count={props.count} increase={props.increase} decrease={props.decrease} add={props.add}/>
        </article>
    )
}