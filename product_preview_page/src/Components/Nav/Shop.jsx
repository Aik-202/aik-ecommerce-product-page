import React from 'react';
import { Cart } from '../'
import { Cart1 } from '../../Data';

export default function Shop() {
    const [cartActive, setCartActive] = React.useState(false)
    
    const cartActivate = () => {
        setCartActive(prev => !prev)
    }

    const cartClose = () => {
        setCartActive(false)
    }

    return (
        <section>
            <figure className= "justify-self-end mt-4 cursor-pointer" onClick={cartActivate}>
                <img src={Cart1} />
            </figure>
            <div className={`fixed top-0 bottom-0 left-0 ${cartActive ? 'w-screen h-screen' : 'w-auto h-auto'}`} onClick={cartClose}>
                <Cart active = {cartActive}/>
            </div>
        </section>
    )
}