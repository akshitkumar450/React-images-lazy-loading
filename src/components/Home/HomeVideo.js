import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import homeVideo from '../../assets/video-image.png'
function HomeVideo() {
    return (
        <div>
            <div className="lg:flex lg:items-center lg:justify-around p-5 mt-10 lg:mt-20">
                <div>
                    <h2 className='lg:w-4/5 text-3xl font-bold'
                        style={{ color: '#2275C7' }}
                    >
                        Save thousands of $$$ per year on your tech needs
                    </h2>
                    <h2 className='lg:w-4/5 text-xl py-5'
                        style={{ color: '#2A3158' }}
                    >
                        Get a <span style={{ color: '#2275C7' }}> Designer, Developer and Manager </span>
                        for your custom web needs
                    </h2>

                    <h2 className='lg:w-4/5 text-xl'
                        style={{ color: '#2A3158' }}
                    >
                        Finally, a perfect match made in Tech Heaven!
                    </h2>
                </div>

                <div className='mt-10 lg:mt-0 flex items-center justify-center'>
                    <LazyLoadImage effect="opacity"
                        src={homeVideo}
                        className="w-4/5 h-auto object-contain"
                        alt="home-video"
                    />
                </div>
            </div>
            <div className="lg:w-2/5 mx-auto  text-center py-2"
                style={{ color: '#2A3158' }}
            >
                <h3 className='text-xl font-medium py-5'>Get your very own mini team working for you, to help you succeed with your online course</h3>
            </div>
            <div className='mt-2 text-center mb-10'>
                <Link to='/pricing' target='_blank' className='text-white rounded-full px-4 py-2' style={{ background: '#df7324' }}>Get started</Link>
            </div>

        </div>
    )
}

export default HomeVideo
