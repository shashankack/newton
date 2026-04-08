"use client";

import { usePathname } from "next/navigation";
import "../styles/navbar.scss";

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className={`header ${isHome ? "" : "header-solid"}`}>
      <div className="header-logo"></div>
      <a href="/" className="header-brand">
        SIGN-AGE
      </a>

      <nav className="header-nav">
        <a href="/about">About Us</a>
        <a href="/#contact">Make it Yours</a>
      </nav>
    </header>
  );
};

export default Navbar;
