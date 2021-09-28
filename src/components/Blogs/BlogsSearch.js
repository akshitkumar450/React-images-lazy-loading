import React from 'react'

function BlogsSearch({ bgcolor }) {
    return (
        <div className={`px-10 py-5 lg:grid ${bgcolor ? 'bg-gray-700' : 'bg-white'} grid-cols-7 mt-20 lg:px-12 lg:py-10`}
        >
            <div className={`${bgcolor ? 'text-white' : ''} col-span-2`}>
                <h4 className="text-xl">SUBSCRIBE US TODAY !</h4>
                <p className="text-xl">
                    Receive updates regarding latest posts via e-mail
                </p>
            </div>
            <div className="col-span-4  mt-5 space-y-5 lg:space-y-0 lg:mt-0 lg:flex justify-center items-center gap-x-5 lg:px-5">
                <form style={{ width: '100%' }}>
                    <input type="text" placeholder="Your Name" className={`w-full h-12 px-2 ${bgcolor ? 'outline-none' : 'outline-white'} cursor-pointer`} />
                </form>
                <form style={{ width: '100%' }}>
                    <input type="email" placeholder="Your Email" className='w-full h-12 px-2 outline-none cursor-pointer' />
                </form>
            </div>

            <div className='col-span-1 grid place-items-center mt-4 lg:mt-0'>
                <a href="#yourlink" className='text-white rounded-full text-2xl px-5 py-2' style={{ background: '#df7324' }}>subscribe</a>
            </div>
        </div>
    )
}

export default BlogsSearch
