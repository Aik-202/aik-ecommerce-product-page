import React from 'react'
import { Smallproduct1, Delete } from '../../Data'

export default function CartItem () {
     const amount = 3

     const cartItems = [
          {
               id: 1,
               img: Smallproduct1,
               amount: amount,
               price: `$125.00 x ${amount}`,
               bill: `${125 * amount}.00`
          }
     ]

     const cartContent = cartItems.map((item) => <div key={item.id} className='flex flex-col px-5 justify-between w-full h-full pt-5 pb-10'>
          <div className='flex flex-row justify-between w-full'>
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
          </div>
          <button className='rounded-lg px-8 py-2 text-[#ffffff] mt-10'>Checkout</button>
     </div>)

     return (
          <section className='flex'>
                    {cartContent}
               {/* <p className='mx-auto my-32 sm:my-10 text-[#68707d] font-extrabold'>Your cart is empty.</p> */}
          </section>
     )
}
