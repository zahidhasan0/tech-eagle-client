import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';

const CheckOut = () => {

    const course=useLoaderData();
    const {title,price,total_student, class_time,image_url}=course;
    return (
        
           <Card className='register-form mx-auto'>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p>Price : {price}</p>
        <p>Class-time: {class_time} </p>
        <p>total_student: {total_student} </p>
        <p>Rate the course: <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> </p>
      </Card.Body>
    </Card>
        
    );
};

export default CheckOut;