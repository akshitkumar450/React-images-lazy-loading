import BlogsPost from './BlogsPost'

function BlogsSocial({ show }) {
    return (
        <div>
            <div>
                <h1 className="text-4xl font-semibold mb-4" style={{ color: '#2A3158' }}>Hello There</h1>
                <p className="text-md text-gray-700 ">
                    We are EZ Colab, the only affordable business-in-a-box solution for course creators and coaches to launch an online course
                </p>
            </div>

            {
                show && (
                    <>
                        <div className={`flex items-center ${show ? 'my-12' : 'mb-5'}`}>
                            <input type="text" placeholder="search for .." className=' w-4/5 text-xl h-11 p-4 ring-1 ring-gray-700 rounded-l-full' />
                            <a href="#yourlink">
                                <i className="fas fa-search bg-gray-700 text-2xl text-white p-2 rounded-r-full"></i>
                            </a>
                        </div>
                        <div>
                            <h1 className="text-4xl font-semibold mb-4" style={{ color: '#2A3158' }}>Connect us on</h1>
                            <div className="mt-5 flex items-center  justify-start space-x-5">
                                <a href="#yourlink" style={{ color: '#0762bb' }} className='text-4xl'>
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#yourlink" style={{ color: '#0762bb' }} className='text-4xl'>
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </>
                )
            }

            <div className='mt-20'>
                <h1 className="text-4xl font-semibold mb-4" style={{ color: '#2A3158' }}>Latest Posts</h1>
                <div className='space-y-3'>
                    <BlogsPost post />
                    <BlogsPost />
                    <BlogsPost post />
                    <BlogsPost />
                    <BlogsPost post />
                </div>
            </div>

            <div className='mt-20'>
                <h1 className="text-4xl font-semibold mb-4" style={{ color: '#2A3158' }}>In Trends</h1>
                <div className='space-y-3'>
                    <BlogsPost />
                    <BlogsPost post />
                    <BlogsPost />
                    <BlogsPost post />
                    <BlogsPost />
                </div>
            </div>
        </div>
    )
}

export default BlogsSocial
