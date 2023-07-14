import React from 'react';

export default function Buyitem() {
    const [count, setCount] = React.useState(0)

    const increase = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const decrease = () => {
        setCount((prevCount) => prevCount - 1)
    }

    return(
        <div role ="group" className= "flex flex-col space-y-5 sm:flex-row sm:space-x-5">
            <figure id="number" className= "flex justify-between flex-row mr-5 rounded-lg space-x-5 py-3 px-5 sm:space-x-12 sm:py-0 sm:mr-0 sm:h-13 sm:mt-5">
                <img src="./images/icon-minus.svg" className= "w-3 h-1 justify-self-center self-center" onclick={decrease()}></img>
                <p className="justify-self-center self-center font-semi-bold">{count}</p>
                <img src="./images/icon-plus.svg" className= "w-3 h-3 justify-self-center self-center" onclick={increase()}></img>
            </figure>
            <button className= "flex justify-center flex-row rounded-lg text-white mr-5 p-2 py-3 px-10 sm:px-5 lg:mr-0">
                <img src= "./images/icon-cart-2.svg" className= "pr-3"></img>
                Add to cart
            </button>
        </div>
    )
}