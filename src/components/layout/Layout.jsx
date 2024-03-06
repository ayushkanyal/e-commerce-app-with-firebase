import React from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
