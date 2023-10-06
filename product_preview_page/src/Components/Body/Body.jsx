import React from 'react';
import {Imagepreview, Textualside} from '../'

export default function Body(props) {
    return(
        <section className= "flex flex-col mt-3 space-x-5 sm:flex-row sm:mt-10 sm:space-x-10 lg:space-x-30 xl:space-x-40">
            <Imagepreview openLightBox = {props.lightBox} />
            <Textualside add={props.addToCart} count={props.count} increase={props.countIncrease} decrease={props.countDecrease} animate={props.animate}/>
        </section>
    )
}