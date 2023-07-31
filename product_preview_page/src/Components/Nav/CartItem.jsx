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

     const cartContent = cartItems.map((item) => <div key={item.id} className='flex flex-col px-5'>
          <div className='flex flex-row self-center'>
               <figure className='w-16'>
                    <img src={item.img} alt="" />
               </figure>
               <div>
                    <h6>Autumn limited Edition...</h6>
                    <p>{item.price} <b>{item.bill}</b></p>
               </div>
               <figure>
                    <img src={Delete} alt="" />
               </figure>
          </div>
          <button>Checkout</button>
     </div>)

     return (
          <section className='flex h-full'>
                    {cartContent}
               {/* <p className='mx-auto my-32 sm:my-10 text-[#68707d] font-extrabold'>Your cart is empty.</p> */}
          </section>
     )
}
