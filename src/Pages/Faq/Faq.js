import React from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <div>
      <h5 className="w-25 mx-auto border-bottom border-4 border-primary pb-3 mt-5 text-center">
        Freequently Asked Questions
      </h5>
      <Accordion defaultActiveKey="0" className="w-75 mx-auto mt-3  p-4">
        <Accordion.Item eventKey="0" className="shadow mb-3 border-0">
          <Accordion.Header style={{}}>
            {" "}
            <span className="fw-semibold"> What is firebase?</span>{" "}
          </Accordion.Header>
          <Accordion.Body className="text-white bg-primary ">
            Firebase provides tools to grow your app and business, for startups
            & global enterprises. Get your app up and running quickly & securely
            with fully managed backend infrastructure. Monitor App Performance.
            15+ Products & Solutions. Accelerate Development.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="shadow mb-3">
          <Accordion.Header style={{}}>
            {" "}
            <span className="fw-semibold"> What is the difference between firebase and mongobd?</span>{" "}
          </Accordion.Header>
          <Accordion.Body className="text-white bg-primary ">
            Both Firebase and MongoDB are modern post-relational databases that
            allow for flexibility and speed to market, while Firebase is more
            popular for smaller applications, and MongoDB moreso for big data
            and high-performance use cases.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="shadow mb-3">
          <Accordion.Header style={{}}>
            {" "}
            <span className="fw-semibold">
              {" "}
              Which authentication methods have you ever used for your project
              purpose?
            </span>{" "}
          </Accordion.Header>
          <Accordion.Body className="text-white bg-primary ">
             Password-based authentication :-  Passwords are the most common
            methods of authentication. Passwords can be in the form of a string
            of letters, numbers, or special characters. To protect yourself you
            need to create strong passwords that include a combination of all
            possible options.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="shadow mb-3">
          <Accordion.Header style={{}}>
            {" "}
            <span className="fw-semibold">
              {" "}
             What is the difference between athentication and authorization?
            </span>{" "}
          </Accordion.Header>
          <Accordion.Body className="text-white bg-primary ">
          Authentication and authorization are two vital information security processes that administrators use to protect systems and information. Authentication verifies the identity of a user or service, and authorization determines their access rights.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;
