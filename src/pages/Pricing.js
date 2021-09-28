import React, { lazy } from 'react'
// import NavbarHeader from '../components/NavbarHeader';
// import PricingForm from '../components/Pricing/PricingForm';
// import PricingHeader from '../components/Pricing/PricingHeader';
// import PricingPlan from '../components/Pricing/PricingPlan';
// import Loader from '../components/Loader';
// import FAQs from '../components/Pricing/PricingFAQs';
import useLoader from '../components/useLoader';
import { Helmet } from 'react-helmet';

const PricingForm = lazy(() => import('../components/Pricing/PricingForm'));
const PricingHeader = lazy(() => import('../components/Pricing/PricingHeader'));
const PricingPlan = lazy(() => import('../components/Pricing/PricingPlan'));
const FAQs = lazy(() => import('../components/Pricing/PricingFAQs'));

const NavbarHeader = lazy(() => import('../components/NavbarHeader'));
const Loader = lazy(() => import('../components/Loader'));

function Pricing() {
    const loading = useLoader()
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    EZ Colab | 30 day money back guarantee
                </title>
                <meta name="robots" content="index, follow" />
                <meta
                    content="Simple, transparent and affordable pricing made for all. Get unlimited students & top notch features at an unbelievable price today!"
                    name="description"
                />
                <meta
                    content="EZ Colab | 30 day money back guarantee"
                    property="og:title"
                />
                <meta
                    content="Simple, transparent and affordable pricing made for all. Get unlimited students & top notch features at an unbelievable price today!"
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
                    content="EZ Colab | 30 day money back guarantee"
                    property="twitter:title"
                />
                <meta
                    content="Simple, transparent and affordable pricing made for all. Get unlimited students & top notch features at an unbelievable price today!"
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
                                background: "url('/images/pricing-bg.png')", backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center'
                            }}
                        >
                            <NavbarHeader />
                            <PricingHeader />
                        </div>
                        <div className="container mx-auto">
                            <PricingPlan />
                            <PricingForm />
                            <FAQs />
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Pricing
