import React, { lazy } from 'react'
// import Loader from '../components/Loader';
import useLoader from '../components/useLoader';
// import NavbarHeader from '../components/NavbarHeader';
import { Link } from 'react-router-dom';

const NavbarHeader = lazy(() => import('../components/NavbarHeader'));
const Loader = lazy(() => import('../components/Loader'));
function PrivacyPolicy() {
    const loading = useLoader()
    return (
        <div>
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
                            <h1 style={{ color: '#2A3158' }} className='text-5xl font font-semibold pt-40 text-center'>Privacy Policy</h1>

                            <div className=' my-20 lg:my-28 bg-white p-5'>
                                <h1 className='lg:ml-20 text-gray-600'>
                                    <Link to="/">Home</Link><i className="fa fa-angle-double-right mx-2"></i><span>Privacy Policy</span>
                                </h1>
                            </div>

                            <div className=' px-4 lg:px-0 max-w-5xl mx-auto'>
                                <h1 style={{ color: '#2A3158' }} className='text-3xl mb-10 font-bold text-center'>Privacy Policy (www.ezcolab.com)</h1>

                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>“Protecting data is a matter of trust and your privacy is important to us”.</h1>

                                <p className='my-3 text-gray-700 '>Your Privacy is of paramount importance to us. This Policy complies with Rule 4 of the Information Technology (Reasonable Security Practices, Procedures, and Sensitive Personal Data or Information) Rules, 2011. You are requested to please have a read and accept our privacy policy before going further, as it sets out important information relating to how we handle your personal information.</p>

                                <h1 style={{ color: '#2A3158' }} className='text-3xl my-3 ' >Welcome, EZColab Users!</h1>

                                <p className='my-3 text-gray-700'>EZColab respects your privacy and protecting your personal information is our top priority. This website www.ezcolab.com and the mobile app, web interfaces, documentation, servers and all other Intellectual Property, software and infrastructure is owned, operated and managed by VC Learning (hereinafter referred to as “we” or “our”), a partnership firm registered in India under the Indian Partnership Act, 1932. EZColab is a communication and collaboration platform (the ‘Platform’), which would revolutionize the way students interact with their teachers and solve their queries.</p>

                                <p className='my-3 text-gray-700'>This Privacy Policy has been drafted in order to make you understand as to how we collect, use and protect the information we receive from users of the EZColab website or the mobile app and the same is applicable to all Users who uses our website / Mobile App.</p>

                                <p className='my-3 text-gray-700'>EZColab do not sell, rent or disclose your personal information to anyone. The Privacy Policy is open to the public at all times so that you may read the full text of the Privacy Policy whenever you intend to do so.</p>

                                <p className='my-3 text-gray-700'>Any person accessing, browsing, or otherwise using this website, either manually or via an automated device or program, shall be considered as ‘User’ or is addressed as ‘User’ or ‘You’ in this policy. The purpose of this Privacy Policy is to explain the type of information that we collect from you, what we do with that information, and whom we share this information with.</p>

                                <p className='my-3 text-gray-700'>This Privacy Policy may be amended from time to time based on our requirements and the effective date of the amended policy will be reflected herein. Users will be informed about the updated privacy policy via pop-up notification or e-mail. In view of the above, users are requested to review the changes carefully. If you disagree with the Privacy Policy, you must stop using the service(s). If you continue to use this website / mobile app developed by us with the amended privacy policy, it will be deemed that you have read the changes and given your consent to such changes. In this regard, Users acknowledges that it is the responsibility of the Users to review this Privacy Policy from time-to-time.</p>
                                <p className='my-3 text-gray-700'>This Privacy Policy contains the following sections-</p>

                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>(A) WHAT DOES THIS PRIVACY POLICY COVER?</h1>

                                <p className='my-3 text-gray-700'>This Privacy Policy covers the type of information collected from the users through the website, EZcolab mobile app which includes the sensitive Personal Data or the information. This Policy also tells us the purpose, means and modes of usage of such information and how and to whom such information, which has been collected will be disclosed.</p>

                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>(B) WHAT INFORMATION DOES WE DISPLAY OR COLLECT?</h1>

                                <h1 style={{ color: '#2A3158' }} className='xl font-bold'>B.1 Information you provide to us</h1>

                                <p className='my-3 text-gray-700'> use our Platform, following information from the college / school / institution database are collected in order to generate unique User ID’s and encrypted passwords, such as your name, e-mail id, phone number, date of birth and the profile photo.</p>

                                <p className='my-3 text-gray-700'>It is pertinent to mention herein that Personal Information from students and instructors are collected only after college administration purchases our software services.</p>

                                <h1 style={{ color: '#2A3158' }} className='xl font-bold'>B.2 Information collected automatically</h1>

                                <p className='my-3 text-gray-700'>When you interact with the Platform, EZColab would automatically receive and records information on our server logs from your browser, including your IP address, EZColab’s cookie information, and the page(s) you might visit next. We also record the details of your activity on the Platform, and the number and frequency of users to our Platform and its components.</p>

                                <p className='my-3 text-gray-700'>When you download the mobile app of the Platform (“Mobile App”), we automatically collect information on the device type, the operating system version, the app version, user category (teacher, students, admin staff or other user type) (“User Category”), the numerical mobile device user id, as well as actions performed by you.
                                </p>

                                <p className='my-3 text-gray-700'>We also use third-party mobile analytics software to allow us to better understand the functionality of our Mobile App on your phone. This software may record information such as how often you use the Mobile App, the events that occur within the Mobile App, aggregated usage information, performance data, and where the application was downloaded from.</p>

                                <p className='my-3 text-gray-700'>Cookies are alphanumeric identifiers that are transferred to your computer or mobile device to enable systems to recognize a computer or device and specify how and when pages in a site are visited and by how many people. EZColab cookies may collect Personal Information or Student’s Personal Information and combines the general information collected through these cookies with other Personal Information or Student’s Personal Information for various purposes, such as to allow for single-sign-on and to count the number of visitors to an EZcolab page. Most browsers have an option for turning off the cookie feature, which will prevent your browser from accepting new cookies, as well as (depending on the sophistication of your browser software) allowing you to decide on acceptance of each new cookie in a variety of ways.</p>

                                <p className='my-3 text-gray-700'>The Platform may also contain electronic images known as web beacons (sometimes called single-pixel gifs), which are used along with cookies to compile aggregated statistics to analyze how the Platform are used. Gifs are not Personal Information and are sourced from a third party(s), but we evaluate them periodically to ensure they meet our Trust & Safety requirements.</p>

                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>(C) WHAT DOES EZCOLAB USE MY IMFORMATION FOR?</h1>

                                <h1 style={{ color: '#2A3158' }} className='xl font-bold'>C.1 Generally</h1>


                                <p className='my-3 text-gray-700'>
                                    When you use the Platform, you may set up your personal profile, send messages, perform searches and queries, and enroll yourself upon the course materials mentioned over the Platform. Information we gather from users enables us to provide features, personalize it for users and improve our Platform.
                                </p>

                                <p className='my-3 text-gray-700'>
                                    The other purpose of collection of information is to provide customer service, for the improvement of the website or the mobile app, personalization of user experience, to administer contests, surveys etc., or sending newsletter or the promotional emails.
                                </p>

                                <h1 style={{ color: '#2A3158' }} className='xl font-bold'>C.2 Personal Information</h1>

                                <p className='my-3 text-gray-700'>
                                    We also used the Personal Information you provide to respond to your requests for certain information and Platform, customizing your experience, and communicating with you about the Platform.
                                </p>

                                <h1 style={{ color: '#2A3158' }} className='xl font-bold'>C.3 Your email address</h1>

                                <p className='my-3 text-gray-700'>
                                    Use of our Platform requires your e-mail address and we may send you e-mail communications. Web beacons may also be used in some of our e-mails to let us know which e-mails have been opened by recipients, which allows us to gauge the effectiveness of our customer communications.
                                </p>

                                <p className='my-3 text-gray-700'>
                                    If you no longer wish to receive e-mails from EZColab, please click the unsubscribe link that is included in the footer of our e-mails, update your email preferences or contact us at hellosupport@vclearning.co ezcolab.com.
                                </p>

                                <h1 style={{ color: '#2A3158' }} className='xl font-bold'>C.4 Mobile Usage Information</h1>

                                <p className='my-3 text-gray-700'>
                                    Mobile usage information is used to determine device capabilities and usage trends, which allows us to better understand which devices we should support and what features are most frequently used. We do not link this information, we obtain from analytics software to any personally identifying information that you submit within the Mobile App.
                                </p>

                                <h1 style={{ color: '#2A3158' }} className='xl font-bold'>
                                    C.5 Push Notification</h1>

                                <p className='my-3 text-gray-700'>
                                    If you use the Mobile App, we will send push notifications to your mobile device in order to make you aware of certain activities that may occur within your account, such as when someone has entered a new post, when you have new notifications, or when grades have been posted. You may opt-out of receiving these types of communications by turning them off at the device level or emailing us at hello@vclearning.co
                                    <br />
                                    support@ezcolab.com.
                                </p>

                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>
                                    (D) USER RIGHTS</h1>

                                <p className='my-3 text-gray-700'>
                                    User may at any time request information about the data, which we hold about the user as well as about their origin, recipients or categories of recipients to which such data is forwarded and about the retention purpose.
                                </p>

                                <p className='my-3 text-gray-700'>
                                    User may request immediate correction of any incorrect personal data related to them or opt for a restriction of the processing. The user is also entitled to request completion of incomplete personal data also by means of a supplementary declaration.
                                </p>
                                <p className='my-3 text-gray-700'>
                                    User is entitled to receive the respective personal data provided to us in a structured, common, and machine-readable format and user is entitled to transmit such data to other data controllers without restriction if the processing was based on user consent or if the data was processed by means of automated procedures.
                                </p>

                                <p className='my-3 text-gray-700'>
                                    User may request for removal of any personal data. Once such request is being placed by the User, we are, inter alia, obliged to erase such data in such case when it is no longer required for the purpose for which it was collected or otherwise processed. User may withdraw the given consent to the use of his/her data at any time.
                                </p>

                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>(E)RETENTION PERIOD
                                </h1>

                                <p className='my-3 text-gray-700'>
                                    We retain your personal information as long as it is necessary and expedient for our operations. Besides, we may retain personal information from closed accounts to comply with national laws, prevent fraud, collect any payment owed, resolve disputes, troubleshoot problems, assist with any investigation, enforce our terms of use and take other actions permitted or required by applicable Indian laws. In the event it is no longer required for us to retain your personal information, we dispose off in a secure manner according to our relevant policies
                                </p>

                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>(F)THIRD-PARTY DISCLOSURE</h1>


                                <p className='my-3 text-gray-700'>
                                    We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide you with advance notice. However, joint promotions are possible to share the related information to offering a wider portfolio, experience, and knowledge to its Users. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or servicing you, provided that such parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our website policies, or protect ours or others' rights, property, or safety.
                                </p>

                                <p className='my-3 text-gray-700'>
                                    However, we may provide/share non-personally identifiable visitor information to other parties for marketing, advertising or other uses at our discretion.
                                </p>

                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>(H)THIRD-PARTY LINKS</h1>

                                <p className='my-3 text-gray-700'>
                                    As of current date, this Platform would not have any third party links. Platform would show redirected link only to download our Mobile App from Apple Store or Google Play Store. Only Amazon Web Services are used as a third party’s Platform server, where all data collected by us is stored. We have a separate agreement with Amazon Web Services for keeping our data confidential and the same shall not be used with any other third party without your prior approval.
                                </p>
                                <p className='my-3 text-gray-700'>
                                    We may however, occasionally include links to other websites. Such websites are governed by their respective Privacy Policies, which are beyond our control. Once the User leaves our website (the User can tell where he/she is by checking the URL in the location bar on the User's browser) , use or otherwise processing of any such information provided by the User is governed by the privacy policy of the operator of the website which the user is visiting. That policy may differ from our own. If the User cannot find the privacy policy of any of these websites via a link from the website's homepage, the User may contact the site directly for more information.
                                </p>

                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>(I)COOKIES & SIMILAR TECHNOLOGIES</h1>

                                <p className='my-3 text-gray-700'>
                                    Personal information we collect using cookies, web beacons, and similar technologies.</p>

                                <p className='my-3 text-gray-700'>We use cookies to help us compile aggregate data about website traffic and site interaction so that we can offer better site experiences and tools in the future. We also use cookies to:</p>

                                <p className='my-3 text-gray-700'>
                                    Understand and save the User's preferences for future visits.</p>

                                <p className='my-3 text-gray-700'>
                                    Compile aggregate data about site traffic and site interactions to offer better website experiences and tools in the future. We may also use trusted third party services that track this information on our behalf.
                                </p>

                                <p className='my-3 text-gray-700'>
                                    Use Third-Party services to track this information for us.
                                </p>
                                <p className='my-3 text-gray-700'>
                                    To restrict usage of the software on the defined number of machines to avoid unauthorized access to software. (how can defined of machines be determined…there are so many users in an institution ?)
                                </p>

                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>(J) GLOBAL DATA PROTECTION REGULATIONS (GDPR) & ITS COMPLIANCE FOR EURPOEAN UNION RESIDENTS</h1>

                                <p className='my-3 text-gray-700'>Users are requested to note that this Website further complies with the Global Data Protection Regulations (GDPR) for data protection of the citizens of the European Union. GDPR was implemented in May 25, 2018 in the European Union and requires organizations to safeguard personal data and uphold the privacy rights of anyone in EU territory. So, if you are a citizen of European Union countries, you have certain rights and privileges as mentioned below:
                                </p>

                                <p className='my-3 text-gray-700'>
                                    Right to access and/or correct your personal information;
                                </p>
                                <p className='my-3 text-gray-700'>
                                    Right to restrict use of your personal information;
                                </p>
                                <p className='my-3 text-gray-700'>
                                    Right to request deletion of your personal information;
                                </p>
                                <p className='my-3 text-gray-700'>
                                    Right to object to processing of your personal information;
                                </p>

                                <p className='my-3 text-gray-700'>
                                    Right to data portability;
                                </p>
                                <p className='my-3 text-gray-700'>
                                    Right to lodge a complaint with a supervisory authority in the country where you reside.
                                </p>
                                <p className='my-3 text-gray-700'>
                                    Users may further note that you can use your right to request deletion of your personal information by filling up a simple Right to Erasure Request Form.
                                </p>

                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>
                                    (K)SECURITY
                                </h1>

                                <p className='my-3 text-gray-700'>
                                    This Platform has security measures to protect against the loss, misuse, and alteration of the information that is submitted to EZColab and is under its control. We have complied with Secured Socket Layer Certificate (SSL Certification). We also have embedded malware scan software. However, we make no representations or warranties concerning the sufficiency of these security measures. We shall not be responsible for any actual or consequential damages that result from a lapse in compliance with this Policy as a result of a security breach or technical malfunction. Certain information may be transmitted to you by e-mail. Besides, only you and anyone, to whom you address your message in most cases, view Users’ communications through the Platform. As the operator of the Website or the Mobile App, we may need to review or monitor your electronic mail and other communications from time to time as may be required by law.
                                </p>

                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>
                                    (L)PASSWORD RELATED INFORMATION
                                </h1>

                                <p className='my-3 text-gray-700'>
                                    Password is encrypted and not visible even to EZColab. There shall be no storage of password related information of the Users. If the User forgets his/her password, email link shall be sent for verification purpose. All password requests will be forwarded to the registered email with the option to contact us.
                                </p>

                                <p className='my-3 text-gray-700'>
                                    User cannot recover old password. However, he/she can reset his/her password and link for reset will be sent to the customer at registered identity.
                                </p>

                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>
                                    (M)DISPUTE RESOLUTION AND JURISDICTION
                                </h1>

                                <p className='my-3 text-gray-700'>
                                    It is expressly agreed to by the Parties hereto that the formation, interpretation, and performance of this Policy, and any disputes arising here from will be resolved through mediation where the Parties a two-step Alternate Dispute Resolution (“ADR”) will attempt to resolve the issues amicably amongst themselves to the mutual satisfaction of both Parties. If the Parties are unable to reach such an amicable solution within thirty (30) days of one Party communicating the existence of a dispute to the other Party, then mechanism. Courts at Bangalore, India shall have exclusive jurisdiction over any disputes arising between the Parties vis-à-vis Privacy Policy. It is further agreed to by the Parties that the contents of this Section shall survive even after the termination or expiry of the Policy and/or Terms.
                                </p>
                                <p className='my-3 text-gray-700'>
                                    a)Mediation: In case of any dispute between the parties, the Parties will attempt to resolve the same amicably amongst themselves, to the mutual satisfaction of both Parties. If the Parties are unable to reach such an amicable solution within thirty (30) days of one Party communicating the existence of a dispute to the other Party, the dispute will be resolved by arbitration, as detailed herein below.
                                </p>
                                <p className='my-3 text-gray-700'>
                                    b)Arbitration: If the Parties are unable to amicably resolve a dispute by mediation, said dispute will be referred to arbitration by a sole arbitrator to be appointed by EZColab, and the award passed by such sole arbitrator will be valid and binding on both Parties. The Parties shall bear their costs for the proceedings, although the sole arbitrator may, in his/her sole discretion, direct either Party to bear the entire cost of the proceedings. The arbitration shall be conducted in English, and the seat of Arbitration shall be the city of.
                                </p>

                                <p className='my-3 text-gray-700'>
                                    The Parties expressly agree that the Privacy Policy is governed by the laws, rules, and regulations of India, and that the Courts at Bangalore shall have exclusive jurisdiction over any disputes arising between the Parties.</p>

                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>
                                    (N)GRIEVANCE OFFICER
                                </h1>

                                <p className='my-3 text-gray-700'>
                                    In accordance with Rule 5 (9) of the Information Technology (Reasonable Security Practices, Procedures and Sensitive Personnel Data or Information) Rules, 2011, the name and contact details of the Grievance Officer who can be contacted for any complaints or concerns pertaining to the website, including those pertaining to breach of the Terms of Use or and other polices are published as under:
                                </p>

                                <p className='my-3 text-gray-700'>
                                    Vineeth Ellore,</p>
                                <p className='my-3 text-gray-700'>vineeth@vclearning.co
                                </p>
                                <p className='my-3 text-gray-700'>Thanking You,</p>

                                <p className='my-3 text-gray-700'>
                                    Team: www.ezcolab.com
                                </p>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default PrivacyPolicy
