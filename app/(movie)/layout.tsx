import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Movie BAST",
};

const Layout = ({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) => {
  return (
    <div>
      {modal}
      {children}
    </div>
  );
};

export default Layout;
