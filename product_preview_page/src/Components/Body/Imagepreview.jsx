import React from 'react';
import { Bigproduct1, Bigproduct2, Bigproduct3, Bigproduct4, Next, Previous } from '../../Data';
import { imageList } from '../../Data/demo';
// import {Bigimage, Slidermenu} from '../'

export default function Imagepreview() {
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
            <img key={image.id} id={image.id} src={image.img} onClick={changeImage} className= "rounded-lg hover:opacity-[50%] m-0"/>
        </figure>
    )

    return(
        <section className= "relative sm:flex-col lg:ml-8 sm:space-y-6 sm:flex">
            <figure className='cursor-pointer'>
                <img src={bigImage.img} className= "pointer-events-none sm:rounded-lg"/>
            </figure>
            <nav className= "hidden sm:flex flex-row space-x-5">
                {images}
            </nav>
            <figure className='absolute cursor-pointer top-[50%] right-0 mr-5 rounded-full bg-[#ffffff] py-2 px-3 sm:hidden' onClick={nextImage}>
                <img src={Next} alt="next"/>
            </figure>
            <figure className='absolute cursor-pointer top-[50%] left-0 ml-5 rounded-full bg-[#ffffff] py-2 px-3 sm:hidden' onClick={prevImage}>
                <img src={Previous} alt="previous"/>
            </figure>
        </section>
    )
}