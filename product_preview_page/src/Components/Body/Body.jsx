import React from 'react';

export function Body() {
    return(
        <section className= "flex flex-col mt-3 space-x-5 sm:flex-row sm:mt-10 sm:space-x-10 lg:space-x-28">
            <Imagepreview />
            <Textualside />
        </section>
    )
}