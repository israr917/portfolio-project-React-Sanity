import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
export default function Navabar() {
  return (
    <>
      <header className="  bg-gray-800 ">
        <div className="container mx-auto flex justify-between">
          <nav className="flex" activeClassName="text-white-400 ">
            <NavLink
              to="/"
              exact
              className="inflex-flex items-center py-6 px-6 text-red-400 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
            >
              Israr Afridi{" "}
            </NavLink>{" "}
            <NavLink
              to="/post"
              className="text-small inline-flex item-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-400"
              activeClassName=" text-red-400"
            >
              {" "}
              Blog Posts{" "}
            </NavLink>{" "}
            <NavLink
              to="/project"
              className="text-small inline-flex item-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-400"
            >
              Projects{" "}
            </NavLink>{" "}
            <NavLink
              to="/about"
              className="text-small inline-flex item-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-400"
            >
              About Me!
            </NavLink>{" "}
          </nav>
          <div className="inline-flex  py-3 px-3 my-6">
            <SocialIcon
              url="https://www.linkedin.com/in/muhammad-israr-khan-03150717b/"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />{" "}
            <SocialIcon
              url="https://gitlab.com/israr917"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />{" "}
            <SocialIcon
              url="https://github.com/israr917"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 40, width: 45 }}
            />
          </div>{" "}
        </div>{" "}
      </header>
    </>
  );
}
