import React from "react";
import Header from "src/components/Header";

const Layout: React.FC = ({ children }) => {
  return (<>
    <Header />
    <div>{children}</div>
  </>);
};

export default Layout;
