import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

function ServicesRow({ src, mainheading, maintext, first, secText, secImg }) {
    return (
        <>
            <div className={`${secImg && 'mb-48'} px-3 lg:px-0 my-16 lg:justify-around lg:items-center lg:grid lg:grid-cols-2 ${first && 'bg-blue-100 p-1'} relative`}>
                <div className={`flex lg:justify-center lg:items-center lg:col-span-1 ${first && 'order-last'} `}>
                    <LazyLoadImage effect="opacity" src={src} className='block mx-auto' alt="services-features" />
                </div>
                <div
                    className={` pt-10 mx-auto w-11/12 lg:w-3/4  lg:col-span-1  lg:text-left ${first && 'ml-auto'}`}>
                    <h1 className={`text-2xl font-bold capitalize mt-5 `} style={{ color: '#186FC5' }}>{mainheading}</h1>
                    <p className='text-md mt-3' style={{ color: '#2A3158' }}>{maintext}</p>
                    {
                        secText && <p className={`text-md mt-3   ${secImg && 'lg:mb-64'}`} style={{ color: '#2A3158' }}>{secText}</p>
                    }

                    {
                        !secImg &&
                        <Link to='/demo' target='_blank'>
                            <button className='text-white  mt-3 rounded-md px-4 py-2' style={{ background: '#df7324' }}>Get started</button>
                        </Link>
                    }
                </div>

                {
                    secImg &&
                    <div className='flex  bg-white absolute -bottom-36 lg:right-10 lg:-bottom-48'>
                        {
                            secImg.map((img, index) => (
                                <LazyLoadImage effect="opacity" src={img} key={index} className='w-28 lg:w-64 h-auto object-contain' alt="services-features" />
                            ))
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default ServicesRow
