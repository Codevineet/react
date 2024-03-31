import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./App";
import AboutUs from "./components/About";
import ContactUs from "./components/Contact";
import ErrorOpps from "./components/ErrorTwo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Box from "./components/RestaurantBox";
import RestaurantMenu from "./components/RestaurantMenu";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Box />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorOpps />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
