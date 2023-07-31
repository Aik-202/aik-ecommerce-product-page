import React from 'react';
import {Nav, Body, Closing, Cart} from './Components'

export default function App() {
    const [cartActive, setCartActive] = React.useState(true)
    
    const cartActivate = () => {
        setCartActive(prev => !prev)
    }

    const cartClose = () => {
        setCartActive(false)
    }
    
    return(
        <section className='min-h-screen w-full'>
            <Nav  shopClick = {cartActivate}/> 
            <Body />
            <Closing />
            <div className={`absolute top-0 bottom-0 left-0 ${cartActive ? 'w-full h-screen' : 'w-auto h-auto'}`} onClick={cartClose}>
                <Cart active = {cartActive}/>
            </div>
        </section>
    )
}