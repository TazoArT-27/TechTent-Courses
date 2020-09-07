import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound.js';
import MyCourses from './components/MyCourses/MyCourses.js';
import CourseDetail from './components/CourseDetail/CourseDetail.js';

function App() {
  
  return (
    <>
    <div className="">
      <Navbar></Navbar>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route exact path="/courses" component={Courses}></Route>
                <Route path="/course/:courseId" component={CourseDetail}></Route>
                {/* <Route exact path="/review" component={Review}></Route> */}
                <Route exact path="*" component={NotFound}></Route>

                <Redirect to= "/"></Redirect>
            </Switch>
            <Footer></Footer>
    </div>
    </>
  );
}

export default App;
