import React from 'react'
import CartItem from './CartItem'

export default function Cart(props) {
    return (
        props.active &&  
        <section className='rounded-md absolute top-10  w-screen h-96 -z-4 sm:z-10 shadow-2xl bg-[#ffffff] sm:top-14 sm:w-[20%] sm:h-[30%] sm:right-24'>
            <h1 className='px-5 py-2 text-[#1d2025] font-semibold border-transparent border-solid border-2 border-b-[#f7f8fd]'>Cart</h1>
            <CartItem />
        </section>
    );
}
