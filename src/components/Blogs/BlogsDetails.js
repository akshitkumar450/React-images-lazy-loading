import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import img from '../../assets/blog-detail-img.png'

function BlogsDetails(props) {
    const { text1, text2, text3 } = props
    return (
        <div>
            <div className='my-5'>
                <LazyLoadImage effect="opacity" src={img} alt="" className='w-11/12 h-auto object-contain' />
            </div>
            <p className='text-gray-600'>{text1}</p>
            <p className='text-gray-600'>{text2}</p>
            <p className='text-gray-600'>{text3}</p>
        </div>
    )
}

export default BlogsDetails
