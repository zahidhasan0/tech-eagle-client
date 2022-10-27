import React from "react";

import { Card } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
// import {ReactToPdf } from "react-to-pdf"
import Pdf from "react-to-pdf";
import './CourseDetails.css'


const ref = React.createRef();


const CourseDetails = () => {
  const course = useLoaderData();
  const {
    name,
    title,
    id,
    instructor,
    image_url,
    price,
    rating,
    details,
    class_time,
    total_student,
  } = course;

  
  
  return (
    <div ref={ref} className="coursedetails mx-auto bg-image hover-zoom">
      <Card className="  mt-5 shadow p-4">
        <div className=" border-bottom mb-5 d-flex justify-content-between p-2">
        <h4> {title} </h4>

        <Pdf targetRef={ref} filename={`${name}`}>
        {({ toPdf }) => <button onClick={toPdf} className="border-0"> <FaDownload></FaDownload> </button>}
      </Pdf>

      
        </div>
      <Card.Img className="w-50 mx-auto" variant="top" src={image_url} />
      <Card.Body>
        
        <div className="d-flex  align-items-center my-3  ">
          <span>instructor:</span>-
            <h6 className="ms-3">{instructor?.name} </h6>
        </div>
        <p>Total students:- {total_student} </p>
        <p>Class time :- {class_time} </p>
        <p>Price:- {price} </p>
        <p>Ratings:- {rating?.number}</p>
        <Card.Text><span className="fw-semibold"> About {name} :-</span> {details}</Card.Text>

      </Card.Body>

      <button className="text-decoration-none border-0 bg-primary"> <Link className="text-decoration-none text-white" to={`/checkout/${id}`}>Get premium access</Link></button>
    </Card>

    {/* <ReactToPdf targetRef={ref} filename="div-blue.pdf">
        {({toPdf}) => (
            <button onClick={toPdf}>Generate pdf</button>
        )}
    </ReactToPdf> */}
    </div>
  );
};

export default CourseDetails;
