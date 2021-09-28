import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Row({ src, mainheading, maintext, first, headPri, headSec, headTer, headQuat, textPri, textSec, textTer, textQuat, feature1, feature2, feature3, feature4 }) {

    return (
        <div className={` lg:justify-around lg:items-center lg:grid lg:grid-cols-2  ${first && ' p-1'}`}
            style={{
                backgroundColor: first ? '#F1F6FF' : '#F5F8FB'
            }}
        >
            <div className={`py-3 flex lg:justify-center lg:items-center lg:col-span-1 ${first && 'order-last'}`}>
                <LazyLoadImage effect="opacity" src={src} className='block mx-auto h-auto object-contain ' alt="features-header" style={{ width: '30rem' }} />
            </div>

            <div
                className={`py-5 mx-auto w-11/12 lg:w-3/4  lg:col-span-1  lg:text-left ${first && 'ml-auto'}`}>
                <h1 className='text-4xl font-bold mt-5' style={{ color: '#3d86ce' }}>{mainheading}</h1>
                <p className='text-2xl mt-3 font-bold' style={{ color: '#2A3158' }} >{maintext}</p>

                <div className='mt-6 lg:space-y-4'>
                    {
                        (headPri && feature1) &&
                        (<div className='flex'>
                            <LazyLoadImage effect="opacity" src={feature1} className='w-12 h-12' alt="feature-icon-1" />
                            <div className='ml-3 space-y-1'>
                                <h2 className='text-2xl ' style={{ color: '#2A3158' }}>{headPri}</h2>
                                <p style={{ color: '#424348' }}> {textPri}</p>
                            </div>
                        </div>)
                    }

                    {
                        (headSec && feature2) &&
                        (<div className='flex'>
                            <LazyLoadImage effect="opacity" src={feature2} className='w-12 h-12' alt="feature-icon-2" />
                            <div className='ml-3 space-y-1'>
                                <h2 className='text-2xl' style={{ color: '#2A3158' }}>{headSec}</h2>
                                <p style={{ color: '#424348' }}> {textSec}</p>
                            </div>
                        </div>)
                    }

                    {
                        (headTer && feature3) &&
                        (<div className='flex'>
                            <LazyLoadImage effect="opacity" src={feature3} className='w-12 h-12' alt="feature-icon-3" />
                            <div className='ml-3 space-y-1'>
                                <h2 className='text-2xl' style={{ color: '#2A3158' }}>{headTer}</h2>
                                <p style={{ color: '#424348' }}> {textTer}</p>
                            </div>
                        </div>)
                    }

                    {
                        (headQuat && feature4) &&
                        (<div className='flex'>
                            <LazyLoadImage effect="opacity" src={feature4} className='w-12 h-12' alt="feature-icon-4" />
                            <div className='ml-3 space-y-1'>
                                <h2 className='text-2xl' style={{ color: '#2A3158' }}>{headQuat}</h2>
                                <p style={{ color: '#424348' }}> {textQuat}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Row
