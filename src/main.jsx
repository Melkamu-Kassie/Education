import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Programs from "./Components/Programs/programs.jsx";
import About from "./Components/About/About.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Hero from "./Components/Hero/hero.jsx";
import Campus from "./Components/Campus/Campus.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/hero",
    element: <Hero />,
  },
  {
    path: "/program",
    element: <Programs />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/campus",
    element: <Campus />,
  },
  {
    path: "/testimonials",
    element: <Testimonials />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
