import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import  { AuthProvider } from "../../Context/AuthContext";
import Course from "../Course/Course";
import './Courses.css'

const Courses = () => {
  const [courses, setCourses] = useState([]);

  const {isToggle, setIsToggle}=useContext(AuthProvider);

  useEffect(() => {
    fetch("https://server-ass10.vercel.app/courses/")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className={isToggle ? 'true mb-5' : 'false'}>
      <Container >
      <Row>
        <Col lg="3" className=" mt-4">
          <h5 className="mb-3 border-bottom border-2 w-50 pb-2">Course Topics</h5>
          {courses.map((course) => (
            <p key={course.id}>
              {" "}
              <Link className={isToggle ? 'text-decoration-none text-dark ' : 'text-decoration-none text-light'} to={`/course/${course.id}`}> {course?.name} </Link>
            </p>
          ))}
        </Col>
        <Col lg="9">
          <Container>
            <Row>
              {courses.map((course) => (
                <Col md="4">
                  <Link className="text-decoration-none" to={`/course/${course.id}`}>
                    <Course  key={course.id} course={course}></Course>
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Courses;
