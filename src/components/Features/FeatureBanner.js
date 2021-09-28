import React from 'react'
function FeatureBanner() {
    return (
        <div
            className={` px-10 py-10  lg:p-28 flex justify-center`}
            style={{
                backgroundImage: "url('/images/feature-banner.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            }}
        >
            <h1 className=' text-5xl ml-10 lg:ml-48 text-white '>The list goes <br />
                <span className='lg:ml-20'>on and on...</span></h1>
        </div>
    )
}

export default FeatureBanner
