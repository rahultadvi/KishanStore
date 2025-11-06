// Layout.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar />   {/* Always visible */}
      <main className="container my-4">
        <Outlet />  {/* Page content load hoga */}
      </main>
      <Footer />   {/* Always visible */}
    </div>
  );
}

export default Layout;
