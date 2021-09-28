import React from 'react'
import { Link } from 'react-router-dom'

function LearningFun() {
    return (
        <div
            className=' p-16 lg:w-full h-2/5 lg:p-48 text-center'
            style={{
                backgroundImage: "url('/images/home-learning-fun.png')",
                backgroundPosition: 'center center',
                backgroundSize: 'cover'
            }}
        >
            <div className='w-full lg:w-4/5 lg:mx-auto'>
                <h1 className=' text-white font-medium text-4xl lg:text-5xl'>Make Learning Fun</h1>
                <p className='text-white font-medium py-3'>
                    Reward your students constantly with badges using our built in gamification engine.
                </p>
                <div className='mt-3'>
                    <Link to='/pricing' target='_blank' className='text-white rounded-full px-4 py-2' style={{ background: '#df7324' }}>Get started</Link>
                </div>
            </div>
        </div>
    )
}

export default LearningFun
