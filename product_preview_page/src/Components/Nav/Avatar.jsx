import React from 'react';
import { Avatarimage } from '../../Data';

export default function Avatar() {
    return (
        <figure className= "justify-self-end mt-2 mb-2 w-8 sm:mt-2 sm:w-10 cursor-pointer">
            <img src={Avatarimage} className= "w-8 hover:rounded-full hover:border-[#ff7d1a] hover:border-2 hover:border-solid"/>
        </figure>
    )
}