import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Crops from "./components/Crops";
import Equipment from "./components/Equipment";
import Fertilizers from "./components/Fertilizers";
import AddProduct from "./components/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   // Navbar + Footer fixed
    children: [
      { path: "", element: <Home /> },        // Default page = Home
      { path: "home", element: <Home /> },    // /home route
      { path: "aboutus", element: <AboutUs /> },
      { path: "contact", element: <Contact /> },
      { path: "crops", element: <Crops /> },
      { path: "equipment", element: <Equipment /> },
      { path: "fertilizers", element: <Fertilizers /> },
      {path: "addProduct", element: <AddProduct/>},
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
