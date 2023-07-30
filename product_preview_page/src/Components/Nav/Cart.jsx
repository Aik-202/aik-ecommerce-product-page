import React from 'react'
import CartItem from './CartItem'

export default function Cart(props) {
    return (
        props.active &&  
        <section className='rounded-md absolute top-20 left-2 w-[95%] h-[40%] shadow-2xl bg-[#ffffff] 
        sm:top-14 sm:w-[40%] sm:h-[20%] sm:left-auto sm:right-24 lg:w-[20%] lg:h-[30%]'>
            <h1 className='px-5 py-2 text-[#1d2025] font-semibold border-transparent border-solid border-2 
            border-b-[#f7f8fd]'>Cart</h1>
            <CartItem />
        </section>
    );
}
