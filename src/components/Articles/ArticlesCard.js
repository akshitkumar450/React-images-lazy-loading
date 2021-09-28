import React from 'react'

function ArticlesCard({ img, text }) {
    return (
        <div className='px-4 lg:px-0 grid place-items-center bg-blue-100 p-2 ring-2 ring-blue-300'>
            <img src={img} alt="articles-card" />
            <button className='cursor-pointer text-white w-4/5 px-4 py-2' style={{ background: '#df7324' }}>{text}</button>
        </div>
    )
}

export default ArticlesCard
