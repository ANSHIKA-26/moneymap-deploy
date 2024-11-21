import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh", // Ensure the layout takes full viewport height
  };

  const contentStyle = {
    flex: "1", // Push the footer to the bottom
  };

  return (
    <div style={layoutStyle}>
      <Header />
      <div style={contentStyle}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
