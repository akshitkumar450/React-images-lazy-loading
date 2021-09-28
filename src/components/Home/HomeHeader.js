import React from 'react'
import admin from '../../assets/home-admin-view.png'
import instructor from '../../assets/home-instructor-view.png'
import student from '../../assets/home-student-view.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Typewriter from 'typewriter-effect';
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Header() {
    const [showFirst, setShowFirst] = useState(true)
    const [showSecond, setShowSecond] = useState(false)
    const [showThird, setShowThird] = useState(false)

    const firstShow = () => {
        setShowFirst(true)
        setShowSecond(false)
        setShowThird(false)
    }
    const secondShow = () => {
        setShowFirst(false)
        setShowSecond(true)
        setShowThird(false)
    }
    const thirdShow = () => {
        setShowFirst(false)
        setShowSecond(false)
        setShowThird(true)
    }

    return (
        <div className='header p-5 lg:px-8'>
            <div className="grid place-items-center mt-20 lg:mt-32 lg:px-5 ">
                <div className="px-1 lg:px-0 lg:w-3/4 text-center lg:pb-10">
                    <h1 style={{ color: '#186FC5' }} className='text-3xl lg:text-4xl font-bold '>
                        The fastest and easiest way to build
                    </h1>
                    <br />

                    <div className='text-2xl lg:text-4xl font-semibold ' style={{ color: '#df7324' }} >
                        <Typewriter
                            options={{
                                strings: [' "an online course"', ' "a community "', ' "a website"', '"a coaching business"', '"email newsletters"', '" a template business"'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <p style={{ color: '#2A3158' }} className=' text-lg my-5'>
                        A Business-in-a-box solution for Course Creators & Coaches to turn their knowledge into income.
                    </p>

                    <div>
                        <Link to='/demo' target='_blank' className='text-white rounded-md px-4 py-2' style={{ background: '#df7324' }}>Book a Demo Now</Link>
                    </div>
                </div>

                <div className='mt-20 lg:mt-0  '>
                    <div className='grid place-items-center'>
                        <div className='grid place-items-center mb-2 lg:mb-4 '>
                            <div className='text-xs lg:text-lg text-center flex'>
                                <h1 onClick={firstShow} className={`${showFirst ? '  bg-blue-600 text-white' : 'bg-transparent text-blue-600'}  cursor-pointer  ring-1 ring-blue px-5 py-1 rounded-tl-lg `}
                                    style={{
                                        background: showFirst ? '#186FC5' : 'transparent',
                                    }}> Admin View</h1>

                                <h1 onClick={secondShow} className={`${showSecond ? ' text-white' : ' text-blue-600'}  cursor-pointer   ring-1 ring-blue px-5 py-1`}
                                    style={{
                                        background: showSecond ? '#DF7324' : 'transparent',
                                    }}>
                                    Instructor View
                                </h1>

                                <h1 onClick={thirdShow} className={`${showThird ? ' text-white' : 'text-blue-600'}  cursor-pointer ring-1 ring-blue px-5 py-1 rounded-tr-lg`}
                                    style={{
                                        background: showThird ? '#2A3158' : 'transparent'
                                    }}>
                                    Student View
                                </h1>
                            </div>
                        </div>

                        <div className='grid place-items-center'>
                            {
                                showFirst && (
                                    <LazyLoadImage effect="opacity" src={admin} className=' w-full transform-gpu scale-110 h-auto  object-contain' alt="admin-view" />
                                )
                            }
                            {
                                showSecond && (
                                    <LazyLoadImage effect="opacity" src={instructor} className=' w-full transform-gpu scale-110 h-auto object-contain' alt="instructor-view" />
                                )
                            }
                            {
                                showThird && (
                                    <LazyLoadImage effect="opacity" src={student} className=' w-full transform-gpu scale-110 h-auto object-contain' alt="student-view" />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
