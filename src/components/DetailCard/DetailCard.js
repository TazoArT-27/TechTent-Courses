import React from 'react';

const DetailCard = (props) => {
    const {imgsrc, title, text, Instructors, email, review} = props.detail;
    return (
    
        <>
          <div>
            <div className="card mb-3 py-5 px-5">
            <div className="row no-gutters">
                <div className="col-md-4">
                <img src={imgsrc} className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <p className="card-text">Instructor: {Instructors}</p>
                    <p className="card-text">Email: {email}</p>
                    
                    <p className="card-text">Review: {review}</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
};

export default DetailCard;