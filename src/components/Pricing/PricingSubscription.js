import React from 'react'
import logo from '../../assets/logo.png'
import slack from '../../assets/pricing-logo-slack.png'
import dropbox from '../../assets/pricing-logo-dropbox.png'
import gsuite from '../../assets/pricing-logo-gsuite.png'
import stack from '../../assets/pricing-logo-stack.png'
import emoji from '../../assets/emoji-cry.png'
import vs from '../../assets/vs.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function PriceSubscription() {
    return (
        <div className=' px-3 lg:px-0 max-w-6xl mx-auto mb-20'>
            <div className='my-8 text-center'>
                <h3 className='text-blue-500 font-semibold text-4xl mb-3'>Save thousands $$$ with EZ Colab</h3>
                <p className='text-lg text-gray-700'>Most Universities use at least 3-4 tools to manage their daily activities. </p>
                <p className='text-lg text-gray-700'>And so the cost of running a university add up pretty fast.</p>
            </div>

            <div>
                <div className='lg:grid grid-cols-2  gap-x-3 space-y-5 lg:space-y-0'>
                    <div className='relative col-span-1 px-10 py-10 border-2 border-gray'>
                        <div className='grid place-items-center'>
                            <a href="/">
                                <LazyLoadImage effect="opacity" src={logo} alt="" />
                            </a>
                        </div>
                        <div className='mt-8'>
                            <ul className='text-gray-500 text-xl space-y-6'>
                                <li> <i className={`fas fa-check mr-2 text-blue-600`}></i>Team/Group Messages</li>
                                <li> <i className={`fas fa-check mr-2 text-blue-600`}></i>Course Discussions</li>
                                <li> <i className={`fas fa-check mr-2 text-blue-600`}></i>Reviews</li>
                                <li> <i className={`fas fa-check mr-2 text-blue-600`}></i>Documents</li>
                                <li> <i className={`fas fa-check mr-2 text-blue-600`}></i>Digitized suggestion board</li>
                                <li> <i className={`fas fa-check mr-2 text-blue-600`}></i>Calender</li>
                                <li> <i className={`fas fa-check mr-2 text-blue-600`}></i>File Storage</li>
                            </ul>
                        </div>
                        <div className='cursor-pointer bg-blue-600 mt-5 text-white text-center text-xl py-4 px-8'>
                            <h1>$4/Month per user</h1>
                        </div>

                        <div className='hidden lg:inline-flex bg-white absolute top-52 -right-14  ' >
                            <LazyLoadImage effect="opacity" alt="" className=' w-28 h-28 object-contain ring-1 ring-gray-500 rounded-full' src={vs} />
                        </div>
                    </div>


                    <div className='col-span-1 px-4 lg:px-10 py-10 border-2 border-gray'>
                        <h3 className='text-blue-600 text-center text-4xl font-semibold'>
                            Individual subscription
                        </h3>

                        <div className='mt-8 lg:flex items-center justify-between'>
                            <div className='flex'>
                                <LazyLoadImage effect="opacity" alt="" className=' mr-5 w-11 h-11 object-contain'
                                    src={slack}
                                />
                                <h4 className='w-40  text-xl text-gray-600'>
                                    Slack: realtime communication
                                </h4>
                            </div>
                            <div>
                                <p className='text-blue-600 text-center my-2 lg:my-0 lg:text-left'>
                                    <span className='font-semibold'
                                        style={{ color: '#DD7023' }}
                                    >$6.67</span>/month per user
                                </p>
                            </div>
                        </div>

                        <div className='mt-8 lg:flex items-center justify-between'>
                            <div className='flex'>
                                <LazyLoadImage effect="opacity" alt="" className=' mr-5 w-11 h-11 object-contain'
                                    src={dropbox} />
                                <h4 className=' w-40  text-xl text-gray-600'>
                                    Dropbox: file storage
                                </h4>
                            </div>
                            <div>
                                <p className='text-blue-600 text-center my-2 lg:my-0 lg:text-left'>
                                    <span className='font-semibold'
                                        style={{ color: '#DD7023' }}>
                                        $12.50
                                    </span>/month per user
                                </p>
                            </div>
                        </div>

                        <div className='mt-8 lg:flex items-center justify-between'>
                            <div className="flex">
                                <LazyLoadImage effect="opacity" alt="" className='mr-5 w-11 h-11 object-contain'
                                    src={gsuite} />

                                <h4 className=' w-40  text-xl text-gray-600'>
                                    Google: Email, Calender
                                </h4>
                            </div>
                            <div>
                                <p className='text-blue-600 text-center my-2 lg:my-0 lg:text-left'>
                                    <span className='font-semibold'
                                        style={{ color: '#DD7023' }}>
                                        $5.00
                                    </span>/month per user
                                </p>
                            </div>
                        </div>

                        <div className='mt-8 lg:flex items-center justify-between'>
                            <div className='flex'>
                                <LazyLoadImage effect="opacity" alt="" className=' mr-5 w-11 h-11 object-contain'
                                    src={stack}
                                />
                                <h4 className=' w-40  text-xl text-gray-600'>
                                    Stack Overflow: Teams Basic
                                </h4>
                            </div>
                            <div>
                                <p className=' text-center my-2 lg:my-0 lg:text-left text-blue-600'>
                                    <span className='font-semibold'
                                        style={{ color: '#DD7023' }}>
                                        $7.00</span>/month per user
                                </p>
                            </div>
                        </div>

                        <div className='cursor-pointer mt-8 text-center lg:text-left lg:flex items-center justify-around 
                        bg-blue-600'>
                            <div className='flex items-center' >
                                <LazyLoadImage effect="opacity" alt="" className='hidden lg:inline-flex lg:mr-5  w-11 h-11 object-contain'
                                    src={emoji}
                                />
                                <h4 className='w-full lg:w-40 text-white'>Total</h4>
                            </div>
                            <div className='text-white text-xl'>
                                <p className='py-4'><span>$31.17</span>/month per user</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid place-items-center mt-5'>
                <p className='text-2xl text-blue-500'>
                    Why pay 7x More and have 5 more tabs open in your browser
                </p>
                <div className='cursor-pointer mt-8 inline-block'>
                    <a href='#y' className='text-white rounded-full px-4 py-2' style={{ background: '#df7324' }}>Try Ez Colab</a>
                </div>
            </div>
        </div>
    )
}

export default PriceSubscription
