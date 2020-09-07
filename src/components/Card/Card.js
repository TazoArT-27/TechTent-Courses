import React from 'react';
import './Card.css';

import { NavLink, Link } from 'react-router-dom';

const Card = (props) => {
   
    const {id, imgsrc, title, text, price, email, Instructors, review} = props.data;
    console.log(props)
    return (
        <>
            <div className="col-md-3 col-10 mx-auto">
                        <div id="main-card" className="card-deck">
                        <div className="card card-gap">
                           <div className="img-container">
                           <img src={imgsrc} className="card-img-top img-fluid card-image" alt=""/>
                           </div>
                            <div className="c-body">
                            <div className="card-body px-0 pb-0">
                                <h5 className="card-title card-h4">
                                    {
                                        props.showTitle == true ? <Link style={{textDecoration:'none'}} to={"course/"+id}>{title}</Link> : <h5>{title}</h5>
                                    }
                                </h5>
                                <p className="card-text card-p">{text}</p>
                                
                            </div>
                            </div>
                            <div className="card-footer">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="text-left footer-p mt-2 my-0 py-0">Price: ${price}</p>
                                    </div>
                                    <div className="col-md-6">
                                        {
                                            props.showButton && <NavLink to="#" className="btn btn-primary" onClick={() => props.handleAddCourse(props.data)}>Enroll Now</NavLink>
                                        }
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        </div>
            </div>
        </>
        
    );
};

export default Card;