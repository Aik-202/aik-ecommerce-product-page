import React from 'react';

export default function Productdescription() {
    return <div role ="group" className= "flex flex-col space-y-5 sm:mt-2 xl:space-y-8 mt-5">
        <h2 className= "tracking-widest font-bold text-xs">Sneaker Company</h2>
        <h3 className= "font-bold text-3xl xl:text-5xl">Fall Limited Edition <br /> Sneakers</h3>
        <p id="productdes" className= "font-semi-bold pr-7 xl:text-base sm:leading-6 sm:pr-3 xl:pr-6">These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <p className= "flex justify-between flex-row font-bold text-3xl sm:flex-col xl:text-3xl sm:leading-5">
            <span>$125.00 <sup className= "text-base ml-3 rounded-md sm:text-sm sm:ml-0 p-1">50%</sup></span> 
            <span id="price" className= "text-base pr-7 sm:pr-0 lg:text-sm">$250.00</span>
        </p>
    </div>
}