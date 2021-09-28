import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import post1 from '../../assets/post-1.png'
import post2 from '../../assets/post-2.png'

function BlogsPost({ post }) {
    return (
        <>
            <div className="grid grid-cols-3 items-center border-b-2 border-black w-full ">
                <div className='col-span-2'>
                    <h4 className="text-sm font-semibold" style={{ color: '#2A3158' }}>
                        cutting-edge products launched through logitech
                    </h4>
                    <div className="post-info text-md ml-1 mt-4">
                        <i className="far fa-clock mr-2"></i>
                        <span>Nov 10,2021</span>
                    </div>
                </div>

                <div className="mb-5 col-span-1">
                    <LazyLoadImage effect="opacity" className='object-contain h-auto' src={post ? post1 : post2} alt="blogs-post" />
                </div>
            </div>
        </>
    )
}

export default BlogsPost
