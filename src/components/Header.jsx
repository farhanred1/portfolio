import { useState } from "react";
// import { Link } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

function Header() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav
      className={`fixed top-0 w-full z-[999] ${navColour ? "transition ease-in-out bg-[#222831fb]" : "bg-[#222831fb]"}`}
    >
      <div className="container mx-auto px-10">
        <div className="flex-col items-center justify-between py-4">

          <button
            className="md:hidden"
            onClick={() => {
              updateExpanded(!expand);
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {expand ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
          <div
            className={`${expand ? "flex" : "hidden"
              } md:flex md:items-center md:w-full mt-2 md:mt-0 justify-center md:justify-between`}
          >
            <div className="text-emerald-500 text-2xl font-bold hidden md:block">FR</div>
            <ul className="md:flex md:space-x-4">
              <li className="py-1 nav-item">
                <a
                  href="/"
                  style={{ color: "white" }}
                  className="flex items-center"
                  rel="noopener noreferrer"
                >
                  <AiOutlineHome className="mr-1" /> Home
                </a>

              </li>
              <li className="py-1 nav-item">
                <a
                  href="/about"
                  style={{ color: "white" }}
                  className="flex items-center"
                  rel="noopener noreferrer"
                >
                  <AiOutlineUser className="mr-1" /> About
                </a>

              </li>
              <li className="py-1 nav-item">
                <a
                  href="/projects"
                  style={{ color: "white" }}
                  className="flex items-center"
                  rel="noopener noreferrer"
                >
                  <AiOutlineFundProjectionScreen className="mr-1" /> Projects
                </a>

              </li>
              <li className="py-1 nav-item">
                <a
                  href="/contact"
                  style={{ color: "white" }}
                  className="flex items-center"
                  rel="noopener noreferrer"
                >
                  <BsTelephone className="mr-1" /> Contact
                </a>

              </li>
            </ul>

          </div>
        </div>
      </div>
      <hr className="border-gray-200 sm:mx-auto dark:border-gray-700" />
    </nav>
  );
}

export default Header;