import React from 'react'
import { Link } from 'react-router-dom'

function DemoRight() {
    return (
        <form style={{ color: '#424348' }} className='col-span-1 mx-auto px-4 bg-white  lg:w-4/5 space-y-4 lg:space-y-7 py-8 lg:px-5 ring-1 ring-gray-200 shadow-lg rounded-lg mt-10 lg:mt-0'>
            <div>
                <label htmlFor='name'>Name <sup>*</sup></label>
                <input type="text" id='name' className='mt-2 w-11/12 lg:w-full block rounded-sm px-2 py-1 ring-1 ring-gray-400' />
            </div>
            <div>
                <label htmlFor='email' >Email <sup>*</sup></label>
                <input type="email" id='email' className='mt-2  w-11/12 lg:w-full  block rounded-sm px-2 py-1 ring-1 ring-gray-400' />
            </div>
            <div>
                <label htmlFor='company' >Company Name <sup>*</sup></label>
                <input type="text" id='company' className='mt-2  w-11/12 lg:w-full  block rounded-sm px-2 py-1 ring-1 ring-gray-400' />
            </div>

            <div>
                <label htmlFor='describes'>What describes you the best?
                    <sup>*</sup></label>
                <select name="" id="describes" className='mt-2  w-11/12 lg:w-full  block rounded-sm px-2 py-1 ring-1 ring-gray-400'>
                    <option value=""> </option>
                    <option value="Creator/Coach with no coding experience"  >Creator/Coach with no coding experience</option>
                    <option value="Creator/Coach with coding experience
                    " >Creator/Coach with coding experience
                    </option>
                    <option value="Independent teacher at University
                    "  >Independent teacher at University
                    </option>
                    <option value="Institute Admin
                    "  >Institute Admin
                    </option>
                </select>
            </div>

            <div>
                <label htmlFor='service'>Do you need a Custom Web Development Service?
                    <sup>*</sup></label>
                <select name="" id="service" className='mt-2  w-11/12 lg:w-full  block rounded-sm px-2 py-1 ring-1 ring-gray-400'>
                    <option value=""> </option>
                    <option value="Yes (Included in our plan)"  >Yes (Included in our plan)
                    </option>
                    <option value="No"  >No</option>
                </select>
            </div>

            <div>
                <label htmlFor='use'>What do you want to use EZ Colab for?
                    <sup>*</sup></label>
                <select name="" id="use" className='mt-2  w-11/12 lg:w-full  block rounded-sm px-2 py-1 ring-1 ring-gray-400'>
                    <option value=""> </option>
                    <option value="Online Course">Online Course</option>
                    <option value="Coaching">Coaching</option>
                    <option value="Template business">Template business          </option>
                </select>
            </div>
            <div className='px-2 w-full'>
                <Link to='/calendar'>
                    <button type='submit' className='text-white w-full rounded-full px-4 py-2' style={{ background: '#df7324' }}>
                        Schedule a demo
                    </button>
                </Link>
            </div>
        </form>
    )
}

export default DemoRight
