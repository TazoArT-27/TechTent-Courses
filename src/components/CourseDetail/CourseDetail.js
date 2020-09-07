import React from 'react';
import { useParams } from 'react-router-dom';
import FakeData from '../FakeData/FakeData';
import Card from '../Card/Card';
// import DetailCard from '../DetailCard/DetailCard';


const CourseDetail = () => {
    const {courseId} = useParams();
    
    const fake = FakeData.find(course => course.id == courseId);
    console.log(fake);
    console.log(FakeData);
    return (
        <>
            {/* <h1>{courseId} coming soon</h1> */}
            <Card showButton={false} showTitle={false} data={fake}></Card>
            
        </>
    );
};

export default CourseDetail;