import React from 'react';
import { Cart2, Minus, Plus } from '../../Data';

export default function Buyitem(props) {
    return(
        <div role ="group" className= "flex flex-col space-y-5 sm:flex-row sm:space-x-5">
            {props.animate && <p className='animate absolute rounded-r-lg rounded-l-lg text-xs text-[9px] bg-[#ff7d1a] px-[8px] py-[-5px] text-[#fff] 
            right-10 xl:right-96 -translate-x-28 sm:-translate-x-56 lg:-translate-x-72 xl:-translate-x-20 translate-y-7'>
            {props.count}</p>}
            <figure id="number" className= "flex justify-between cursor-pointer flex-row mr-5 rounded-lg space-x-5 py-3 px-5 sm:space-x-12 sm:py-0 sm:mr-0 sm:h-13 sm:mt-5">
                <img src={Minus} className= "w-3 h-1 justify-self-center self-center" onClick={props.decrease}/>
                <p className="justify-self-center self-center font-semi-bold">{props.count}</p>
                <img src={Plus} className= "w-3 h-3 justify-self-center self-center" onClick={props.increase}/>
            </figure>
            <button className= "flex justify-center flex-row rounded-lg text-white mr-5 p-2 py-3 px-10 sm:px-5 lg:px-3 xl:px-5 lg:mr-0" onClick={props.add}>
                <img src={Cart2} className= "pr-3"/>
                Add to cart
            </button>
        </div>
    )
}