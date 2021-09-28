import React, { lazy } from 'react'
// import HomeBenefits from '../components/Home/HomeBenefits';
// import Header from '../components/Home/HomeHeader';
// import NavbarHeader from '../components/NavbarHeader';
// import HomeVideo from '../components/Home/HomeVideo';
// import HomeTestimonials from '../components/Home/HomeTestimonials';
// import LearningFun from '../components/Home/LearningFun';
// import Loader from '../components/Loader';
import useLoader from '../components/useLoader';
import { Helmet } from 'react-helmet';

const HomeBenefits = lazy(() => import('../components/Home/HomeBenefits'));
const Header = lazy(() => import('../components/Home/HomeHeader'));
const HomeVideo = lazy(() => import('../components/Home/HomeVideo'));
const HomeTestimonials = lazy(() => import('../components/Home/HomeTestimonials'));
const LearningFun = lazy(() => import('../components/Home/LearningFun'));

const NavbarHeader = lazy(() => import('../components/NavbarHeader'));
const Loader = lazy(() => import('../components/Loader'));


function Home() {

    const loading = useLoader()

    return (
        <>
            <Helmet>
                <title>
                    Launch your online course &amp; coaching in 7 days with EZ Colab
                </title>
                <meta name="robots" content="index, follow" />
                <meta
                    content="Easily create &amp; sell your own online course and coaching service with EZ Colab! We create  converting websites &amp; help you launch in 7 days. Book a demo now."
                    name="description"
                />
                <meta
                    content="Launch your online course &amp; coaching in 7 days with EZ Colab"
                    property="og:title"
                />
                <meta
                    content="Easily create &amp; sell your own online course and coaching service with EZ Colab! We create  converting websites &amp; help you launch in 7 days. Book a demo now."
                    property="og:description"
                />

                {
                    /**
                      <meta
                    content="https://assets-global.website-files.com/5db0d55a083f4b7cd59d2e42/5e267002496ea060c914a34b_facebook_share.png"
                    property="og:image"
                />
                     */
                }
                <meta
                    content="Launch your online course &amp; coaching in 7 days with EZ Colab"
                    property="twitter:title"
                />
                <meta
                    content="Easily create &amp; sell your own online course and coaching service with EZ Colab! We create  converting websites &amp; help you launch in 7 days. Book a demo now."
                    property="twitter:description"
                />
                {
                    /**
                     <meta
                    content="https://assets-global.website-files.com/5db0d55a083f4b7cd59d2e42/5e267002496ea060c914a34b_facebook_share.png"
                    property="twitter:image"
                /> 
                     */
                }

                <meta property="og:type" content="website" />
            </Helmet>
            {
                loading ? (
                    <Loader loading={loading} />
                ) : (
                    <>
                        <div
                        >
                            <NavbarHeader />
                            <Header />
                        </div>
                        <div className="container mx-auto">
                            <HomeVideo />
                            <HomeBenefits />
                            <HomeTestimonials />
                        </div>
                        <LearningFun />
                    </>
                )
            }
        </>
    )
}

export default Home
