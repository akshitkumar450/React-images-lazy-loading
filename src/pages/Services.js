import React, { lazy } from 'react'
// import NavbarHeader from '../components/NavbarHeader';
// import ServicesBenefits from '../components/Services/ServicesBenefits';
// import ServicesFeatureSec from '../components/Services/ServicesFeatureSec';
// import ServicesFeaturesRow from '../components/Services/ServicesFeaturesRow';
// import ServicesHeader from '../components/Services/ServicesHeader';
// import ServicesRows from '../components/Services/ServicesRows';
// import Loader from '../components/Loader';
// import ServicesAboveFooter from '../components/Services/ServicesAboveFooter';
import useLoader from '../components/useLoader';
import { Helmet } from 'react-helmet';

const ServicesBenefits = lazy(() => import('../components/Services/ServicesBenefits'));
const ServicesFeatureSec = lazy(() => import('../components/Services/ServicesFeatureSec'));
const ServicesFeaturesRow = lazy(() => import('../components/Services/ServicesFeaturesRow'));
const ServicesHeader = lazy(() => import('../components/Services/ServicesHeader'));
const ServicesRows = lazy(() => import('../components/Services/ServicesRows'));
const ServicesAboveFooter = lazy(() => import('../components/Services/ServicesAboveFooter'));

const NavbarHeader = lazy(() => import('../components/NavbarHeader'));
const Loader = lazy(() => import('../components/Loader'));

function Services() {
    const loading = useLoader()
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    EZ Colab | Custom Web Services and Onboarding
                </title>
                <meta name="robots" content="index, follow" />
                <meta
                    content="Get a mini team working for you to help launch your knowledge business faster."
                    name="description"
                />
                <meta
                    content=" EZ Colab | Custom Web Services and Onboarding"
                    property="og:title"
                />
                <meta
                    content="Get a mini team working for you to help launch your knowledge business faster."
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
                    content=" EZ Colab | Custom Web Services and Onboarding"
                    property="twitter:title"
                />
                <meta
                    content="Get a mini team working for you to help launch your knowledge business faster."
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
                            style={{
                                backgroundImage: "linear-gradient(#E0EFFF,#EFF5FC)",
                            }}
                        >
                            <NavbarHeader />
                            <ServicesHeader />
                        </div>
                        <div className="container mx-auto">
                            <ServicesFeaturesRow />
                            <ServicesRows />
                            <ServicesBenefits />
                            <ServicesFeatureSec />
                        </div>
                        <ServicesAboveFooter />
                    </>
                )
            }
        </>
    )
}

export default Services
