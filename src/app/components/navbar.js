"use client";
import { Fragment } from "react";
import Link from "next/link";
import NavLink from "./navlink";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./menuoverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "About",
    path: "#sec-about",
  },
  {
    title: "Projects",
    path: "#sec-projects",
  },
  {
    title: "Contact",
    path: "#sec-contact",
  },
];
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  function handleClickClose(val) {
    console.log("val", val);
    setNavbar(val);
  }
  return (
    <Fragment>
      <nav className="fixed top-0 left-0 right-0 z-10 bg-[#fff] shadow ">
        <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-3">
          <Link href="/" className="text-4xl font-bold">
            Portfolio
          </Link>
          <div className="mobile-menu block md:hidden">
            {!navbar ? (
              <button
                onClick={() => setNavbar(true)}
                className="flex items-center px-3 py-2"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            ) : (
              <button
                onClick={() => setNavbar(false)}
                className="flex items-center px-3 py-2 "
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            )}
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <NavLink href={item.path} title={item.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {navbar && (
          <MenuOverlay links={navLinks} onClickClose={handleClickClose} />
        )}
      </nav>
    </Fragment>
  );
}

export default Navbar;
