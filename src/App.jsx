import React from "react";
import Hero from "./sections/Hero";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./sections/Projects";
import Success from "./sections/Success";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Hero />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/success",
      element: <Success />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
