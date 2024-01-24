import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import AllHouses from "./Components/AllHouses/AllHouses";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import HouseDetails from "./Components/AllHouses/HouseDetails";
import PrivateRoute from "./Components/PricateRoute/PricateRoute";
import OwnerDashboard from "./Components/Dashboard/OwnerDashboard/OwnerDashboard";
import AddNewHouse from "./Components/Dashboard/Pages/AddNewHouse/AddNewHouse";
import ManageMyHouse from "./Components/Dashboard/Pages/ManageMyHouse/ManageMyHouse";
import FeatureHouseDetails from "./Components/FeaturedHouses/FeatureHouseDetails";
import { HelmetProvider } from "react-helmet-async";
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allHouses",
        element: <AllHouses></AllHouses>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/allHouseDetails/:id",
        element: (
          <PrivateRoute>
            <HouseDetails></HouseDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://rentnest-server.vercel.app/allHouse/${params.id}`),
      },
      {
        path: "/featuredHouseDetails/:id",
        element: (
          <PrivateRoute>
            <FeatureHouseDetails></FeatureHouseDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://rentnest-server.vercel.app/featuredHouse/${params.id}`
          ),
      },
    ],
  },

  // Dashboard layout
  {
    path: "dashboard",
    element: <OwnerDashboard></OwnerDashboard>,
    children: [
      {
        path: "addNewHouse",
        element: <AddNewHouse></AddNewHouse>,
      },
      {
        path: "manageMyHouse",
        element: <ManageMyHouse></ManageMyHouse>,
      },
      // {
      //   path: "addProduct",
      //   element: <AddProduct></AddProduct>
      // },
      // {
      //   path: "manageProducts",
      //   element: <ManageProducts></ManageProducts>
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
