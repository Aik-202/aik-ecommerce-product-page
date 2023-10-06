import React from 'react';
import { Bigproduct1, Bigproduct2, Bigproduct3, Bigproduct4, Smallproduct1 } from '../../Data';
import { imageList } from '../../Data/demo';
// import {Bigimage, Slidermenu} from '../'

export default function Imagepreview(props) {
    const [bigImage, setBigImage] = React.useState({img: Bigproduct1});
    const [imageVal, setImageVal] = React.useState(1);

    const changeImage = (e) => {
        if (e.target.id == 1) {
            setBigImage((prevImage) => {
                return {...prevImage, img: Bigproduct1}
            })
        } else  if (e.target.id == 2) {
            setBigImage((prevImage) => {
                return {...prevImage, img: Bigproduct2}
            })
        } else  if (e.target.id == 3) {
            setBigImage((prevImage) => {
                return {...prevImage, img: Bigproduct3}
            })
        }else  {
            setBigImage((prevImage) => {
                return {...prevImage, img: Bigproduct4}
            })
        }
    }

    const nextImage = () => {
        setImageVal((preVal) => preVal + 1);
        if (imageVal == 1) {
            setBigImage((prevImage) => {
                return {...prevImage, img: Bigproduct2}
            })
        } else  if (imageVal == 2) {
            setBigImage((prevImage) => {
                return {...prevImage, img: Bigproduct3}
            })
        } else  if (imageVal == 3) {
            setBigImage((prevImage) => {
                return {...prevImage, img: Bigproduct4}
            })
        }else  {
            setBigImage((prevImage) => {
                return {...prevImage, img: Bigproduct1}
            })
            setImageVal(preVal => preVal - 3);
        } 
    }

    const prevImage = () => {
        setImageVal(preVal => preVal - 1);
        if (imageVal == 1) {
            setBigImage((prevImage) => {
                return {...prevImage, img: Bigproduct4}
            })
            setImageVal(preVal => preVal + 3);
        } else  if (imageVal == 2) {
            setBigImage((prevImage) => {
                return {...prevImage, img: Bigproduct1}
            })
        } else  if (imageVal == 3) {
            setBigImage((prevImage) => {
                return {...prevImage, img: Bigproduct2}
            })
        }else   {
            setBigImage((prevImage) => {
                return {...prevImage, img: Bigproduct3}    
            })
        } 
    }

    const images = imageList.map((image) => 
        <figure className='p-0 rounded-xl cursor-pointer hover:border-[#ff7d1a] hover:border-solid hover:border-2' key={image.id}>
            <img key={image.id} id={image.id} src={image.img} onClick={changeImage} className={`rounded-lg m-0 ${props.for ? 'opacity-100 transition-opacity hover:opacity-[1] hover:contrast-50' : 'opacity-100 transition-opacity ease-in-out duration-500 hover:opacity-[50%]'}`}/>
        </figure>
    )

    return(
        <section className= {`relative sm:flex-col lg:ml-8 sm:space-y-6 sm:flex" ${props.for ? 'z-50 space-y-6' : 'z-0'}`}>
            <figure className='cursor-pointer' onClick={props.openLightBox}>
                <img src={bigImage.img} className= "pointer-events-none sm:rounded-lg"/>
            </figure>
            <nav className={`flex-row space-x-5 ${props.for ? 'visible flex' : 'hidden sm:flex'}`}>
                {images}
            </nav>
            <figure className={`absolute cursor-pointer right-0 rounded-full bg-[#ffffff] py-2 px-3 ${props.for ? 'sm:visible top-[30%] -mr-3' : 'sm:hidden top-[50%]  mr-5'}`} onClick={nextImage}>
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg" className='stroke-[#1D2026] hover:stroke-[#ff7d1a]'><path d="m2 1 8 8-8 8" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
            </figure>
            <figure className={`absolute cursor-pointer left-0 rounded-full bg-[#ffffff] py-2 px-3 ${props.for ? 'sm:visible top-[30%] -ml-3' : 'sm:hidden top-[50%] ml-5'}`} onClick={prevImage}>
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg" className='stroke-[#1D2026] hover:stroke-[#ff7d1a]'><path d="M11 1 3 9l8 8" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
            </figure>
        </section>
    )
}