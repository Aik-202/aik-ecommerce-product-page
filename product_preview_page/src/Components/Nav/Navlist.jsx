import React from 'react';
import { Hamburger } from '../'
import { Close, Logo } from '../../Data';

export default function Navlist() {
    const [activeMenu, setActiveMenu] = React.useState(false) 
    const closeMenu = () => {
        setActiveMenu(false)
    }
    const openMenu = () => {
        setActiveMenu(true)
    }
    return(
        <div role= "group" className= "flex flex-row sm:space-x-5">
            <Hamburger open = {openMenu} />
            <img src={Logo} id= "logo" className= "w-21 h-9 mt-3 p-2"/>
            <ul className={`fixed top-0 bottom-0 left-0 mt-5 z-10 w-60 ${activeMenu ? 'flex' : 'hidden' } flex-col space-y-5 h-screen bg-[#ffffff] sm:space-y-0 sm:w-auto sm:bg-transparent sm:justify-between sm:h-auto sm:flex-row sm:static sm:z-0`}>
                <figure className='ml-5 mb-9 sm:hidden' onClick={closeMenu}>
                    <img src={Close} alt="close" />
                </figure>
                <li className="mx-2 text-[#1d2025] font-bold sm:font-normal ml-5 sm:ml-0 sm:text-[#68707d] sm:my-5 lg:m-5">Collections</li>
                <li className="mx-2 text-[#1d2025] font-bold sm:font-normal ml-5 sm:ml-0 sm:text-[#68707d] sm:my-5 lg:m-5">Men</li>
                <li className="mx-2 text-[#1d2025] font-bold sm:font-normal ml-5 sm:ml-0 sm:text-[#68707d] sm:my-5 lg:m-5">Women</li>
                <li className="mx-2 text-[#1d2025] font-bold sm:font-normal ml-5 sm:ml-0 sm:text-[#68707d] sm:my-5 lg:m-5">About</li>
                <li className="mx-2 text-[#1d2025] font-bold sm:font-normal ml-5 sm:ml-0 sm:text-[#68707d] sm:my-5 lg:m-5">Contact</li>
            </ul>
        </div>
    )
}