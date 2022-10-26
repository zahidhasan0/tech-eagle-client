import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses/")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <Container>
      <Row>
        <Col lg="3" className=" border">
        <h4>All Courses</h4>
        {
            courses.map(course=> <p key={course.id}> <Link to={`/courses/${course.id}`} > {course?.name} </Link></p>)
        }
            
        </Col>
        <Col lg="9" className="border">
          <h3>This is course container</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
