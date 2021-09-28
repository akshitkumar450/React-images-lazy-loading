import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import aboutHeader from '../../assets/aboutus-header.png'
function Header() {
    return (
        <div className='header p-5 lg:px-8'>
            <div className="grid items-center lg:grid-cols-2 mt-20 lg:mt-40 lg:px-5 ">
                <div className="lg:w-4/5 lg:col-span-1 ">
                    <h1 className='text-3xl lg:text-4xl text-blue-600 font-medium '>                  Lorem ipsum dolor sit, amet
                    </h1>
                    <p className='text-gray-500 text-md mt-2'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione excepturi saepe veniam nam quisquam quo cum? Magnam velit nesciunt quis, adipisci laborum commodi explicabo ipsum. Animi in consequuntur consequatur facere quo aliquid unde, maiores quidem eligendi quasi aspernatur non, quia nisi quisquam dolores explicabo maxime doloremque illo laborum omnis impedit.
                    </p>
                    <div className='mt-10'>
                        <a href="#yourlink" className=' rounded-lg px-4 py-3 text-white' style={{ backgroundColor: 'rgb(255, 115, 0)' }}>contact us</a>
                    </div>
                </div>
                <div className='lg:col-span-1 mt-8 lg:mt-0 flex justify-center items-center '>
                    <LazyLoadImage effect="opacity" src={aboutHeader} className='w-full lg:w-4/5 h-auto object-contain' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header
