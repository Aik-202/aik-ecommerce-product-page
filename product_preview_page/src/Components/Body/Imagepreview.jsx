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
                return {...prevImage, img: Bigproduct1}
            })
        } else  if (imageVal == 2) {
            setBigImage((prevImage) => {
                return {...prevImage, img: Bigproduct2}
            })
        } else  if (imageVal == 3) {
            setBigImage((prevImage) => {
                return {...prevImage, img: Bigproduct3}
            })
        }else  {
            setBigImage((prevImage) => {
                return {...prevImage, img: Bigproduct4}
            })
        } 
    }

    const prevImage = () => {
        setImageVal((preVal) => preVal - 1);
        if (imageVal == 1) {
            setBigImage((prevImage) => {
                return {...prevImage, img: Bigproduct1}
            })
        } else  if (imageVal == 2) {
            setBigImage((prevImage) => {
                return {...prevImage, img: Bigproduct2}
            })
        } else  if (imageVal == 3) {
            setBigImage((prevImage) => {
                return {...prevImage, img: Bigproduct3}
            })
        }else  {
            setBigImage((prevImage) => {
                return {...prevImage, img: Bigproduct4}
            })
        } 
    }

    const images = imageList.map((image) => 
        <figure className='p-0 rounded-xl cursor-pointer hover:border-[#ff7d1a] hover:border-solid hover:border-2' key={image.id}>
            <img key={image.id} id={image.id} src={image.img} onClick={changeImage} className= "rounded-lg hover:opacity-[50%] m-0"/>
        </figure>
    )

    return(
        <section className= "relative sm:flex-col sm:space-y-6 sm:flex">
            <figure>
                <img src={bigImage.img} className= "pointer-events-none sm:rounded-lg"/>
            </figure>
            <nav className= "hidden sm:flex flex-row space-x-5">
                {images}
            </nav>
            <figure className='absolute cursor-pointer flex flex-row-reverse justify-between w-full px-5 top-[50%] sm:hidden'>
                <img src={Next} alt="previous" className='rounded-full bg-[#ffffff] py-2 px-3' onClick={nextImage}/>
                <img src={Previous} alt="next" className='rounded-full bg-[#ffffff] py-2 px-3' onClick={prevImage}/>
            </figure>
        </section>
    )
}