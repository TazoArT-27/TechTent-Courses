import React from 'react';
import web from '../../images/Cryptocurrency Illustration.png'
import Common from '../Common/Common';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import './Home.css';
import Terms from '../Terms/Terms';
const Home = () => {
    return (
        <>
        <div>
            <Common name="Grow your skills with "  imgsrc={web} tagLine="We are the team of talented developers offering best courses for learning software development" visit='/courses' btname='Get Started'></Common>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 mx-auto">
                <h2 className="text-center my-5 home-header">Explore our schools to find your perfect program</h2>
                     <div className="cards d-flex mb-5">
                     
                        <div className="col-md-3">
                            <div className="card card1 carded">
                                <div className="card-body">
                                    <WorkOutlineIcon className="icon-1 "></WorkOutlineIcon>
                                    <h5 className="card-title text-center h5-text">Get real employable skills</h5>
                                    
                                    <p className="text-center p-text">Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high-impact skills that top companies want.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card2 carded">
                                <div className="card-body">
                                    <EmojiObjectsIcon className="icon-2"></EmojiObjectsIcon>
                                    <h5 className="card-title text-center h5-text">Project-based, active learning</h5>
                                    
                                    <p className="text-center p-text">Learn by doing with real-world projects and other hands-on exercises that lead to real skills mastery.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card3 carded">
                                <div className="card-body">
                                    <WatchLaterOutlinedIcon className="icon-3"></WatchLaterOutlinedIcon>
                                    <h5 className="card-title text-center h5-text">Learn on your schedule</h5>
                                    
                                    <p className="text-center p-text">Self-paced learning - whenever and wherever you want. Graduate while learning part-time for 10 hrs/week.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card card4 carded">
                                <div className="card-body">
                                <HelpOutlineOutlinedIcon className="icon-4"></HelpOutlineOutlinedIcon>
                                    <h5 className="card-title text-center h5-text">The help you need, when you need it</h5>
                                    
                                    <p className="text-center p-text">Reach out to our mentors 24/7 and have your coding questions answered quickly so you can keep learning.</p>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>

        </div>
        <Terms></Terms>
        </>
    );
};





export default Home;