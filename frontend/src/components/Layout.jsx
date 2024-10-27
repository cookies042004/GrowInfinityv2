import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
