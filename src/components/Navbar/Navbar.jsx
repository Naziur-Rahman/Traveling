
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className='bg-gradient-to-r from-primary to secondary'>
          <div className="container py-[2px] sm:block hidden">
            <div className="flex justify-between py-[2px]">
              <p>20% off on next booking</p>
              <p>Mobile No. +880 17195 0601</p>
            </div>
          </div>
        </div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><NavLink to={"/"}>Home</NavLink></li>
              <li><NavLink to={"/blogs"}>Blogs</NavLink></li>
              <li><NavLink to={"/places"}>Best Places</NavLink></li>
              <li><NavLink to={"/about"}>About Us</NavLink></li>
              <li>
                <a>Quick Link</a>
                <ul className="p-2">
                  <li><NavLink to={"/services"}>Our_Services</NavLink></li>
                  <li><NavLink to={"/location"}>Location</NavLink></li>
                  <li><NavLink to={"/contact"}>Contact_Us</NavLink></li>
                </ul>
              </li>
              
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><img src="/src/assets/logo.jpg" alt="logo" className="h-[55px] w-[65px]"/></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/blogs"}>Blogs</NavLink></li>
            <li><NavLink to={"/places"}>Best Places</NavLink></li>
            <li><NavLink to={"/about"}>About Us</NavLink></li>
            <li>
              <details className="z-30 ">
                <summary>Quick Link</summary>
                <ul className="p-2">
                  <li><NavLink to={"/services"}>Our_Services</NavLink></li>
                  <li><NavLink to={"/location"}>Location</NavLink></li>
                  <li><NavLink to={"/contact"}>Contact_Us</NavLink></li>
                </ul>
              </details>
            </li>
            
          </ul>
        </div>
        <div className="navbar-end">
          <button className='bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full mx-2' >
                Book Now 
              </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;