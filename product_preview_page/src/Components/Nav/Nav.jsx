import React from 'react';
import {Hamburger, Navlist, Shop, Avatar} from '../'
import { Logo } from '../../Data';

export default function Nav() {
    return (
        <nav id="header" className= "flex flex-row mx-w-full space-x-2 justify-between">
            <div role= "group" className= "flex flex-row space-x-2 sm:space-x-5">
                <Hamburger />
                <img src={Logo} id= "logo" className= "w-21 h-9 mt-3 p-2"/>
                <Navlist />
            </div>
            <div role= "group" className= "flex flex-row space-x-7 mt-2">
                <Shop />
                <Avatar />
            </div>
        </nav>
    )   
}