import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Projects from "../pages/Projects.jsx";
import Education from "../pages/Education";
import Certification from "../pages/Certification";
import Skills from "../pages/Skills.jsx";
import Blogs from "../pages/Blogs.jsx";
import Contact from "../pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "education",
    element: <Education />,
  },
  {
    path: "certification",
    element: <Certification />,
  },
  {
    path: "skills",
    element: <Skills />,
  },
  {
    path: "blogs",
    element: <Blogs />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: (
      <div>
        <h1>Error Page Buddy</h1>
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
