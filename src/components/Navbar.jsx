import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { UserLinkContext } from "../context/userLink/UserLinkContext";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [navLink, setNavLink] = useState([]);
  const [open, setOpen] = useState(false);

  const { getLinkDetails } = useContext(UserLinkContext);
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    setNavLink(getLinkDetails(userInfo.userrole));
  }, [userInfo]);

  return (
    <header className="w-full shadow-md bg-white/95 backdrop-blur-md sticky top-0 left-0 z-50 font-poppins">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        <Link to="/" className="text-2xl font-extrabold tracking-wide text-gray-900">
          Edu<span className="text-blue-600">Tech</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[17px] font-medium text-gray-700">
          {navLink.map((page, id) => (
            <Link key={id} to={page.linkUrl}>
              <li className="hover:text-blue-600 transition duration-200 cursor-pointer">
                {page.linkname}
              </li>
            </Link>
          ))}
        </ul>

        {/* Username + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <span className="hidden md:block text-gray-600 font-medium">
            {userInfo.username}
          </span>

          {/* Hamburger */}
          <button
            className="md:hidden text-[26px]"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white shadow-lg py-4 px-6 space-y-4">
          {navLink.map((page, id) => (
            <Link key={id} to={page.linkUrl}>
              <li
                onClick={() => setOpen(false)}
                className="text-gray-700 text-lg font-medium hover:text-blue-600 transition"
              >
                {page.linkname}
              </li>
            </Link>
          ))}

          <li className="text-gray-600 font-medium border-t pt-3">
            {userInfo.username}
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;
