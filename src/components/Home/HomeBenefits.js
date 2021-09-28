import Row from './Row'
import homeEngage from '../../assets/home-engage.png'
import homeMobileSide from '../../assets/home-Always-stay-connected.png'
import homeNoCoding from '../../assets/home-no-coding.png'
import homeAnalytics from '../../assets/home-analytics.png'
import homeHosting from '../../assets/home-fast-secure-hosting.png'
import playstore from '../../assets/home-playstore.png'
import apple from '../../assets/home-apple.png'

function HomeBenefits() {
    const logos = [
        playstore, apple
    ];
    return (
        <div>
            <Row
                src={homeEngage}
                heading='Build Stronger Engaging Communities'
                text=' A Powerful collaboration platform that enables seamless communication
                and interaction with you and your students.'
                btn={true}
            />
            <Row
                first={true}
                src={homeMobileSide}
                heading='Always stay connected'
                text=' Take your community everywhere with our full-fledged mobile
                application for both iOS and Android. A blazing fast app to keep up
                with your speed.'
                mobileLogo={logos}
                btn={true}
            />
            <Row
                src={homeNoCoding}
                heading='Websites Personalized for You'
                text='Get beautiful interactive websites to sell your course
                designed by our creators and coders. Your Website, Imagined by you, created by
                us.'
                btn={true}
            />
            <Row
                first={true}
                src={homeAnalytics}
                heading='Make Smarter Decisions'
                text='Get custom analytics for your institute , marketing and sales. See
                how you can boost your  online course in real time.'
                btn={true}
            />
            <Row
                src={homeHosting}
                heading='Fast and Secure Hosting'
                text="No more storage add ons for your content. Just fast and secure
                storage.  And it's unlimited!"
                btn={true}
            />
        </div>
    )
}

export default HomeBenefits
