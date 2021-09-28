import React from 'react'
import blog1 from '../../assets/articles-card-1.png'
import blog2 from '../../assets/articles-card-2.png'
import blog3 from '../../assets/articles-card-3.png'
import blog4 from '../../assets/articles-card-4.png'

function ArticleMore() {
    return (
        <div className="max-w-6xl mx-auto font-semibold my-20 " style={{ color: '#2A3158' }}>
            <div className='border-t-2 bg-gray-700' />
            <h1 className="text-4xl py-8 text-center lg:text-left" >More from priyanshu</h1>
            <div className="text-center lg:flex items-center justify-center lg:space-x-5 space-y-5 lg:space-y-0">
                <div className="grid place-items-center">
                    <img src={blog1} alt="articles-card-1" />
                    <h6 className='pt-3'>cutting-edge products launched through logitech excel</h6>
                </div>
                <div className="grid place-items-center">
                    <img src={blog2} alt="articles-card-2" />
                    <h6 className='pt-3'>cutting-edge products launched through logitech excel</h6>
                </div>
                <div className="grid place-items-center">
                    <img src={blog3} alt="articles-card-3" />
                    <h6 className='pt-3'>cutting-edge products launched through logitech excel</h6>
                </div>
                <div className="grid place-items-center">
                    <img src={blog4} alt="articles-card-4" />
                    <h6 className='pt-3' >cutting-edge products launched through logitech excel</h6>
                </div>
            </div>
        </div>
    )
}

export default ArticleMore
