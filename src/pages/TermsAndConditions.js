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
                                backgroundImage: "linear-gradient(#E0EFFF,#EFF5FC)"
                            }}
                        >
                            <NavbarHeader />
                            <h1 style={{ color: '#2A3158' }} className='text-5xl font font-semibold pt-40 text-center'>Terms & Conditions</h1>

                            <div className=' my-20 lg:my-36 bg-white p-5'>
                                <h1 className='lg:ml-20 text-gray-600'>
                                    <Link to="/">Home</Link><i className="fa fa-angle-double-right mx-2"></i><span>Terms &
                                        Conditions</span>
                                </h1>
                            </div>

                            <div className=' px-4 lg:px-0 max-w-5xl mx-auto'>
                                <h1 style={{ color: '#2A3158' }} className='text-3xl my-3 '>TERMS OF SERVICE</h1>
                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>IMPORTANT!</h1>

                                <p className='my-3 text-gray-700 '>If you are not of legal age to form a binding contract (in many places, this is 18 years old), then you must get your parent or guardian to read these terms and agree before using this website or EZColab Mobile App or providing any information to us. Please review this Agreement with your parent or guardian so that you both understand how this website or the EZColab Mobile App works and what restrictions apply to your use of our website, mobile app and our services. Remember; always get an adult’s permission before going online.
                                </p>

                                <p className='my-3 text-gray-700'>This document is published following the provisions of Rule 3(1) of the Information Technology (Intermediaries Guidelines) Rules, 2011.</p>

                                <h1 style={{ color: '#2A3158' }} className='text-3xl my-3 ' >Welcome to EZColab!</h1>

                                <p className='my-3 text-gray-700'>Thanks for your interest in knowing and using EZColab! We are glad you are here, but there are some rules you need to agree before you use our website, mobile app and enjoy our services. When we use the word “Services”, we mean not only the EZColab website, but also the mobile app made available by EZColab (for example, EZColab Android app available via the Android Marketplace (Google Play Store), and the EZColab IPhone and iIPpad apps available at the Apple App Store (EZColab’s website and the mobile app are collectively referred to as the “Platform”).</p>

                                <p className='my-3 text-gray-700'>The team at VC Learning (“VC Learning”, “EZColab”, “we”, “us”, and/or “our”) has have developed these terms of service (“Terms of Service”) so that you could easily understand your rights and responsibilities when using our Services. </p>

                                <p className='my-3 text-gray-700'>Your use of this Platform or any of the products (such as “Courses”) or Services offered on this site is subject to these Terms of Service.</p>

                                <p className='my-3 text-gray-700'>We will post the Terms of Service within this Platform so that you can easily access to it. We may amend the Terms of Service within the scope of applicable laws. The updated Terms of Service shall be made available (as and when amended) and effective immediately and shall supersede these Terms of Service. VC Learning shall not be under an obligation to notify you of any changes to the Terms of ServiceIf we do so, we shall provide you with reasonable prior notice of the date of implementation and the reason for the amendment. In this regard, you should acknowledge that it is your responsibility to review these Terms of Service from time to time. Notwithstanding the aforementioned notification, if you do not agree with the amended Terms of Service, you may cease using the Service and terminate the Terms of Service. If you continue to use the Service after the date of implementation, you will be deemed to have agreed to the amended Terms of Service.</p>

                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>USING EZCOLAB PLATFORM</h1>

                                <p className='my-3 text-gray-700'>This Platform or any other website (if any) linked to this Platform is an online communication and collaboration Software / Tool for educational institutions such as school, college, university or any coaching institution (collectively the “Institution”) which would revolutionize the way students and the teachers interact, subject to surveillance by the administration (‘admin’) of the Institute.
                                </p>
                                <p className='my-3 text-gray-700'>Any person, accessing, browsing or otherwise using this Platform either manually or via an automated device or program, shall be considered as “User” or is addressed as ‘User’ or ‘you’ in these Terms of Service. </p>
                                <p className='my-3 text-gray-700'>User may be anybody, being a teacher of your Institution, administration staff of the Institution or you. By using this Platform, Students have an option to keep themselves as can post their study related queries as “anonymous” within the Software / Tool either in respect of their queries or uploading or posting other materials, however,. This will be anonymous only to other students but their profile name will be visible to all instructors, teachers and admin staff of the Institution to safeguard community guidelines. Institution may keep their own community guidelines either on the landing page or within our Platform. User may decide whether to bind this Institute’s related community guidelines or not.
                                </p>
                                <p className='my-3 text-gray-700'>Your personal information is collected when your Institution purchases the services of our Software / Tool and use our Platform’s Services. Onboarding of your institute shall be undertaken as per mutual consent with your instituteUpon request of your institute and after receiving the requisite information / details (available in the Institution’s database, for which we use your personal information such as your name, e-mail id, phone number, date of birth and the profile photo, etc.), . Upon request of the admin of the Institute,i Iindividual User ID’s and passwords are generated by users themselves for students, teachers and the members of admin. , based upon the details mentioned in the Institution’s database, for which we use your personal information such as your name, e-mail id, phone number, date of birth and the profile photo etc.</p>
                                <p className='my-3 text-gray-700'>Upon authorization from the Institute admin, EZColab / VC Learning support staff can login as Institute admin for providing Services to the User.</p>

                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>LIMITED RIGHTS</h1>
                                <p className='my-3 text-gray-700'>Subject to these Terms of Service and our policies, we hereby grant you a limited, personal, legal, ethical, non-exclusive, non-transferable, non-commercial, non-vindictive, non-discriminatory right to visit the Platform and avail the Services thereof. You agree not to copy or distribute any part of the Platform in any medium without prior written authorization from EZColab /VC Learning. You shall also not alter or modify any part of the Platform other than as may be reasonably necessary towhile usinge the same Platform except for its intended purpose for which license has been granted.</p>
                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>ELIGIBILITY</h1>
                                <p className='my-3 text-gray-700'>
                                    Persons who are “incompetent to contract” within the meaning of the Indian Contract Act, 1872 are advisable not to use this Platform. However, if you are a minor, i.e., under the age of 18 years, you may use this Platform under the supervision of a parent or legal guardian who agrees to be bound by these Terms of Service. We reserve the right to terminate or refuse your registration or refuse to permit access to this Platform, if it is discovered or brought to our notice that you are a minor.</p>
                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>YOUR RESPONSIBILITY FOR THE CONTENT YOU SUBMIT</h1>
                                <p className='my-3 text-gray-700'>
                                    User(s) may submit / post / upload, content such as, queries, reviews, comments, messages, and others content related to the course materials available over the Platform, collectively referred to as ‘content’ and are solely responsible for its accuracy and authenticity. Users further understand that all risk, including but not limited to any third-party right violation, any liability arising from any false, misleading, or defamatory content, shall solely attribute to the User and in no case EZColab / VC learning and its affiliates, including its partners / directors and officers be liable for any claim or liability arising from such content posted by the User, whether posted in the website or the mobile app.</p>
                                <p className='my-3 text-gray-700'>Since we are only Software / Tool developer and have no role in the content of the Institute or the User being placed upon our Platform, therefore, we shall be at no case be held responsible for authenticity, accuracy or storage of the data. </p>
                                <p className='my-3 text-gray-700'>
                                    Users may further understand that EZColab / VC Learning (and / or Admin ?) reserves all rights to reject, edit, delete, move any content, which are not in consonance with our community guidelines, privacy policy, these Terms of Service without providing any reasons. Users may further note that we do not verify, adopt or sanction any content and your use of any such content shall be at your own risk. We do not endorse or recommend products / services posted by any party. All content and rankings are opinions of either you or third party, which may or may not be accurate. We do not assure quality, accuracy, and reliability of any content that is being placed upon the Platform. Upon placing request to enforce any term on your behalf, we, may in its sole discretion initiate any investigation, if we believe s another User(s) have violated any terms of this Platform.</p>
                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>MODIFICATION OF THESE TERMS OF USE</h1>
                                <p className='my-3 text-gray-700'>EZColab is a dynamic communication Software / Tool, so the Services or the Platform structure and requirements may be changed over a period of time. We may change, suspend or discontinue any part of the Platform features, or we may introduce new features to this Platform or impose limits on certain features or restrict access to parts or the entire Platform. We will try to give you notice when we make a material change to this Platform that would adversely affect you, but this is not always practicable. Similarly, we reserve the right to remove any content from the Platform at any time, for any reason or without any reason, and without notice.</p>
                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>INTELLECTUAL PROPERTY RIGHTS</h1>
                                <p className='my-3 text-gray-700'>The content which is being uploaded over this Platform in the form of Institute’s information, Institute’s logo, trade mark, photos, course materials, details of the course, structure of the fees, information pertaining to students, teachers and the members of the admin are being provided by the Institute or licensed by the Institute to grant us the permission to upload the Content on our Platform and run it successfully. In no case, we shall be held liable for any claim by any parent, teacher or the student, including any third party claims for the infringement of the content. Content on this Platform is provided to you “as is” for your information and personal use only and may not be used, copied, reproduced, distributed, transmitted, broadcast, displayed, sold, licensed, or otherwise exploited for any other purposes whatsoever without the prior written consent of the Institution.</p>
                                <p className='my-3 text-gray-700'>It is pertinent to further mention herein that the logo, marks, trademark, service mark of EZColab or the VC Learning being used over the Platform are the owned by EZColab or VC Learning subject to copyright and other intellectual property rights under the laws of India. Any content on this Platform which pertains to VC Learning shall not be used, copied, reproduced, distributed, transmitted, broadcast, displayed, sold, licensed, or otherwise exploited for any other purpose whatsoever without the prior written consent of VC Learning. Content on this Platform is provided to you “as is” for your information and personal use only and may not be used, copied, reproduced, distributed, transmitted, broadcast, displayed, sold, licensed, or otherwise exploited for any other purposes whatsoever without the prior written consent of the respective owners. (Already appearing in para above )
                                </p>
                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>RESTRICTIONS/ PROHIBITIONS</h1>
                                <p className='my-3 text-gray-700'>You hereby expressly agree not to:</p>
                                <p className='my-3 text-gray-700'>access data not intended for you or log into server or account that you are not authorized to access;</p>
                                <p className='my-3 text-gray-700'>attempt to probe, scan or test the vulnerability of a system or network; </p>
                                <p className='my-3 text-gray-700'>
                                    attempt or breach security or authentication measures without proper authorization;</p>
                                <p className='my-3 text-gray-700'>attempt to interfere with, access to any other user including but not limited to by submitting a virus of any kind or Trojan horse to the Platform, overloading, flooding, mail bombing or crashing;
                                </p>
                                <p className='my-3 text-gray-700'>copy, distribute, download, display, perform, reproduce, modify, edit, alter, enhance, broadcast or tamper with, in any way or otherwise use any material contained in the Platform except as permitted;</p>
                                <p className='my-3 text-gray-700'>copy and distribute this information on any other server, or modify or re-use information, text, graphics, sound, etc. on this Platform to any other system. No reproduction of any part of this Platform may be sold or distributed for commercial gain nor shall it be modified or incorporated in any other work, publication or website, whether in hard copy or electronic format including postings to any other website;</p>
                                <p className='my-3 text-gray-700'>take any screenshots or video recording through any mode or any app and make it available over social media platform or whatsoever platform; (including screenshots or videos through whastsapp or any other similar app ?) ; or</p>
                                <p className='my-3 text-gray-700'>remove any copyright, trademark or other intellectual property notices contained in the original material from any material copied or printed off from the website or link to this web site, without our express written consent; or</p>
                                <p className='my-3 text-gray-700' >post or otherwise publish on the Platform any materials that- </p>
                                <p className='my-3 text-gray-700'>are threatening, libelous, defamatory, or obscene;</p>
                                <p className='my-3 text-gray-700'>would constitute, or that encourage conduct that would constitute and/or incite a criminal offense, give rise to civil liability, or otherwise violate law in any manner;</p>
                                <p className='my-3 text-gray-700'>infringe the intellectual property, privacy, or other rights of any third parties;
                                </p>
                                <p className='my-3 text-gray-700'>contain a computer virus or other destructive element; contain advertising; or</p>
                                <p className='my-3 text-gray-700'>constitute or contain false or misleading statements</p>
                                <p className='my-3 text-gray-700'>Please note that violations of system or network security may result in civil or criminal liability.</p>
                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>LINKS TO THIRD-PARTY WEBSITES</h1>
                                <p className='my-3 text-gray-700'>As of current date, this Platform would not have any third party links. Platform would show redirected link only to download our Mobile App from Apple Store or Google Play Store. Only Amazon Web Services are used as a third party’s Platform server, where all data collected by us is stored. We have a separate agreement with Amazon Web Services for keeping our data confidential and the same shall not be used with any other third party without our prior approval.
                                </p>
                                <p className='my-3 text-gray-700'>
                                    We may however, occasionally include links to other websites. Such websites are governed by their respective Terms of Service or Use, which are beyond our control. Once the User leaves our Platform (the User can tell where he/she is by checking the URL in the location bar on the User's browser), use or otherwise processing of any such information provided by the User is governed by the Terms of Service or Use of the operator of the website which the user is visiting. That policy may differ from our own.</p>
                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>DISCLAIMER AND WARRANTIES
                                </h1>
                                <p className='my-3 text-gray-700'>You agree that your use of this Platform shall be at your sole risk to the fullest extent permitted by law. The content of this Platform is provided "as is" and on "as available" basis. Going further, EZC0lab or VC Learning, its officers, partners or directors, employees, and agents disclaim all warranties or representations, express or implied, in connection with the Platform and your use thereof. </p>
                                <p className='my-3 text-gray-700'>It is solely your responsibility to evaluate the accuracy, completeness, and usefulness of all content, data, opinions, advice, services, and other information provided through the Platform. We do not warrant that the access to this Platform will be uninterrupted or error-free.</p>
                                <p className='my-3 text-gray-700'>No information contained herein shall constitute an invitation to invest in EZColab or VC Learning or any of its Affiliates. Further, nothing contained in this Platform should be construed as a recommendation to use any product, process, equipment or formulation, in conflict with any patent, or otherwise and EZColab or VC Learning makes no representation or warranty, express or implied that the use thereof will not infringe any patent, or otherwise.</p>
                                <p className='my-3 text-gray-700'>This Platform is controlled and operated from India and EZColab or VC Learning makes no representation that this Platform will be available for use in other parts of the world. If you use this Platform from outside India, you are entirely responsible for compliance with all applicable local laws.</p>
                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>LIMITATION OF LIABILITY</h1>
                                <p className='my-3 text-gray-700'>We shall not be liable for any damages, of any kind, arising out of or relating to the use or the inability to use this Platform, its content or links, any claim raised by parent or guardian or the User(s) or any third party acting on their behalf for their own loss, claims or acting on behalf of User(s), including but not limited to damages caused by or related to errors, omissions, interruptions, defects, delay in operation or transmission, computer virus, line failure, and all other direct, indirect, special, incidental, punitive, loss of profit, exemplary or consequential damages whether based on warranty, contract, intellectual property infringement, tort or any other legal theory, and whether or not, such User or any other person were advised of the possibility of such damages.
                                </p>
                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>TERMINATION</h1>
                                <p className='my-3 text-gray-700'>We may, in our sole discretion, and at any time, terminate or restrict your use or access to this website (or any part thereof) for any reason, including, without limitation, that we believe you have violated or acted inconsistently with the letter or spirit of these Terms and Conditions.</p>
                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>INDEMNIFICATION</h1>
                                <p className='my-3 text-gray-700'>User, including but not limited to the parent or guarding of the User, agrees to indemnify, defend and hold harmless EZColab or VC Learning, its associates, subsidiaries, their officers, directors, employees, licensees, business partners, and agents or any third party from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from:</p>
                                <p className='my-3 text-gray-700'>your violation of any term of these Terms of Service;</p>
                                <p className='my-3 text-gray-700'>your violation of any third party right, including without limitation any copyright, property, or privacy right;</p>
                                <p className='my-3 text-gray-700'>This defense and indemnification obligation will survive these Terms of Service and your use of this Platform. Any dispute whatsoever shall be subject to trial in competent courts at Bangalore, India only.</p>
                                <h1 style={{ color: '#2A3158' }} className='2xl'>CONFIDENTIALITY </h1>
                                <p className='my-3 text-gray-700'>We will treat all information provided by the User(s) including but not limited to information regarding User’s name, phone number, date of birth, e-mail address, profile photo (‘Personal Information’) confidential. We will not in the ordinary course disclose any Personal Information to any third parties except in the following circumstances:</p>
                                <p className='my-3 text-gray-700'>Where we are compelled to do so under applicable law/judicial process/governmental authorities; or</p>
                                <p className='my-3 text-gray-700'>Where User has provided his/her prior written authorizations to do so; or</p>
                                <p className='my-3 text-gray-700'>Where it is in the public interest to do so.</p>
                                <p className='my-3 text-gray-700'>Users may not use, export or re-export any information or any copy or adaption thereof applicable on this Platform in violation of any applicable laws or regulations, including export laws and regulations in force from time to time. </p>
                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>ASSIGNMENT</h1>
                                <p className='my-3 text-gray-700'>These Terms of Service, and any rights and licenses granted hereunder, may not be transferred or assigned by you to anybody else, but may be assigned by us without any restriction.</p>
                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>DISCONTINUATION OF THE USE OF PLATFORM BY USER</h1>
                                <p className='my-3 text-gray-700'>Though it is the responsibility of the respective institution to ensure that its students / teachers / admin staff have been using mobile app for effective communication and knowledge sharing, however, User(s) are free to uninstall the app or stop using the Platform. In case, User(s) stop using this Platform, they are advisable to notify to the respective admin (in case applicable) of the Institute regarding discontinuation of the use or service of this Platform.
                                </p>
                                <p className='my-3 text-gray-700'>Account termination due to cancellation of agreement by the respective institute may result in destruction of any content associated with your account. It is the responsibility of the respective institute to notify their students / teachers / admin staff regarding termination so that Users , so keep that in mind before you decide to terminate your account. We will try to provide advance notice to you prior to our terminating your account so that you are able to retrieve any important documents theyyou may have stored in your their respective accounts. </p>
                                <p className='my-3 text-gray-700'>(to the extent allowed by law and these Terms), but we may not do so if we determine it would be impractical, illegal, or would not be in the interest of someone’s safety or security to do so.</p>
                                <p className='my-3 text-gray-700'>If you have deleted your account by mistake, contact us immediately at support@ezcolab.com – we will try to help, but unfortunately, we can’t promise that we can recover or restore anything.</p>
                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>FEEDBACK</h1>
                                <p className='my-3 text-gray-700'>Any and all of your feedback about the Services, such as suggestions for corrections, updates, alterations, changes, or modifications to the Services will be the property of EZColab or VC Learning and you hereby assign any rights in such feedback to us, without any consideration to you.</p>
                                <h1 style={{ color: '#2A3158' }} className='2xl font-bold'>Thanking You,</h1>
                                <h1 style={{ color: '#2A3158' }} className='2xl mt-2 font-bold mb-20'>Team- EZColab </h1>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default PrivacyPolicy
