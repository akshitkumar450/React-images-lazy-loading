import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom'
import img from '../../assets/accessories.png'

function BlogsCard({ heading, text }) {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <figure className={`bg-white rounded-2xl mb-20 shadow-2xl`}>
            <div>
                <LazyLoadImage effect="opacity" src={img} alt="accessories" className='w-full object-contain' />
            </div>
            <figcaption className='px-2 py-5'>
                <h4 className='text-sm font-semibold' style={{ color: '#2A3158' }}>
                    {heading}
                </h4>
                <div className='flex justify-between items-center mt-4'>
                    <div className='items-center justify-between'>
                        <i className="fas fa-user text-md"></i>
                        <span className='text-xs ml-1'>By lorem ipsum</span>
                    </div>
                    <div className=' items-center justify-between'>
                        <i className="far fa-clock text-md"></i>
                        <span className='text-xs ml-1' >Nov 10,2021</span>
                    </div>
                </div>
                <p className="text-lg mt-4 text-gray-700 " style={{ hyphens: 'auto' }}>
                    {truncate(text, 160)}
                </p>
                <div className="grid place-items-center mt-2">
                    {/**adding dashes after every word  */}
                    <Link to={`/blogs/${heading.replace(/\s/g, "-").toLowerCase()}`}
                        style={{ background: 'rgb(250, 112, 0)' }}
                        className='text-white text-xl w-full p-3 text-center rounded-xl font-semibold'
                    >Read more</Link>
                </div>
            </figcaption>
        </figure>
    )
}

export default BlogsCard