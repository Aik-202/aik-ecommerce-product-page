import React from 'react';
import { Hamburger } from '../'
import { Close, Logo } from '../../Data';
import { menuList } from '../../Data/demo';

export default function Navlist() {
    const [activeMenu, setActiveMenu] = React.useState(false);

    const menu = menuList.map((items) => 
        <li key={items.id} className="mx-2 w-max cursor-pointer text-[#1d2025] font-bold sm:font-normal ml-5 sm:ml-0 
        sm:text-[#68707d] sm:my-5 lg:m-5 pb-2 mb-0 transition-colors ease-in-out delay-150 border-0 border-transparent hover:border-b-[#ff7d1a] hover:border-2 hover:border-solid duration-300">{items.name}</li>
    );

    const notClose = (e) => {
        e.stopPropagation();
    };

    const closeMenu = () => {
        setActiveMenu(false)
    };

    const openMenu = () => {
        setActiveMenu(true)
    };

    return(
        <div role= "group" className= "flex flex-row sm:space-x-5">
            <Hamburger open = {openMenu} />
            <img src={Logo} id= "logo" className= "cursor-pointer w-21 h-9 mt-3 p-2"/>
            <div className={`fixed z-10 top-0 bottom-0 
            ${activeMenu ? 'w-screen h-screen bg-opacity-60 bg-[#1d2025]'
            : 'w-auto h-auto bg-opacity-0 bg-transparent '} sm:bg-transparent sm:static`} 
            onClick={closeMenu}>
                <ul className={`fixed top-0 bottom-0 left-0 z-10 w-60 ${activeMenu ? 'flex' : 
                'hidden sm:flex' } flex-col space-y-5 h-screen bg-[#ffffff] sm:mt-5 sm:space-y-0 
                sm:w-auto sm:bg-transparent sm:justify-between sm:h-auto sm:flex-row sm:static sm:z-0`} onClick={notClose}>
                    <figure className='ml-5 mb-9 mt-5 sm:hidden' onClick={closeMenu}>
                        <img src={Close} alt="close" />
                    </figure>
                    {menu}
                </ul>
            </div>
        </div>
    )
}