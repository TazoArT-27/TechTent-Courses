import React from 'react';
import './Contact.css';
import {NavLink} from 'react-router-dom'
import pic from '../../images/girl.jpg'

const Contact = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <h2 className="text-center contact-header">Contact Us</h2>
                        {/* <hr className="hr"/> */}
                    </div>
                </div>
                <div className="col-md-10 mx-auto">
                <div className="d-flex">
                    <div className="contact-form col-md-6">
                        <form>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter your name..."/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Phone</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="enter phone number..."/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Address</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter your address..."/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Go ahead, we are listening..."></textarea>
                            </div>
                            
                            
                            
                        </form>
                        <div className="mt-3">
                            <NavLink to='/' className="button">Submit</NavLink>
                        </div>
                    </div>
                    <div className="col-md-6  d-flex justify-content-center align-items-center">
                        <img src={pic} className="image" alt=""/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;