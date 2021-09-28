import React, { lazy } from 'react'
// import Loader from '../components/Loader';
import useLoader from '../components/useLoader';
// import NavbarHeader from '../components/NavbarHeader';
// import AboutUsHeader from '../components/about-us/AboutUsHeader';
// import AboutUsTeam from '../components/about-us/AboutUsTeam';
// import AboutsUsExecutives from '../components/about-us/AboutsUsExecutives';
// import AboutUsText from '../components/about-us/AboutUsText';
// import AboutUsHelp from '../components/about-us/AboutUsHelp';

const AboutUsHeader = lazy(() => import('../components/about-us/AboutUsHeader'));
const AboutUsTeam = lazy(() => import('../components/about-us/AboutUsTeam'));
const AboutsUsExecutives = lazy(() => import('../components/about-us/AboutsUsExecutives'));
const AboutUsText = lazy(() => import('../components/about-us/AboutUsText'));
const AboutUsHelp = lazy(() => import('../components/about-us/AboutUsHelp'));

const NavbarHeader = lazy(() => import('../components/NavbarHeader'));
const Loader = lazy(() => import('../components/Loader'));

function AboutUs() {
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
                                background: "url('images/background.png')",
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}
                        >
                            <NavbarHeader />
                            <AboutUsHeader />
                        </div>
                        <div className="container mx-auto">
                            <AboutUsHelp />
                            <AboutUsText />
                            <AboutsUsExecutives />
                            <AboutUsTeam />
                        </div>
                    </>
                )
            }
        </>
    )
}

export default AboutUs
