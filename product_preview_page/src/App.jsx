import React from 'react';
import {Nav, Body, Closing, Cart, LightBox} from './Components'

export default function App() {
    const [cartActive, setCartActive] = React.useState(false);
    const [lightBoxActive, setlightBoxActive] = React.useState(false)
    
    const cartActivate = () => {
        setCartActive(prev => !prev)
    }

    const cartClose = () => {
        setCartActive(false)
    }

    const lightBoxActivate = () => {
        setlightBoxActive(prev => !prev)
    }

    const lightBoxClose = () => {
        setlightBoxActive(false)
    }
    
    return(
        <section className='min-h-screen w-full'>
            <Nav  shopClick = {cartActivate}/> 
            <Body lightBox = {lightBoxActivate}/>
            <Closing />
            <div className={`absolute top-0 bottom-0 left-0 ${cartActive ? 'w-full h-screen' : 'w-auto h-auto'}`} onClick={cartClose}>
                <Cart active = {cartActive}/>
            </div>
            <div className={`fixed top-0 bottom-0 left-0 right-0 w-full h-screen bg-[#000] bg-opacity-20 ${lightBoxActive ? 'block' : 'hidden'}`} onClick={lightBoxClose}>
                <LightBox close = {lightBoxClose}/>
            </div>
        </section>
    )
}