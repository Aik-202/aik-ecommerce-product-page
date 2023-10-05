import React from 'react';
import { Cart1 } from '../../Data';

export default function Shop(props) {
    return (
        <section>
           {props.notify &&  <p className='absolute rounded-r-lg rounded-l-lg text-xs text-[9px] top-3 right-[4.7rem] 
           sm:right-[6.4rem] lg:right-[12.2rem] xl:right-[13.2rem] bg-[#ff7d1a] px-[8px] py-[-5px] text-[#fff]'>
            {props.amount}</p>}
            <figure className= "justify-self-end mt-4 cursor-pointer relative" onClick={props.cartOpen}>
                <img src={Cart1} />
            </figure>
        </section>
    )
}