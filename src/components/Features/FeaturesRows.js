import React from 'react'
import FeatureRow from './FeatureRow'
import master from '../../assets/feature-master-groups.png'
import minor from '../../assets/feature-minor-groups.png'
import ExampleForMinor from '../../assets/feature-example-for-minor-groups.png'
import contentsharing from '../../assets/feature-content-sharing.png'
import DigitisedSuggestionPortal from '../../assets/feature-digitised-Suggestion-Portal.png'
import knowledge from '../../assets/feature-knowledge-base.png'
import feedback from '../../assets/feature-feedback-portal.png'
import gamified from '../../assets/feature-gamified.png'
import eventManagement from '../../assets/feature-event-management.png'
import whiteLabel from '../../assets/feature-white-label.png'
import wearenotdoneyet from '../../assets/feature-we-are-not-done-yet.png'
import leadGeneration from '../../assets/feature-lead-generation.png'
import liveClasses from '../../assets/feature-live-classes.png'
import courseBuilder from '../../assets/feature-course-builder.png'
import Phone from '../../assets/feature-phone.png'
import office from '../../assets/feature-office.png'
import feature1 from '../../assets/feature-icon-1.png'
import feature2 from '../../assets/feature-icon-2.png'
import feature3 from '../../assets/feature-icon-3.png'
import feature4 from '../../assets/feature-icon-4.png'
import feature6 from '../../assets/feature-icon-6.png'
import feature7 from '../../assets/feature-icon-7.png'
import feature8 from '../../assets/feature-icon-8.png'
import feature9 from '../../assets/feature-icon-9.png'
import feature10 from '../../assets/feature-icon-10.png'
import feature11 from '../../assets/feature-icon-11.png'
import feature12 from '../../assets/feature-icon-12.png'
import feature13 from '../../assets/feature-icon-13.png'
import feature14 from '../../assets/feature-icon-14.png'
import feature15 from '../../assets/feature-icon-15.png'
import feature16 from '../../assets/feature-icon-16.png'
import feature17 from '../../assets/feature-icon-17.png'
import feature18 from '../../assets/feature-icon-18.png'
import feature19 from '../../assets/feature-icon-19.png'
import feature20 from '../../assets/feature-icon-20.png'
import feature21 from '../../assets/feature-icon-21.png'
import feature22 from '../../assets/feature-icon-22.png'
import feature23 from '../../assets/feature-icon-23.png'
import feature24 from '../../assets/feature-icon-24.png'
import feature25 from '../../assets/feature-icon-25.png'
import feature26 from '../../assets/feature-icon-26.png'
import feature27 from '../../assets/feature-icon-27.png'
import feature28 from '../../assets/feature-icon-28.png'
import feature29 from '../../assets/feature-icon-29.png'
import feature30 from '../../assets/feature-icon-30.png'
import feature31 from '../../assets/feature-icon-31.png'
import feature32 from '../../assets/feature-icon-32.png'
import feature33 from '../../assets/feature-icon-33.png'
import feature34 from '../../assets/feature-icon-34.png'
import feature35 from '../../assets/feature-icon-35.png'
import feature36 from '../../assets/feature-icon-36.png'
import feature37 from '../../assets/feature-icon-37.png'
import feature38 from '../../assets/feature-icon-38.png'
import feature39 from '../../assets/feature-icon-39.png'
import feature40 from '../../assets/feature-icon-40.png'
import feature41 from '../../assets/feature-icon-41.png'
import feature42 from '../../assets/feature-icon-42.png'
function FeaturesRow() {
    return (
        <div>
            <FeatureRow
                src={courseBuilder}
                mainheading='Course Builder'
                maintext='Hassle free course creation'
                headPri='Module Creation'
                textPri='Create unlimited modules and sub-modules and organise your course.'
                headSec="Drip Content"
                textSec='Control the schedule of your course content so that students systematically access content.'
                headTer='Notes'
                textTer='Take down notes on our built-in scratch pad while viewing video content simultaneously.'
                headQuat='Assignments & Quizzes'
                textQuat='Assess students with marked assignments, timed, quizzes and easily provide feedback'
                feature1={feature1}
                feature2={feature2}
                feature3={feature3}
                feature4={feature4}
            />
            <FeatureRow
                first={true}
                src={liveClasses}
                mainheading='Live classes & webinars'
                headPri='Dedicated Portal'
                textPri='Conduct unlimited live classes & webinars for all students or a sub-set of students.'
                headSec="Integrations"
                textSec='Conduct live classes with Zoom.'
                feature1={feature6}
                feature2={feature7}

            />
            <FeatureRow
                src={leadGeneration}
                mainheading='Lead generation & marketing'
                headPri='CRM API'
                textPri='Install our custom API and easily manage all your leads'
                headSec="Email marketing"
                textSec='Send updates, newsletters and much more with our in-built marketing suite'
                headTer='Email editor & template creator'
                textTer='Create beautiful custom emails with our email editor or use one of our readily available templates.'
                feature1={feature8}
                feature2={feature9}
                feature3={feature10}

            />

            <FeatureRow
                first={true}
                src={office}
                mainheading='Office hours'
                maintext='Organize your key documents in one place & make it accessbile at any time'
                headPri='Student booking'
                textPri='Allow Students to easily book one-on-one sessions or office hour sessions with instructors and admins'
                headSec="Integrations"
                textSec='Use calendly, tidyCal & more to automate booking and get notified'
                feature1={feature42}
                feature2={feature41}

            />
            <FeatureRow
                src={Phone}
                mainheading='Social media content scheduler'
                headPri='Plan'
                textPri='Plan your content for Facebook, Instagram, Twitter, and Linkedin from one simple calendar'
                headSec="Draft"
                textSec='Draft your posts in advance for all  social media platforms'
                headTer='Publish'
                textTer='Schedule and publish your content at just the right time'
                feature1={feature40}
                feature2={feature39}
                feature3={feature38}
            />
            <FeatureRow
                first={true}
                src={whiteLabel}
                mainheading='White Label'
                headPri='Custom Branding'
                textPri='Style your online academy to best suit your course'
                headSec="Mobile appliaction (coming soon)"
                textSec='Get your own white labelled mobile application for iOS and andriod'
                feature1={feature11}
                feature2={feature12}

            />
            <FeatureRow
                src={master}
                mainheading='Master Groups'
                maintext='Institute Admin can create up to 10 Master Groups.'
                headPri='Easy Organisation'
                textPri='Organise all activities in your institute under any Master Group'
                headSec="Pre-Enabled Master Groups "
                textSec='We have some pre-enabled Master groups to simplify all your use cases '
                feature1={feature13}
                feature2={feature14}

            />
            <FeatureRow
                first={true}
                src={minor}
                mainheading='Minor Groups '
                maintext='Admin and Instructors can create Minor Groups.'
                headPri='Group Types'
                textPri='Create public groups for every event and private groups for every student course.'
                headSec="Unlimited Groups "
                textSec='Under any Master group, create unlimited minor groups of any type. '
                headTer='Group guidelines '
                textTer='Optional setup of rules and regulations for easy communication. '
                feature1={feature15}
                feature2={feature16}
                feature3={feature17}
            />
            <FeatureRow
                src={ExampleForMinor}
                mainheading='Examples for minor groups'
                maintext={`Modules within a course, student groups, Mentor - Mentee groups and more (customize to your creativity)`}
                headPri='Minor Groups'
                textPri='Minor Groups are created to structure your course content in a well organized manner.'
                feature1={feature13}
            />

            <FeatureRow
                first={true}
                src={contentsharing}
                mainheading='Content Sharing'
                maintext='Share queries and thoughts with all types of files, images, audio, links, code and even embed videos.'
                headPri='Posts '
                textPri='Ability to like and comment to manage all thoughts in the same post  '
                headSec="Notes"
                textSec='Quick sharing without any comments.'
                headTer='Polls'
                textTer='Easily create polls, with multiple options.'
                feature1={feature18}
                feature2={feature19}
                feature3={feature20}

            />
            <FeatureRow
                src={DigitisedSuggestionPortal}
                mainheading='Digitised Suggestion Portal'
                maintext='Administration can easily resolve all concerns and consider new suggestions with effective collaboration.'
                headPri='Group Types'
                textPri='Create public groups for every event and private groups for every student course. '
                headSec="Unlimited Groups"
                textSec='Under any Master group, create unlimited minor groups of any type.'
                headTer='Group guidelines'
                textTer='Optional setup of rules and regulations for easy communication. '
                feature1={feature21}
                feature2={feature22}
                feature3={feature23}
            />
            <FeatureRow
                first={true}
                src={eventManagement}
                mainheading='Event Management Portal '
                maintext='One stop place for your entire institute to manage all events and activities. Event types'
                headPri='Personal'
                textPri='All members can create Personal events'
                headSec="Course/Group level"
                textSec='All instructors can create course/group level events and activities'
                headTer='Institute level'
                textTer='Admin can create institute level events and activities'
                feature1={feature24}
                feature2={feature25}
                feature3={feature26}
            />
            <FeatureRow
                src={feedback}
                mainheading='Feedback Portal '
                maintext='Helps admin and instructors receive constructive feedback about all courses and groups.'
                headPri='Courses  '
                textPri='Students can take guided decisions about future courses'
                headSec="Events and Activities"
                textSec='Helps administration recieve feedback on events and activities happening in the institute'
                feature1={feature27}
                feature2={feature28}

            />
            <FeatureRow
                first={true}
                src={gamified}
                mainheading='Gamified learning  '
                maintext='Make learning fun with gamification.'
                headPri='Badges'
                textPri=' Pre-enabled badges to help you get started with
                gamification and award your students with custom
                badges.'
                headSec="Leaderboard"
                textSec=' Weekly &#38; monthly leaderboards to build a
                competitive spirit in your students.'
                headTer='Show off badges'
                textTer='Students can share their badges easily on portfolio
                &#38; social media.'
                feature1={feature29}
                feature2={feature30}
                feature3={feature31}

            />
            <FeatureRow
                src={knowledge}
                mainheading='Knowledge Base '
                maintext='  Organise your key documents in one place &#38; make it
                accessible at any time.'
                headPri='Topic clusters'
                textPri=' Organise all documents topic wise.'
                headSec="File tracking"
                textSec='Students can stay up to date with all topic clusters with simple tracking.'
                feature1={feature32}
                feature2={feature33}
            />

            <FeatureRow
                first={true}
                src={wearenotdoneyet}
                mainheading='We are not done yet'
                headPri='Hashtags'
                textPri='Organise and filter all shared content easily using
                our built-in hashtag system. '
                headSec="Anonymous sharing"
                textSec='Students can share anonymously to all their peers.'
                headTer='Endorse'
                textTer='Instructors and admin can endorse good content and queries shared by stud'
                headQuat='Pins'
                textQuat='Students can revisit/follow their favourite posts from various groups using our build-in pinning system.'
                feature1={feature34}
                feature2={feature35}
                feature3={feature36}
                feature4={feature37}
            />
        </div>
    )
}

export default FeaturesRow
