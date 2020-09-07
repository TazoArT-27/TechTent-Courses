import React,{ useState} from 'react';
import Card from '../Card/Card'
import FakeData from '../FakeData/FakeData';
import './Courses.css';
import MyCourses from '../MyCourses/MyCourses';


const Courses = () => {
    const fake = FakeData;
   
    const [data, setData] = useState(fake);
    //console.log(data.id);
    const [course, setCourse] = useState([]);
    const handleAddCourse = (courses) => {
        console.log("product added",courses);
        const newCourse = [...course, courses];
        setCourse(newCourse);
    }
    return (
        
        <>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="my-5">
                   <h1 className="text-center course-header">Our Courses</h1>
                </div>
                   <div className="row">
                     {
                         data.map((val, index) => 
                             <Card showButton={true} showTitle={true} handleAddCourse={handleAddCourse} key={index} data={val}></Card>
                         )
                     }
                   </div>
                </div>
                <div className="col-10 mx-auto">
                <div className="enrolled">
                      <MyCourses course={course}></MyCourses>
                </div>
                </div>
            </div>
        </div>
        
        </>

    );
};

export default Courses;