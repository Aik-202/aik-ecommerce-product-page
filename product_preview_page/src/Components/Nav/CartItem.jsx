import React from 'react'
import { Delete } from '../../Data'

export default function CartItem (props) {
     const cartContent = props.cartItems.map((item) => 
          <div key={item.id} className='flex flex-row justify-between mt-5 w-full'>
               <figure className='w-16 self-center rounded-lg'>
                    <img src={item.img} alt="sneaker" className='rounded-lg' />
               </figure>
               <div>
                    <h6>Fall limited Edition Sneakers</h6>
                    <p>{item.price} <b>{item.bill}</b></p>
               </div>
               <figure className='self-center'>
                    <img src={Delete} alt="delete" />
               </figure>
          </div>)

     return (
          <section className='flex'>
               {props.cartItems.length !== 0 && <div  className='flex flex-col px-5 justify-between w-full h-full pb-10'>
                    {cartContent}
                    <button className='rounded-lg px-8 py-2 text-[#ffffff] mt-10'>Checkout</button>
               </div>
               }
               {props.cartItems.length == 0 &&  <p className='mx-auto my-32 sm:my-10 text-[#68707d] font-extrabold'>Your cart is empty.</p>}
          </section>
     )
}
