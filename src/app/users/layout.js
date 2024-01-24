import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <div>users header</div>
      {children}
      <div>users footer</div>
    </>
  );
};

export default layout;

//this layout.js will ad only header and footer to users page. It may be admin or visitor.
