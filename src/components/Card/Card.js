import React from 'react';
import './Card.css';

import { NavLink } from 'react-router-dom';

const Card = (props) => {
    console.log(props)
    const {imgsrc, title, text, price} = props.data;
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                        <div className="card card-gap">
                           <img src={imgsrc} className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title card-h4">{title}</h5>
                                <p className="card-text card-p">{text}</p>
                                <p>Price: ${price}</p>
                                <NavLink to="#" className="btn btn-primary" onClick={() => props.handleAddCourse(props.data)}>Enroll Now</NavLink>
                            </div>
                        </div>
            </div>
        </>
        
    );
};

export default Card;