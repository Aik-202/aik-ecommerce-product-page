import React from 'react'
import Imagepreview from './Body/Imagepreview'
import { Close } from '../Data'

export default function LightBox() {
  return (
    <section className='flex flex-col justify-center content-center items-center w-[50%] px-32 mx-auto mt-20 space-y-2 '>
        <figure className='self-end'>
            <img src={Close} alt="close-lightBox" />
        </figure>
        <Imagepreview for={"lighthouse"}/>
    </section>
  )
}