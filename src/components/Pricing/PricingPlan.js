import React, { Fragment } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './PricingPlan.module.css'
import { collaboratorListItems, ezCreatorList, createrListItems } from './PricingPlanListData'

function PricingPlan() {
    const [show, setShow] = useState(true)

    function renderList(listName) {
        return (
            <Fragment>
                {
                    listName.map((list, index) => {
                        return (
                            <li key={index}>
                                <i className={`fas fa-check mr-2 text-blue-600`}></i>{list}
                            </li>
                        )
                    })
                }
            </Fragment>
        )
    }

    return (
        <>
            <div className={styles.pricingPlan__type}>
                <h5
                    className={`${show ? styles.pricingPlan__monthly : styles.pricingPlan__annual}  transition-all duration-200`}
                    onClick={() => setShow(true)}
                    style={{
                        backgroundColor: show ? '#2563EB' : '#fff'
                    }}
                >
                    Monthly
                </h5>

                <h5
                    className={`${show ? styles.pricingPlan__annual : styles.pricingPlan__monthly} transition-all duration-200`}
                    onClick={() => setShow(false)}
                    style={{
                        backgroundColor: show ? '#fff' : '#2563EB'
                    }}
                >
                    Annual
                </h5>
            </div>

            <div className="container mx-auto mt-20 px-3 lg:p-0">
                <div className={`${styles.pricingPlan__prices} lg:grid grid-cols-3 lg:gap-x-3 justify-center`}>
                    <Fragment>
                        {
                            show ? (
                                <Fragment>
                                    <div className="col-span-1 bg-white pt-7 pb-2 px-2">
                                        <h5 className='text-center'>Collaborator</h5>
                                        <div className='border-b-2 border-blue-400 my-5 ' />
                                        <h1 className='text-center text-4xl' style={{ color: '#333A5F' }}>$29/mo </h1>
                                        {
                                            show && <h1 className='text-center mt-5 text-blue-600 font-semibold text-xl'>Best for Community Building and Collaborating</h1>
                                        }
                                        <a href="https://buy.stripe.com/3csaFW57K4FT1MscMN"
                                            target='_blank' rel="noreferrer" className={styles.pricingPlan__btn}>
                                            <div className={`cursor-pointer bg-blue-600 rounded-md py-4 w-4/5 mt-10 lg:mt-32 mx-auto px-2 text-center`} >
                                                Buy Now
                                            </div>
                                        </a>

                                        <ul className="text-left mt-12 space-y-3">
                                            {
                                                renderList(collaboratorListItems)
                                            }
                                        </ul>
                                    </div>

                                    <div className="col-span-1 bg-white pt-7 pb-2 px-2">
                                        <h5 className='text-center'>Creator</h5>
                                        <div className='border-b-2 border-blue-400 my-5 ' />
                                        <h1 className='text-center text-4xl' style={{ color: '#333A5F' }}>$149/mo</h1>
                                        {
                                            show && <h1 className='text-center mt-5 text-blue-600 font-semibold text-xl'>Best for DIY Creators with minimal coding experience</h1>
                                        }

                                        <a href="https://buy.stripe.com/6oEg0g8jW8W91Ms5ko" target='_blank' rel="noreferrer" className={styles.pricingPlan__btn}>
                                            <div className={`cursor-pointer bg-blue-600 rounded-md py-4 w-4/5 mt-10 lg:mt-32 mx-auto px-2 text-center`} >
                                                Buy Now
                                            </div>
                                        </a>

                                        <ul className="text-left mt-12 space-y-3">
                                            {
                                                renderList(createrListItems)
                                            }
                                        </ul>
                                    </div>

                                    <div className="relative overflow-hidden col-span-1 bg-blue-100 pt-7 pb-2 px-2">
                                        <h5 className='text-center'>EZ Creator</h5>
                                        <div className='border-b-2 border-blue-400 my-5 ' />
                                        <h1 className='text-center text-4xl' style={{ color: '#333A5F' }}>$299/mo </h1>
                                        {
                                            show && <h1 className='text-center mt-5 text-blue-600 font-semibold text-xl'>Best for Non Technical Creators with custom services</h1>
                                        }

                                        <Link to='/demo' target='_blank' className={styles.pricingPlan__btn}>
                                            <div className={`cursor-pointer bg-blue-600 rounded-md py-4 w-4/5 mt-10 lg:mt-32 mx-auto px-2 text-center`} >
                                                Get started
                                            </div>
                                        </Link>


                                        <ul className="text-left mt-12 space-y-3">
                                            {
                                                renderList(ezCreatorList)
                                            }
                                        </ul>
                                        <div>
                                            <h1 className='absolute top-10 -right-9 transform rotate-45  px-6 text-xl bg-blue-600 text-white inline-block'>Most Popular</h1>
                                        </div>
                                    </div>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <div className="col-span-1 bg-white pt-7 pb-2 px-2">
                                        <h5 className='text-center' >Collaborator</h5>

                                        <div className='border-b-2 border-blue-400 my-5 ' />
                                        <h1 className='text-center text-3xl' style={{ color: '#333A5F' }}> $24/mo  (billed annually)</h1>

                                        {
                                            !show && <h1 className='text-blue-600 font-semibold text-xl text-center mt-5'>2 months free</h1>
                                        }

                                        <a href="https://buy.stripe.com/3cs4hy8jWfkx0Io7sx" target='_blank' rel="noreferrer" className={styles.pricingPlan__btn}
                                        >
                                            <div className={`cursor-pointer bg-blue-600 rounded-md py-4 w-4/5 mt-10 lg:mt-32 mx-auto px-2 text-center`} >
                                                Buy Now
                                            </div>
                                        </a>

                                        <ul className="text-left mt-12 space-y-3">
                                            {
                                                renderList(collaboratorListItems)
                                            }
                                        </ul>
                                    </div>

                                    <div className="col-span-1 bg-white pt-7 pb-2 px-2">
                                        <h5 className='text-center'>Creator</h5>
                                        <div className='border-b-2 border-blue-400 my-5 ' />
                                        <h1 className='text-center text-3xl' style={{ color: '#333A5F' }}>124$/mo (billed annually)</h1>
                                        {!show && <h1 className='text-blue-600 font-semibold text-xl text-center mt-5'>2 months free</h1>}

                                        <a href="https://buy.stripe.com/8wM15m9o02xL2QwdQW" target='_blank' rel="noreferrer" className={styles.pricingPlan__btn}
                                        >
                                            <div className={`cursor-pointer bg-blue-600 rounded-md py-4 w-4/5 mt-10 lg:mt-32 mx-auto px-2 text-center`} >
                                                Buy Now
                                            </div>
                                        </a>

                                        <ul className="text-left mt-12 space-y-3">
                                            {
                                                renderList(createrListItems)
                                            }
                                        </ul>

                                    </div>

                                    <div className="relative overflow-hidden col-span-1 bg-blue-100 pt-7 pb-2 px-2">
                                        <h5 className='text-center'>EZ Creator</h5>
                                        <div className='border-b-2 border-blue-400 my-5 ' />
                                        <h1 className='text-center text-3xl' style={{ color: '#333A5F' }}>249$/mo (billed annually)</h1>
                                        {!show && <h1 className='text-blue-600 font-semibold text-xl text-center mt-5'>2 months free</h1>}

                                        <Link to='/demo' target='_blank' className={styles.pricingPlan__btn}>
                                            <div className={`cursor-pointer bg-blue-600 rounded-md py-4 w-4/5 mt-10 lg:mt-32 mx-auto px-2 text-center`} >
                                                Get started
                                            </div>
                                        </Link>
                                        <ul className="text-left mt-12 space-y-3">
                                            {
                                                renderList(ezCreatorList)
                                            }
                                        </ul>
                                        <div>
                                            <h1 className='absolute top-10 -right-9 transform rotate-45  px-6 text-xl bg-blue-600 text-white inline-block'>Most Popular</h1>
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        }
                    </Fragment>
                </div>
            </div>
        </>
    )
}

export default PricingPlan
