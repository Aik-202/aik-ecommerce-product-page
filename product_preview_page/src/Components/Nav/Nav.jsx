import React from 'react';
import {Navlist, Shop, Avatar} from '../'

export default function Nav() {
    return (
        <nav id="header" className= "flex flex-row mx-w-full space-x-2 justify-between mr-5">
            <Navlist />
            <div role= "group" className= "flex flex-row space-x-7 mt-2">
                <Shop />
                <Avatar />
            </div>
        </nav>
    )   
}