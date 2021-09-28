import React, { lazy } from 'react'
// import Loader from '../components/Loader';
import useLoader from '../components/useLoader';
// import NavbarHeader from '../components/NavbarHeader';
// import BlogsHeader from '../components/Blogs/BlogsHeader';
// import BlogsCards from '../components/Blogs/BlogsCards';
// import BlogsSocial from '../components/Blogs/BlogsSocial';
// import BlogsSearching from '../components/Blogs/BlogsSearching';
import Pagination from '@material-ui/lab/Pagination'

const BlogsHeader = lazy(() => import('../components/Blogs/BlogsHeader'));
const BlogsCards = lazy(() => import('../components/Blogs/BlogsCards'));
const BlogsSocial = lazy(() => import('../components/Blogs/BlogsSocial'));
const BlogsSearching = lazy(() => import('../components/Blogs/BlogsSearching'));

const NavbarHeader = lazy(() => import('../components/NavbarHeader'));
const Loader = lazy(() => import('../components/Loader'));

function Blogs() {
    const loading = useLoader()
    return (
        <>
            {
                loading ? (
                    <Loader loading={loading} />
                ) : (
                    <>
                        <div
                            style={{
                                backgroundImage: "url('/images/blogs-bg.png'), linear-gradient(to right bottom,#E0EFFF,#EFF5FC)", backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}
                        >
                            <NavbarHeader />
                            <BlogsHeader />
                        </div>
                        <div className="max-w-6xl mx-auto">
                            <BlogsSearching />
                            <div className='max-w-5xl mx-auto mt-10'>
                                <div className='px-5 lg:px-0 lg:grid grid-cols-3'>
                                    <div className='col-span-2 '>
                                        <BlogsCards />
                                        <div className='py-5 grid place-items-center'>
                                            <Pagination size='large' count={10} />
                                        </div>
                                    </div>
                                    <div className='col-span-1 lg:ml-10 mb-5'>
                                        <BlogsSocial show={true} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Blogs
