import React from 'react'
import Imagepreview from './Body/Imagepreview'
import { Close } from '../Data'

export default function LightBox(props) {
  return (
    <section className='flex flex-col justify-center content-center items-center w-[50%] px-32 mx-auto mt-20 space-y-2' onClick={(e) => e.stopPropagation()}>
        <figure className='self-end'>
            <img src={Close} alt="close-lightBox" className='cursor-pointer' onClick={props.close}/>
        </figure>
        <Imagepreview for={"lighthouse"}/>
    </section>
  )
}