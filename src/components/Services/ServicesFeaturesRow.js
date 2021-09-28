import React from 'react'
import ServicesFeature from './ServicesFeature'
import webdesign from '../../assets/services-webdesign-1.png'
import automation from '../../assets/services-automation.png'
import technical from '../../assets/services-technical.png'
import { Link } from 'react-router-dom'

function ServicesFeaturesRow() {
    return (
        <>
            <div className='grid place-items-center'>
                <Link to='/demo' target='_blank'>
                    <button className='text-white  mt-3 rounded-md px-4 py-2' style={{ background: '#df7324' }}>Get started</button>
                </Link>
            </div>
            <div className='max-w-6xl px-3 space-y-6 lg:space-y-0 lg:px-0 mt-20 mx-auto lg:grid grid-cols-3 gap-x-2'>
                <ServicesFeature
                    src={webdesign}
                    benefits={false}
                    heading='Web designing'
                    text='Get professional websites and convert your leads into sales.'
                />
                <ServicesFeature
                    benefits={false}
                    src={automation}
                    heading=' Automation tasks'
                    text='We’ll set up our lead generation API instantly on your website.'
                />
                <ServicesFeature
                    benefits={false}
                    src={technical}
                    heading='Technical support'
                    text=" Our team is an email away to fix those ‘little’ website errors that take hours to solve yourself."
                />
            </div>
        </>
    )
}

export default ServicesFeaturesRow
