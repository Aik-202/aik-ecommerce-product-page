import React from 'react';
import { Avatarimage } from '../../Data';

export default function Avatar() {
    return <figure className= "justify-self-end mt-2 mb-2 w-8 sm:mt-2 w-10">
    <img src={Avatarimage} className= "w-8"/>
    </figure>
}