import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function AboutUsExecutiveRow({ img, text, name, first }) {
    return (
        <div className=' mb-20 lg:text-left  place-items-center px-3 lg:px-0 lg:grid grid-cols-3 items-center'>
            <div className={` ${first && 'order-last'} grid place-items-center`}>
                <LazyLoadImage effect="opacity" src={img} alt="aboutus-executive" className='block ' />
                <h1 className='text-center mt-3 text-3xl'
                    style={{ color: '#626784' }}>
                    {name}
                </h1>
            </div>
            <div className='col-span-2'>
                <p className='mt-4 lg:mt-0 text-gray-500'>{text}</p>
            </div>
        </div>
    )
}

export default AboutUsExecutiveRow
