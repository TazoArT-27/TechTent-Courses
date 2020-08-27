import React from 'react';
import'./MyCourses.css';
import FakeData from '../FakeData/FakeData'

const MyCourses = (props) => {
    const course = props.course;
   
    const totalPrice = course.reduce((total, FakeData) => total + FakeData.price, 0)
    
    return (
        <>
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            
                            <h2 className="text-center mycourse-header">Enrolled Courses</h2>
                            <div className="d-flex">
                            <div className="col-md-8">
                                {
                                    course.map(course => {
                                        return (
                                            <div className="d-flex">
                                            <div className="col-md-6">
                                            <div id="book" class="card-deck py-5">
                                                <div className="card  align-items-center">
                                                    <img className="img-fluid card-img-top" src={course.imgsrc} alt="book"/>
                                                    <div className="cards-body">
                                                        <h4 className="card-title mb-0 text-center px-2 py-2">{course.title}</h4>
                                                        <button className="btn btn-outline-primary ml-5 mb-3">Start Course</button>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="container">
                                                <p className="text-center mt-5 explain">{course.text}</p>
                                                </div>
                                            </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="col-md-4 enroll mt-5">
                                <h4 className="text-center">Enrolled: {course.length}</h4>
                                <h5 className="text-center">Total Price: ${totalPrice}</h5>
                            </div>
                            </div>
                            
                            
                            
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default MyCourses;