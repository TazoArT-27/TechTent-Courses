import React from 'react';
import web from '../../images/Chasing The Flow.jfif';
import './About.css';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Common from '../Common/Common';
import CardBox from '../CardBox/CardBox';
const About = () => {
    return (
        <>
            <div>
                <Common name="Improving Lives Through Learning " imgsrc={web} visit="/contact" tagLine="The leading global marketplace for learning and instruction" btname="Contact Now"></Common>
            
            </div>
            <div className="container-fluid">
                <div className="row background">
                    <div className="col-10 mx-auto">
                        <h2 className="text-center header" >Our Global Reach</h2>
                        <div className="col-md-8 mx-auto">
                        <p className="text-center para"><span className="brand-name">TechTent</span> is the leading software company for software development and graphics applications, connecting millions of developers to the skills they need to succeed.</p>
                        </div>
                        <div className="about">
                            <CardBox></CardBox>
                        </div>
                    </div>
                </div>
                <div className="row premium">
                    <div className="col-md-10 mx-auto">
                    <h2 className="text-center premium-h2">Why Join <strong className="brandName">TechTent</strong> Premium?</h2>
                    <div className="premium-div d-flex">
                        <div className="premium-div-1 col-md-4 d-flex">
                            <div className="col-md-4"><CardMembershipIcon className="badge"></CardMembershipIcon></div>
                            <div className="col-md-8">
                                <h3 className="text-h3">Cutting Edge Classes</h3>
                                <p className="text-p">Get a leg up on the competition, and learn the newest tools, techniques, and technologies popular in your field.</p>
                            </div>
                        </div>
                        <div className="premium-div-2 col-md-4 d-flex">
                            <div className="col-md-4"><ImportantDevicesIcon className="badge"></ImportantDevicesIcon></div>
                            <div className="col-md-8">
                                <h3 className="text-h3">Access Anywhere</h3>
                                <p className="text-p">Watch bite-sized classes on your own schedule from anywhere on your desktop, mobile app, or Apple TV.</p>
                            </div>
                        </div>
                        <div className="premium-div-3 col-md-4 d-flex">
                            <div className="col-md-4"><PeopleAltIcon className="badge"></PeopleAltIcon></div>
                            <div className="col-md-8">
                                <h3 className="text-h3">Community of learners</h3>
                                <p className="text-p">Get feedback, encouragement, and even mentorship from our millions of members around the world.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};





export default About;