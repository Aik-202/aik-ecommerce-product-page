import React from 'react';
import { Cart2, Minus, Plus } from '../../Data';

export default function Buyitem(props) {
    return(
        <div role ="group" className= "flex flex-col space-y-5 sm:flex-row sm:space-x-5">
            <figure id="number" className= "flex justify-between flex-row mr-5 rounded-lg space-x-5 py-3 px-5 sm:space-x-12 sm:py-0 sm:mr-0 sm:h-13 sm:mt-5">
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