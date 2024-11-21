import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "darkgray",
    color: "white",
    textAlign: "center",
    padding: "1rem",
    position: "relative",
    bottom: "0",
    width: "100%",
  };

  return (
    <div style={footerStyle}>
      <h6>All rights reserved &copy;</h6>
    </div>
  );
};

export default Footer;
