import React from 'react'

function PricingCard({ blue, heading, text, list1, list2, list3, list4 }) {
    return (
        <>
            <div className={` mb-10 rounded px-2 py-2 bg-white ring-1 ring-gray-300 shadow-lg ${blue && 'bg-blue-100'}`} >
                <div className="card-body">
                    <div className=" text-left p-1">
                        <p className='text-2xl mb-1 text-gray-600'>
                            {heading}
                        </p>
                        <p className='text-sm text-gray-600'>
                            {text}
                        </p>
                        <div className=" my-6 flex items-baseline">
                            <div >
                                <p className="text-black mr-2 text-4xl">$ 49</p>
                            </div>
                            <p className='text-gray-500 text-sm'>life time</p>
                        </div>
                    </div>

                    <ul
                        style={{ minHeight: "150px" }}
                    >
                        <li className='flex justify-start items-start'>
                            <div>
                                <i className="fas fa-square transform rotate-45 text-xs" style={{ color: '#0762bb' }}></i>
                            </div>
                            <p className='ml-3 text-md text-gray-600'>{list1}</p>
                        </li>
                        <li className='flex justify-start items-start'>
                            <div>
                                <i className="fas fa-square transform rotate-45 text-xs" style={{ color: '#0762bb' }}></i>
                            </div>
                            <p className='ml-3 text-md text-gray-600'>{list2}</p>
                        </li>
                        <li className='flex justify-start items-start'>
                            <div>
                                <i className="fas fa-square transform rotate-45 text-xs" style={{ color: '#0762bb' }}></i>
                            </div>
                            <p className='ml-3 text-md text-gray-600'>{list3}</p>
                        </li>
                        <li className='flex justify-start items-start'>
                            <div>
                                <i className="fas fa-square transform rotate-45 text-xs" style={{ color: '#0762bb' }}></i>
                            </div>
                            <p className='ml-3 text-md text-gray-600'>
                                {list4}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PricingCard
