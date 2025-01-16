import React from "react";
import { Link } from "react-router";
import "./Navbar.css";
export function Navbar() {
  return (
    <>
      <header className="bg-green-500 shadow-lg">
        <nav className="px-4 py-3">
          <ul className="flex text-white space-x-4">
            <h1 className="mt-1 text-xl mr-4 ">Green Shadow</h1>
            <Link to="/" className="custom-link">
              Dashboard
            </Link>
            <Link to="/field" className="custom-link">
              Field
            </Link>
            <Link to="/crop" className="custom-link">
              Crop
            </Link>
            <Link to="/staff" className="custom-link">
              Staff
            </Link>
            <Link to="/equipment" className="custom-link">
              Equipment
            </Link>
            <Link to="/log" className="custom-link">
              Log
            </Link>
            <Link to="/vehicle" className="custom-link">
              Vehicle
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}