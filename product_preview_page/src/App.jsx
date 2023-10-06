import React from 'react';
import {Nav, Body, Closing, Cart, LightBox} from './Components';
import { Smallproduct1, Sound } from './Data'

export default function App() {
    const audio = new Audio (Sound);
    
    const [cartActive, setCartActive] = React.useState(false);
    const [lightBoxActive, setlightBoxActive] = React.useState(false);
    const [count, setCount] = React.useState(0);
    const [cartItems, setCartItems] = React.useState([]);
    const [itemNumber, setitemNumber] = React.useState(1);
    const [updateCart, setUpdateCart] = React.useState(false);
    const [cartNotification, setCartNotification] = React.useState(false);

    React.useEffect(() => {
        const data = window.localStorage.getItem('cartItems');
        if ( data !== null ) setCartItems(JSON.parse(data));
    }, []);

    React.useEffect(() => {
        window.localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const increase = () => {
        setCartNotification(false);
        setCount((prevCount) => prevCount + 1)
    }

    const decrease = () => {
        setCartNotification(false);
        if (count == 0) {
            setCount(0)
        } else {
            setCount((prevCount) => prevCount - 1)
        }
    }
    
    const cartActivate = () => {
        setCartActive(prev => !prev);
        setCartNotification(false)
    }

    const cartClose = () => {
        setCartActive(false);
        setCartNotification(false)
    }

    const lightBoxActivate = () => {
        setlightBoxActive(prev => !prev)
    }

    const lightBoxClose = () => {
        setlightBoxActive(false)
    }


    const cartAdd = () => {
        audio.play()
        setCartNotification(true);
        const newItems = {
                 id: itemNumber,
                 img: Smallproduct1,
                 amount: count,
                 price: `$125.00 x ${count}`,
                 bill: `${125 * count}.00`
                }
        setCartItems((prev) => {
            if(count == 0) {
                return [...prev]
            }
            return [...prev, newItems]
        });
        setitemNumber((prev) => prev + 1);
    }

    const deleteItem = (e) => {
        audio.play()
        const itemId = +e.target.parentElement.parentElement.id;
        setCartItems((prev) => {prev.splice(itemId, 1); return prev});
        setCartActive(false);
        setUpdateCart(true);
        window.setTimeout(() => {setUpdateCart(false); setCartActive(true)}, 500)
    }

    const checkOut = () => {
        audio.play()
        setCartItems([]);
        setCartActive(false);
        setUpdateCart(true);
        window.setTimeout(() => {setUpdateCart(false); setCartActive(true)}, 500)
    }

    return(
        <section>
            {updateCart && <div className='absolute top-11 right-10 sm:top-12 lg:top-14 lg:right-32 xl:right-36'>
                <p className='text-[#ff7d1a] uppercase'>Updating Cart....</p>
            </div>}
            <section className='h-screen w-full'>
                <Nav  shopClick={cartActivate} notify={cartNotification} amount={count}/> 
                <Body lightBox={lightBoxActivate} count={count} countIncrease={increase} countDecrease={decrease} addToCart={cartAdd}/>
                <Closing />
                <div className={`absolute top-0 bottom-0 left-0 ${cartActive ? 'w-full h-screen' : 'w-auto h-auto'}`} onClick={cartClose}>
                    <Cart active={cartActive} cartItems={cartItems} deleteItem={deleteItem} checkOut={checkOut} />
                </div>
                <div className={`fixed top-0 bottom-0 left-0 right-0 w-full h-screen bg-[#000] bg-opacity-20 ${lightBoxActive ? 'block' : 'hidden'}`} onClick={lightBoxClose}>
                    <LightBox close={lightBoxClose}/>
                </div>
            </section>
        </section>
    )
}