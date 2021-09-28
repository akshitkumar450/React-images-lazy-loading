import React from 'react'
import img1 from '../../assets/article-1-img1.jpg'
import img2 from '../../assets/article-1-img2.jpg'
import img3 from '../../assets/article-1-img3.jpg'
import img4 from '../../assets/article-1-img4.jpg'
import img5 from '../../assets/article-1-img5.jpg'

function Article1() {
    return (
        <div>
            <div className='my-5 grid place-items-center lg:place-items-start'>
                <img src={img1} alt="" className='w-11/12' />
            </div>
            <div className='text-md text-gray-600'>
                <p >
                    In the wake of a global pandemic and an emergency lockdown in
                    early 2020, schools and instructors around the world were
                    compelled to shift their traditional on-campus courses
                    completely online. The lack of prior preparation to
                    accommodate such a change meant that short-term goals were
                    given the utmost priority. These short-term goals included
                    providing students with immediate access to course work,
                    delivering online lessons, and keeping up with the original
                    time schedule of the course curriculum. However, it is
                    imperative that after taking some time to adjust to online
                    methods of instruction, teachers should look to hone their
                    methods of teaching further in order to provide a more
                    eLearning-friendly course. Various studies have been conducted
                    on the best approach to provide a high-quality course to the
                    online user. One of the approaches that many teachers take is
                    providing a student-centred course curriculum.
                </p>
                <p className='py-4'>
                    A student-centred online learning program typically refers to
                    a form of instruction that gives students opportunities to
                    lead learning activities, participate more actively in class
                    discussions, work on projects associated with the subject,
                    explore topics that interest them, and have an effective
                    educational experience. It is a widely accepted fact that
                    online education requires strong self-motivation skills and
                    unyielding self-discipline. This learner-centred approach
                    promotes autonomy among the students and establishes an
                    optimistic attitude towards learning. Studies have been
                    conducted to prove the efficacy of the use of activities to
                    promote comprehension and retention among students by Isabelle
                    D. Cherney[1]. Another study has elucidated the positive
                    effects of using video instruction and interactive graphics in
                    online education[2].
                </p>
                <div className='my-5 grid place-items-center lg:place-items-start'>
                    <img src={img2} alt="" className='w-11/12' />
                </div>
                <p>
                    The best way to formulate a learner-centred approach depends
                    on the perspective of the educator, but the common points to
                    focus on are:

                    <ol type="I" className='list-roman p-3 px-5 lg:p-6 lg:px-10'>
                        <li>Student-teacher interaction</li>
                        <li>Student-student interaction</li>
                        <li>Student-content interaction
                        </li>
                    </ol>
                </p>
                <h6 style={{ color: '#2A3158' }} className='font-semibold py-4'>Student-teacher interaction :</h6>
                <div className='my-5 grid place-items-center lg:place-items-start'>
                    <img src={img3} alt="" className='w-11/12' />
                </div>
                <p >Traditional learning techniques have obvious benefits such as face-to-face interaction between the teacher and students, an active learning environment in the classroom, and monitoring of students by the teachers. These aspects of offline education are important to add to online learning programs in order to provide a quality learning experience. A good starting point for designing a student-centred learning experience is for instructors to ask themselves what kind of facilities they would expect to have if they were students in their own class. No teaching method is a "one size fits all" solution to every student's needs and therefore teachers need to figure out a way to cater to the needs of individual students. A common misconception among people is that online learning is synonymous with distance learning or corresponding courses however, this is not true at all. The level of student-instructor interaction distinguishes the two. Some of the guidelines that teachers can choose to incorporate in their teaching style, in order to accomplish a healthy interaction with students, are mentioned here.</p>
                <ol type="I" className='list-roman p-3 px-5 lg:p-6 lg:px-10'>
                    <li> Schedule regular Question and Answer sessions at the end of every unit or as and when requested by the students</li>
                    <li>Provide feedback forms to the students in order to understand if any changes are required to be made to the lesson plan </li>
                    <li> Arrange smaller group sessions with the students with the help of a scheduling system</li>
                    <li>Try to stimulate the students' intellectual abilities by providing them with challenging yet engaging real-life case study problems</li>
                    <li> Appoint a new Teacher's Assistant every few days to try and actively engage a student</li>
                </ol>

                <h6 style={{ color: '#2A3158' }} className='font-semibold py-4'>Student-Student Interaction:</h6>
                <div className='my-5 grid place-items-center lg:place-items-start'>
                    <img src={img4} alt="" className='w-11/12' />
                </div>
                <p >The second important aspect of building an engaging learning environment is student-to-student interaction. Schools offer numerous opportunities for students to communicate with each other however this isn't a facility that one can avail easily in online classes. That being said, it's an important facility that needs to be provided to ensure the overall development of the learner.  It has long been established that peer-to-peer interaction has promoted a healthy sense of competition among students. When students have a healthy relationship with each other in the online classes they feel like they are a part of a community, this makes them more invested in the coursework they have undertaken. A student-centered classroom, even if it's virtual, promotes the critical thinking skills of the students. An instructor looking to incorporate more student to student interaction in his or her class can incorporate some of the following suggestions:</p>
                <ol className='list-roman p-3 px-5 lg:p-6 lg:px-10' >
                    <li> Create a student discussion group chat where the students would be encouraged to put forth their doubts and have constructive discussions</li>
                    <li>Take on a more activity-based learning approach. If possible, divide the students into groups and ask them to work on group projects</li>
                    <li> Organise study groups</li>
                    <li>Form pairs of students with one academically strong student and the other who could use some help and motivation from his or her peer</li>
                    <li>Partake in a peer-reviewing activity like asking students to check their classmates home assignment or quiz</li>
                </ol>

                <h6 style={{ color: '#2A3158' }} className='font-semibold py-4'>Student-Content Interaction:</h6>

                <div className='my-5 grid place-items-center lg:place-items-start'>
                    <img src={img5} alt="" className='w-11/12' />
                </div>
                <p >It has been observed that when students of any age group are subjected to a continuous stream of lectures they are less likely to actually absorb the lesson. It is the monotonous process of sitting through lectures and being expected to passively intake the information that discourages the students. In order to avoid this obstacle, it is necessary to take the aspect of student-content interaction under proper consideration. Student-Content interaction enables the students to actively partake in the education being given out to them. It encourages student engagement and helps them to deliver well on the expected course outcomes.  Here are a few guidelines that instructors can decide to incorporate in their teaching plans after the completion of a lesson:</p>
                <ol className='list-roman p-3 px-5 lg:p-6 lg:px-10'>
                    <li>Conduct a small quiz to check how much the students have understood the course material </li>
                    <li>Allot different sections of the completed lesson to different students and ask them to prepare a mini-lecture based on it</li>
                    <li> Divide the students into groups and ask them to create a presentation based on their comprehension of the lesson</li>
                    <li>Ask the students to write down the key points of the lesson</li>
                    <li>If the subject has a practical aspect to it that can be performed using common home supplies or be simulated on a computer, encourage the students to perform an experiment based on it</li>
                </ol>
                <h6 style={{ color: '#2A3158' }} className='font-semibold py-4'>Final Words</h6>

                <p>A student-centric method of instruction can prove to be a very rewarding learning environment and is an excellent avenue for instructors and institutions to explore and implement. Of course, it does not dramatically improve student performances but simply puts more focus on the needs of the learner and remolds itself to tend to those needs and expectations.</p>
                <h6 style={{ color: '#2A3158' }} className='font-semibold py-4'>Source:</h6>
                <p>[1].Cherney, I. D. (2008), “The Effects of Active Learning on Students' Memories for Course </p>
                <p>Content,” <em>
                    Active Learning in Higher Education, 9, 152–171.
                </em> </p>
                <a href='https://journals.sagepub.com/doi/10.1177/1469787408090841' rel='noreferrer' target='_blank' >[https://journals.sagepub.com/doi/10.1177/1469787408090841]</a>
                <br />
                <br />
                <p>[2]. Choi, H. J., and Johnson, S. D. (2005), “The Effect of Context-Based Video Instruction on </p>
                <p>
                    Learning and Motivation in Online Courses,” <em>The American Journal of Distance Education, 19,</em>
                </p>
                <a href='https://www.tandfonline.com/doi/abs/10.1207/s15389286ajde1904_3' rel='noreferrer' target='_blank'>215–227. [https://www.tandfonline.com/doi/abs/10.1207/s15389286ajde1904_3]
                </a>
            </div>
        </div>
    )
}

export default Article1
