import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://server-ass10.vercel.app/courses/")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <Container>
      <Row>
        <Col lg="3" className=" border">
          <h4>All Courses</h4>
          {courses.map((course) => (
            <p key={course.id}>
              {" "}
              <Link to={`/course/${course.id}`}> {course?.name} </Link>
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
  );
};

export default Courses;
