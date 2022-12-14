import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Course from "../Pages/Course/Course";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";

import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import UserDetails from "../Pages/UserDetails/UserDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login />,
      },
      
      {
        path: "/course/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(`https://server-ass10.vercel.app/course/${params.id}`),
      },
      {
        path: "courses",
        element: <Courses></Courses>,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: '/checkout/:id',
        element: <PrivateRoute> <CheckOut/></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://server-ass10.vercel.app/course/${params.id}`),

      },
      {
        path: '/userdetails',
        element: <UserDetails/>
      }
    ],
  },
]);
