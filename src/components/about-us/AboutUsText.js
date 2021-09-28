import React from 'react'

function AboutUsText() {
    return (
        <div className='max-w-6xl mx-auto mt-20 lg:mt-40 bg-white shadow-2xl lg:px-20 lg:py-10 mb-20'>
            <div div className='text-center' >
                <h1 className='text-3xl font-semibold' style={{ color: '#2A3158' }}>About Us</h1>
            </div>
            <div className='place-items-center text-center lg:text-left lg:grid grid-cols-3 mt-20'>
                <div className='px-2 lg:px-0 col-span-2 lg:border-r-2 text-gray-500 border-0 lg:border-gray-500 lg:pr-10'>
                    <p className='mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate officiis minima veritatis, magnam beatae enim asperiores tempora libero vero quasi, hic temporibus unde ipsa consequatur similique placeat optio nesciunt numquam eaque mollitia incidunt! Veniam quaerat dicta eos cumque non laboriosam tempora distinctio illum iste mollitia. Iste, architecto? Sapiente quaerat officiis expedita quo reiciendis laborum
                    </p>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate officiis minima veritatis, magnam beatae enim asperiores tempora libero vero quasi, hic temporibus unde ipsa consequatur similique placeat optio nesciunt numquam eaque mollitia incidunt! Veniam quaerat dicta eos cumque non laboriosam tempora distinctio illum iste mollitia. Iste, architecto? Sapiente quaerat officiis expedita quo reiciendis laborum
                    </p>
                </div>
                <div className='pb-10 lg:pb-0 mt-4 lg:mt-0 col-span-1 place-items-center grid h-full  text-2xl  gap-y-1 font-semibold' style={{ color: '#2A3158' }}>
                    <h1 style={{ color: '#FFA500' }}>Our vision</h1>
                    <h1>Our mission</h1>
                    <h1>Our services</h1>
                    <h1>Our products</h1>
                </div>
            </div>
        </div>
    )
}

export default AboutUsText
