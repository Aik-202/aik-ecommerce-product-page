import React from 'react'
import CartItem from './CartItem'

export default function Cart(props) {
    return (
        props.active &&  
        <section className='rounded-md absolute top-20 left-2 w-[95%] h-max shadow-2xl bg-[#ffffff] 
        sm:top-14 sm:w-[45%] sm:left-auto sm:right-24 lg:w-[35%] xl:w-[26%]' onClick={(e) => e.stopPropagation()}>
            <h1 className='px-5 py-2 text-[#1d2025] font-semibold border-transparent border-solid border-2 
            border-b-[#f7f8fd]'>Cart</h1>
            <CartItem cartItems={props.cartItems} delete={props.deleteItem}/>
        </section>
    );
}
