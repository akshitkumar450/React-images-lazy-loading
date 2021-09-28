import React from 'react'
import ServicesFeature from './ServicesFeature'
import webdesign from '../../assets/services-webdesign.png'
import onboarding from '../../assets/services-onboarding.png'
import profit from '../../assets/services-profit.png'
import delivery from '../../assets/services-delivery.png'
import humanity from '../../assets/services-humanity.png'
import websites from '../../assets/services-websites.png'

function ServicesBenefits() {
    return (
        <div className='px-2 max-w-6xl mx-auto lg:px-0 lg:grid grid-cols-3 gap-x-2'>
            <ServicesFeature
                src={onboarding}
                benefits={true}
                heading='Done-for-you On-boarding'
                text='Sit back and relax while we set up your entire institute and get it running.'
            />
            <ServicesFeature
                benefits={true}
                src={profit}
                heading='Marketing made easy'
                text='Landing pages created for you to help you market your course and get more sales'
            />
            <ServicesFeature
                benefits={true}
                src={delivery}
                heading='Reliable & Fast delivery'
                text='Get your website up and running within 7 days.'
            />
            <ServicesFeature
                benefits={true}
                src={humanity}
                heading='Friendly Human Support'
                text="Just because we work remotely, doesn't mean we treat you like a stranger "
            />
            <ServicesFeature
                benefits={true}
                src={webdesign}
                heading='Design changes'
                text=' Get your website design & changes done in 1-2 business days, by our professional designers'
            />
            <ServicesFeature
                benefits={true}
                src={websites}
                heading='Website ownership'
                text="Your data is yours! Everything we do for you is owned by YOU!*"
            />
        </div>
    )
}

export default ServicesBenefits
