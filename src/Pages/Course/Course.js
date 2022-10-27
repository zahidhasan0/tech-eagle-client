import React, { useContext } from "react";
import { AuthProvider } from "../../Context/AuthContext";

const Course = ({ course }) => {
  const {isToggle, setIsToggle}=useContext(AuthProvider);

  const { name, title, id, instructor, image_url, price, rating } = course;
  console.log(course);
  return (
    <div className= {isToggle ? "rounded p-3 shadow mt-4 text-decoration-none text-dark bg-light" : "rounded p-3 shadow mt-4 text-decoration-none text-dark bg-light" }  style={{ height: "350px" }}>
      <div>
        <img
          className="w-100 mb-2"
          style={{ height: "200px" }}
          src={image_url}
          alt=""
        ></img>
        <h6 style={{ height: "40px" }}>{title} </h6>
      </div>
      <div>
        <span>with</span>
        <div className="d-flex  align-items-center  ">
          <img className="rounded-circle me-2" style={{ height: "40px" }} src={instructor?.img} alt=""></img>
          <h6>{instructor?.name} </h6>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Course;
