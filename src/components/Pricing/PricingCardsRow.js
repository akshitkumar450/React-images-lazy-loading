import React from 'react'
import PricingCard from './PricingCard'

function PricingCardsRow() {
    return (
        <>
            <div className='text-center py-6'>
                <h2 style={{ color: " #0762bb" }} className='text-3xl font-semibold'>Add ons for your account</h2>
                <p className=''>
                    Get more done for you and your students.
                </p>
            </div>

            <div className='grid px-8 lg:px-0 lg:grid-cols-3 max-w-4xl mx-auto lg:gap-x-6'>
                <PricingCard
                    blue={true}
                    heading='Additional Instructor'
                    text='More instructors can now collaborate and communicate with students'
                    list1='One instructor'
                    list2='Additional 10 GB storage'
                    list3='Free 5 student licenses'
                    list4='One additional Master Group with Unlimited Minor Groups'
                />
                <PricingCard
                    heading='Additional Instructor'
                    text='More instructors can now collaborate and communicate with students'
                    list1='Digital Suggestion Portal'
                    list2='Course Feedback Portal'
                    list3='Additional 10 GB storage'
                    list4='Free phone support '
                />
                <PricingCard
                    blue={true}
                    heading='Additional Instructor'
                    text='More instructors can now collaborate and communicate with students'
                    list1='Digital Suggestion Portal'
                    list2='Course Feedback Portal'
                    list3='Additional 10 GB storage'
                    list4='Free phone support '
                />
            </div>
        </>
    )
}

export default PricingCardsRow
