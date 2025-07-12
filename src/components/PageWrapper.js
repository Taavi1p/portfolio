import React from "react";
import "../styles/global.css"; // Import global styles

const PageWrapper = ({ children }) => {
  return <div className="page-wrapper">{children}</div>;
};

export default PageWrapper;