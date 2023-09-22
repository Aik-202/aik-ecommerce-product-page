import React from 'react'
import Imagepreview from './Body/Imagepreview'

export default function LightBox(props) {
  return (
    <section className='fixed top-0 right-0 bottom-0 left-0 bg-opacity-0 flex flex-col justify-center content-center items-center w-full h-screen px-5 sm:h-auto sm:w-[70%] sm:px-16 lg:w-[50%] lg:px-32 mx-auto lg:mt-6 space-y-3 z-50' onClick={(e) => e.stopPropagation()}>
        <figure className='self-end'>
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer fill-[#fff] hover:fill-[#ff7d1a]' onClick={props.close}><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd"/></svg>
        </figure>
        <Imagepreview for={true}/>
    </section>
  )
}