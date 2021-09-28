import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        fontFamily: "Helvetica"
    },
    heading: {
        fontSize: theme.typography.pxToRem(18),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function SimpleAccordion() {
    const classes = useStyles();

    return (
        <>
            <h1 className='text-center px-2 lg:px-0  mb-10 text-4xl font-bold mt-4' style={{ color: '#186FC5' }} >Frequently asked questions</h1>

            <div className={`${classes.root}  px-2 mb-10 lg:px-0 lg:grid grid-cols-2 lg:space-x-4 `}
            >
                {/**left columns */}
                <div className='col-span-1 space-y-4'>
                    <Accordion >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ color: '#424348' }} className={classes.heading}>Do I need to enter my credit card details to sign up or book a demo?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ color: '#424348' }}>
                                No credit card is required. Start on our free collaborator plan today or schedule a demo to see how EZ Colab can help you launch and scale your course or coaching.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography style={{ color: '#424348' }} className={classes.heading}> Can I cancel or change my account at any time?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ color: '#424348' }}>
                                Yes. You can upgrade or downgrade your account at any time by contacting our support team.

                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography style={{ color: '#424348' }} className={classes.heading}>Do I own my content?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ color: '#424348' }} >
                                Yes! You always own your student data and your content. We'll never market to your students, and your content is invisible even to us.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography style={{ color: '#424348' }} className={classes.heading}> What onboarding support is included?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ color: '#424348' }} >
                                Work one on one with our team to get your website custom designed and coded. A personalized onboarding call is included with our Creator and EZ Creator plans to help set up your institute and content.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography style={{ color: '#424348' }} className={classes.heading}> What happens to my website when I downgrade or cancel EZ Creator plan?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ color: '#424348' }} >
                                Absolutely nothing! When you downgrade your plan, your website will be live and you cannot request edits from our team. However, when you cancel the plan, we offer you additional 30 day hosting before we remove your website. You will be charged one month additional fee if you want to move the website to your preferred hosting.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography style={{ color: '#424348' }} className={classes.heading}> How long do you take to host my custom website?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ color: '#424348' }} >
                                Your website will be live within 7 days from the start date.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

                {/**right column */}
                <div className='col-span-1 space-y-4 mt-2 lg:mt-0'>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ color: '#424348' }} className={classes.heading}>How are payments processed?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ color: '#424348' }}>
                                All payments are processed on Stripe using an SSL certificate and your payments are secured. Your card details are not stored on our server or on our platform.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography style={{ color: '#424348' }} className={classes.heading}>Are there any transaction fees?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ color: '#424348' }}>
                                No, we do not charge any transaction fees on your sales even if the website is designed, coded and hosted by us. You keep everything you earn.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography style={{ color: '#424348' }} className={classes.heading}> Do I need a web hosting account?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ color: '#424348' }}>
                                No, you do not need any web hosting account as your website is hosted on our secured servers. We can connect your custom domain if you already have one or help you purchase one as well.

                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography style={{ color: '#424348' }} className={classes.heading}> What services do you provide?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ color: '#424348' }}>
                                On the Creator Plan, we personally do the onboarding for you. On the EZ Creator Plan, we provide custom services such as website design, development from scratch and free hosting on our secured servers. You will get a mini team consisting of a designer, coder and manager working for you.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography style={{ color: '#424348' }} className={classes.heading}> How do I request edits for my website?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ color: '#424348' }}>
                                Once you get started with the EZ Creator Plan, we will send you an Edit Request Form and just fill up the form whenever you need one. All changes will be live within 1-2 business days*.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </>
    );
}
