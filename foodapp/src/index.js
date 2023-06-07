import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import RestaurantDetail from "./components/RestaurantDetail";


const AppLayout =()=>{
  return(
  <>
  <Header />
  <Outlet />
</>
  )

}

const appRowter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/about",
        element: <Aboutus />,
      },
      {
        path: "/contact",
        element: <Contactus />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurantdetail/:id",
        element: <RestaurantDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    (<RouterProvider router={appRowter} />)
  );
