import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Service from "./pages/Service";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/projects/:projectId",
          element: <Project />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/services/:serviceId",
          element: <Service />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
