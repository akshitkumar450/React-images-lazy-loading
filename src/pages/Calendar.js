// import NavbarHeader from '../components/NavbarHeader';
import ScriptTag from 'react-script-tag';
import { lazy } from 'react';

const NavbarHeader = lazy(() => import('../components/NavbarHeader'));

function Calendar() {
    return (
        <>
            <div style={{ background: "url('images/background.png')" }}>
                <NavbarHeader bgWhite={true} />
                <div className="max-w-6xl mx-auto mt-24 pt-10">
                    <div className="container">
                        <div
                            className="calendly-inline-widget lightbox-basic zoom-anim-dialog mfp-hide"
                            id="tidycal-embed"
                            data-path="ezcolab/ez-colab-demo-call"
                            style={{ width: "95%", height: "600px", paddingRight: "10vw", paddingLeft: "10vw" }}
                        ></div>
                        <ScriptTag src="https://asset-tidycal.b-cdn.net//js/embed.js" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calendar