import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import homeVideo from '../../assets/video-image.png'

function DemoLeft() {
    return (
        <div className='col-span-1'>
            <h1 className='text-blue-600 font-bold text-4xl'>Need help with launching and scaling your online course?
            </h1>

            <p style={{ color: '#424348' }} className='mt-3' > Watch the video below to know how the demo will help you grow your online course
            </p>
            <div className='mt-5 '>
                <LazyLoadImage effect="opacity" src={homeVideo} alt="video-img" />
            </div>
            <h1 style={{ color: '#424348' }} className='text-2xl my-5'>Get a free demo of how you can,
            </h1>

            <ol className='list-decimal list-inside' style={{ color: '#424348' }}>
                <li>Launch your online course in 7 days
                </li>
                <li>Get beautiful website designs & accelerate web development with a mini team of designer, coder & manager provided by us
                </li>
                <li>Always receive excellent customer support & boost the growth of your online course</li>
            </ol>
            <p style={{ color: '#424348' }} className='mt-5'>See for yourself! Fill out the form to schedule a free demo, customised for your needs. </p>
        </div>
    )
}

export default DemoLeft
