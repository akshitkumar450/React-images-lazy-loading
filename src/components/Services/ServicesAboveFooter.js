import React from 'react'
import { Link } from 'react-router-dom'

function ServicesBelowTesti() {
    return (
        <>
            <div className='grid place-items-center'>
                <Link to='/demo' target='_blank'>
                    <button className='text-white mt-3 rounded-md px-4 py-2' style={{ background: '#df7324' }}>Get started</button>
                </Link>
            </div>

            <div
                style={{
                    backgroundImage: "url('/images/pricing-bg.png')", backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}>
                <div className="p-10 lg:p-20 text-white text-center mt-5 text-xl font-semibold" style={{ color: '#2A3158' }}>
                    <h6 style={{ color: '#186FC5' }} className='text-2xl'>How Often Did You Hear Yourself Saying:</h6>
                    <h6 className='my-5'>"Yes, I Know! We Should Update Our Website."</h6>
                    <h6>This is the time. Get your new dream team today!</h6>
                </div>
            </div>
        </>
    )
}

export default ServicesBelowTesti
