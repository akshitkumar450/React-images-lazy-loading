import React, { lazy } from 'react';
// import NavbarHeader from '../components/NavbarHeader';
// import DemoLeft from '../components/Demo/DemoLeft';
// import DemoRight from '../components/Demo/DemoRight';
// import Loader from '../components/Loader';
import useLoader from '../components/useLoader';
import { Helmet } from 'react-helmet';

const NavbarHeader = lazy(() => import('../components/NavbarHeader'));
const DemoLeft = lazy(() => import('../components/Demo/DemoLeft'));
const DemoRight = lazy(() => import('../components/Demo/DemoRight'));
const Loader = lazy(() => import('../components/Loader'));

function Demo() {

    const loading = useLoader()

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    EZ Colab | Book a demo now!
                </title>
                <meta name="robots" content="index, follow" />
                <meta
                    content="Get help with launching & scaling your online course and coaching by booking a free demo today!"
                    name="description"
                />
                <meta
                    content="EZ Colab | Book a demo now!"
                    property="og:title"
                />
                <meta
                    content="Get help with launching & scaling your online course and coaching by booking a free demo today!"
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
                    content="EZ Colab | Book a demo now!"
                    property="twitter:title"
                />
                <meta
                    content="Get help with launching & scaling your online course and coaching by booking a free demo today!"
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
                    <div
                        style={{
                            backgroundImage: "linear-gradient(#E0EFFF,#EFF5FC)",
                        }}>
                        <NavbarHeader />
                        <div className="max-w-6xl mx-auto pt-28 lg:grid grid-cols-2 mb-32">
                            <div className='px-3 lg:px-0'>
                                <DemoLeft />
                            </div>
                            <div className='px-3 lg:px-0'>
                                <DemoRight />
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default Demo
