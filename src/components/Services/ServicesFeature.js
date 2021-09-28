import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
function ServicesFeature({ src, text, heading, benefits }) {
    return (
        <div
            className={`text-center lg:col-span-1  ${benefits && 'mb-20'} py-14 `}
            style={{ boxShadow: '0px 3px 10px #00000029' }}
        >
            <LazyLoadImage effect="opacity" src={src} className='mx-auto object-contain' alt="services-features" />
            <h1 style={{ color: ' #4e5474' }} className={`font-bold my-3 text-xl ${benefits && 'text-xs uppercase'} `}>{heading}</h1>
            <p className={`${benefits && 'text-md'}`} style={{ color: '#7F7F7F' }}>{text}</p>
        </div>
    )
}

export default ServicesFeature