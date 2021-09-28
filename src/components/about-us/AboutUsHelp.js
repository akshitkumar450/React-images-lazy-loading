import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import computer from '../../assets/aboutus-computer.png'
import ellipse from '../../assets/aboutus-Ellipse.png'

function AboutUsHelp() {
    return (
        <div className='p-4 lg:p-0 max-w-6xl mx-auto lg:grid grid-cols-2 items-center'>
            <div className='col-span-1 lg:mb-0 mb-10'>
                <h1 className="font-semibold text-2xl" style={{ color: '#2A3158' }}>
                    Helping serving the world with best COLLABORATION &amp; COMMUNICATION tool for institutions
                </h1>
                <p className='text-gray-600 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsam harum incidunt! Recusandae aliquam ullam autem assumenda repudiandae magni obcaecati, labore rem aspernatur suscipit eligendi laborum odio explicabo ex ea quaerat. Consequatur quae deleniti eligendi ab illum? Laudantium quo quibusdam, incidunt labore reprehenderit provident veniam? Maxime cupiditate velit quasi inventore.
                </p>
                <div className='bg-white shadow-lg px-5 py-2 lg:px-10 lg:py-5 flex justify-around text-center text-3xl mt-5 rounded-md relative'>
                    <div>
                        <h1 style={{ color: '#FF960C' }} className='font-semibold'>2500+</h1>
                        <p className='text-gray-500 text-lg mt-1'>Free Concepts</p>
                    </div>
                    <div className="border-r-2 px-5 border-l-2 border-black">
                        <h1 style={{ color: '#FF960C' }} className='font-semibold'>200+</h1>
                        <p className='text-gray-500 text-lg mt-1'>Free tests</p>
                    </div>
                    <div>
                        <h1 style={{ color: '#FF960C' }} className='font-semibold'>100+</h1>
                        <p className='text-gray-500 text-lg mt-1' >Free lorem</p>
                    </div>


                    <div className='hidden lg:inline-flex absolute top-5 -left-20 ' style={{ zIndex: '-100' }}>
                        <LazyLoadImage effect="opacity" src={ellipse} alt="aboutus-Ellipse" />
                    </div>
                </div>
            </div>

            <div className='col-span-1  grid place-items-center'>
                <LazyLoadImage effect="opacity" src={computer} alt="aboutus-computer" />
            </div>
        </div>
    )
}

export default AboutUsHelp
