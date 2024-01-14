import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto max-w-5xl py-10">{children}</div>;
};

export default Layout;
