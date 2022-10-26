import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'courses',
        element: <Courses></Courses>
      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'blog',
        element: <Blog/>
      },
      {
        path: 'faq',
        element: <Faq/>
      }
    ],
  },
]);