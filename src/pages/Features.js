import React, { lazy } from 'react'
import NavbarHeader from '../components/NavbarHeader';
import FeatureHeader from '../components/Features/FeatureHeader';
import FeaturesRows from '../components/Features/FeaturesRows';
import FeatureBanner from '../components/Features/FeatureBanner';
import Loader from '../components/Loader';
import useLoader from '../components/useLoader';
import { Helmet } from "react-helmet";

// const FeatureHeader = lazy(() => import('../components/Features/FeatureHeader'));
// const FeaturesRows = lazy(() => import('../components/Features/FeaturesRows'));
// const FeatureBanner = lazy(() => import('../components/Features/FeatureBanner'));

// const NavbarHeader = lazy(() => import('../components/NavbarHeader'));
// const Loader = lazy(() => import('../components/Loader'));

function Features() {

    const loading = useLoader()

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    EZ Colab: Features to help you scale your online course quickly
                </title>
                <meta name="robots" content="index, follow" />
                <meta
                    content="EZ Colab has everything you need to grow your online knowledge business, using our advanced course builder, marketing &amp; sales suite and custom web services."
                    name="description"
                />
                <meta
                    content=" EZ Colab: Features to help you scale your online course quickly"
                    property="og:title"
                />
                <meta
                    content="EZ Colab has everything you need to grow your online knowledge business, using our advanced course builder, marketing &amp; sales suite and custom web services."
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
                    content=" EZ Colab: Features to help you scale your online course quickly"
                    property="twitter:title"
                />
                <meta
                    content="EZ Colab has everything you need to grow your online knowledge business, using our advanced course builder, marketing &amp; sales suite and custom web services."
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
                            <FeatureHeader />
                        </div>
                        <div className=" mx-auto px-2 lg:px-0">
                            <FeaturesRows />
                        </div>
                        <FeatureBanner />
                    </>
                )
            }
        </>
    )
}

export default Features
