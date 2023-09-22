import React from 'react';
import {Nav, Body, Closing, Cart, LightBox} from './Components';
import { Smallproduct1 } from './Data'

export default function App() {
    const [cartActive, setCartActive] = React.useState(false);
    const [lightBoxActive, setlightBoxActive] = React.useState(false);
    const [count, setCount] = React.useState(0);
    const [cartItems, setCartItems] = React.useState([])

    const increase = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const decrease = () => {
        setCount((prevCount) => prevCount - 1)
    }
    
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


    const cartAdd = () => {
        const newItems = {
                 id: cartItems.length + 1,
                 img: Smallproduct1,
                 amount: count,
                 price: `$125.00 x ${count}`,
                 bill: `${125 * count}.00`
                }
        setCartItems((prev) => {return [...prev, newItems]});
        cartActivate()
    }

    console.log(cartItems)

    return(
        <section className='h-screen w-full'>
            <Nav  shopClick = {cartActivate}/> 
            <Body lightBox = {lightBoxActivate} count={count} countIncrease={increase} countDecrease={decrease} addToCart={cartAdd}/>
            <Closing />
            <div className={`absolute top-0 bottom-0 left-0 ${cartActive ? 'w-full h-screen' : 'w-auto h-auto'}`} onClick={cartClose}>
                <Cart active = {cartActive} cartItems={cartItems}/>
            </div>
            <div className={`fixed top-0 bottom-0 left-0 right-0 w-full h-screen bg-[#000] bg-opacity-20 ${lightBoxActive ? 'block' : 'hidden'}`} onClick={lightBoxClose}>
                <LightBox close = {lightBoxClose}/>
            </div>
        </section>
    )
}