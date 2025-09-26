import React from "react";
import Nav from "../components/Nav";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}

export default layout;
