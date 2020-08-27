import React from 'react';
import './CardBox.css'
import pic1 from '../../images/cyberpunk _ Tumblr.jfif';
import pic2 from '../../images/Our Sci-Fi Future.png';
import pic3 from '../../images/A Night Among Trees.jfif';
import pic4 from '../../images/Wallpaper of the Week 383.png';

const CardBox = () => {
    return (
        <div>
            <div  className="container">
                <div id="books" class="card-deck py-5">
                    <div className="card  align-items-center">
                        <img className="img-fluid card-img-top" src={pic1} alt="book"/>
                        <div className="card-body">
                            <h4 className="card-title mb-0 text-center">57K</h4>
                            <p className="card-text">Instructors</p>
                        </div>
                    </div>
                    <div className="card align-items-center">
                        <img className="card-img-top" src={pic2} alt=""/>
                        <div className="card-body">
                            <h4 className="card-title mb-0 text-center">295M</h4>
                            <p className="card-text">Course Enrollments</p>
                        </div>
                    </div>
                    <div className="card align-items-center">
                        <img className="card-img-top" src={pic3} alt=""/>
                        <div className="card-body">
                            <h4 className="card-title mb-0 text-center">40+</h4>
                            <p className="card-text">Languages</p>
                        </div>
                    </div>
                    <div className="card align-items-center">
                        <img className="card-img-top" src={pic4} alt=""/>
                        <div className="card-body">
                            <h4 className="card-title mb-0 text-center">100M</h4>
                            <p className="card-text">Students</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardBox;