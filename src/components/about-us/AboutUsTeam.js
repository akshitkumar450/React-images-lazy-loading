import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Team1 from '../../assets/aboutus-team-1.png'
import Team2 from '../../assets/aboutus-team-2.png'
import Team3 from '../../assets/aboutus-team-3.png'
import Team4 from '../../assets/aboutus-team-4.png'
import Team5 from '../../assets/aboutus-team-5.png'

function AboutUsTeam() {
    const TeamImages = [
        Team1, Team2, Team3, Team4, Team5
    ]
    return (
        <div className='mb-10'>
            <div className='text-center' >
                <h3 className='text font-semibold lg:text-xl' style={{ color: '#0762bb' }}>Our Team</h3>
                <h1 style={{ color: '#2A3158' }} className='text-3xl lg:text-4xl font-semibold'>lets meet our team</h1>
            </div>
            <div className='place-items-center grid lg:flex mt-20 justify-around text-center'>
                {
                    TeamImages.map((img, idx) => {
                        return (
                            <div key={idx} className='mb-4 lg:mb-0'>
                                <LazyLoadImage effect="opacity" src={img} className='object-contain' alt="aboutus-teams" />
                                <h2 style={{ color: '#2A3158' }} className='text-2sxl lg:text-3xl font-semibold'>{`Team ${idx + 1}`} </h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AboutUsTeam
