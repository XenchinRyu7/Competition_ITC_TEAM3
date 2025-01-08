import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UserLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <div className="w-full">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default UserLayout;
