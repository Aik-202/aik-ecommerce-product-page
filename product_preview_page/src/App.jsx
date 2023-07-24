import React from 'react';
import {Nav, Body, Closing} from './Components'

export default function App() {
    return(
        <section className='min-h-screen w-full'>
            <Nav /> 
            <Body />
            <Closing />
        </section>
    )
}