import React from 'react';
import {Navlist, Shop, Avatar, Cart} from '../'

export default function Nav (props) {
    return (
        <nav id="header" className= "flex flex-row mx-w-full space-x-2 justify-between mr-5">
            <Navlist />
            <div role= "group" className= "flex flex-row space-x-7 mt-2">
                <Shop cartOpen = {props.shopClick}/>
                <Avatar />
            </div>
        </nav>
    )   
}