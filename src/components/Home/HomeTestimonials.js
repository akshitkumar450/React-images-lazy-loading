import React from 'react'
import styles from './HomeTestimonials.module.css'
import women from '../../assets/home-woman.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function HomeTestimonials() {
    return (
        <div className="w-full lg:w-4/5 mx-auto p-5 lg:p-11">
            <div className="text-2xl text-center font-medium" style={{ color: '#2A3158' }}>
                <h4>Words of our Creators</h4>
            </div>
            <div className="flex justify-between items-end mt-8">
                <div className={styles.homeTestimonialsLeft}>
                    <i className="fas fa-arrow-left"></i>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <LazyLoadImage effect="opacity" src={women} alt="testimonials" className='h-auto object-contain w-28' />
                    <div className="flex justify-between text-2xl mt-12">
                        <i className="far fa-star "></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                </div>
                <div className={styles.homeTestimonialsRight}>
                    <i className="fas fa-arrow-right"></i>
                </div>
            </div>
            <div className="w-full lg:w-4/5 mx-auto mt-5">
                <p className='text-center'>
                    Simple and Easy to use Platform for my course creation.
                    I will never have to worry aabout managing my website again.
                    Their Team is very supportive and constantly updating the app.
                </p>
            </div>
        </div>
    )
}

export default HomeTestimonials
