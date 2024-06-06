// import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const showNav = () => {
    setShow(!show);
  };

  return (
    <nav className={`w-screen   py-3 shadow-xl bg-red-100 s`}>
      <div className="flex justify-between items-center max-w-[1200px]  mx-auto relative">
        <h1 className="text-3xl md:text-4xl lg:text-5xl ml-8 lg:ml-0  font-bold items-center ">
          Car<span className=" text-yellow-500">Hub</span>
        </h1>
        <div className="hidden sm:flex items-center">
          <div className=" flex gap-5 items-center font-semibold px-5 py-2 bg-red-400 rounded-full mr-8 lg:mr-0">
            <Link
              className="hover:bg-yellow-400 px-1 lg:px-10 md:px-5 py-2 rounded-full"
              to="Home" spy={true} smooth={true} offset={50} duration={500}
            >
              Home
            </Link>
            <Link
              className="hover:bg-yellow-400 px-1 lg:px-10 md:px-5 py-2 rounded-full"
              to="about" spy={true} smooth={true} offset={50} duration={500}
            >
              About
            </Link>
            <Link
              className="hover:bg-yellow-400 px-1 lg:px-10 md:px-5 py-2 rounded-full"
              to="feature" spy={true} smooth={true} offset={50} duration={500}
            >
              Features
            </Link>
            <Link
              className="hover:bg-yellow-400 px-1 lg:px-10 md:px-5 py-2 rounded-full"
              to="blog" spy={true} smooth={true} offset={50} duration={500}
            >
              Blog
            </Link>
            <Link
              className="hover:bg-yellow-400 px-1 lg:px-10 md:px-5 py-2 rounded-full"
              to="contact" spy={true} smooth={true} offset={50} duration={500}
            >
              Contact
            </Link>

            <button className="text-xl">
                {/* DarKmode to be Implemanted/ */}
            </button>
          </div>
        </div>

        {/* MObile view */}
        <div
          className="flex text-2xl mr-8 sm:hidden"
          onClick={() => {
            showNav();
          }}
        >
          {show ? <GiHamburgerMenu /> : <MdClose />}
        </div>

        <div
          id="mobNav"
          className={`${
            show ? "hidden" : "block"
          } sm:hidden absolute w-full flex flex-col top-14 gap-5 p-5 bg-[#F9C747] rounded-lg font-bold text-2xl duration-500 transition-all z-20`}
        >
           <Link
              className="hover:bg-yellow-400 px-1 lg:px-10 md:px-5 py-2 rounded-full"
              to="Home"  spy={true} smooth={true} offset={50} duration={500}
            >
              Home
            </Link>
            <Link 
              className="hover:bg-yellow-400 px-1 lg:px-10 md:px-5 py-2 rounded-full"
              to="about" spy={true} smooth={true} offset={50} duration={500}
            >
              About
            </Link>
            <Link
              className="hover:bg-yellonkw-400 px-1 lg:px-10 md:px-5 py-2 rounded-full"
              to="feature" spy={true} smooth={true} offset={50} duration={500}
            >
              Features
            </Link>
            <Link
              className="hover:bg-yellow-400 px-1 lg:px-10 md:px-5 py-2 rounded-full"
              to="blog" spy={true} smooth={true} offset={50} duration={500}
            >
              Blog
            </Link>
            <Link
              className="hover:bg-yellow-400 px-1 lg:px-10 md:px-5 py-2 rounded-full"
              to="contact" spy={true} smooth={true} offset={50} duration={500}
            >
              Contact
            </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// className="hover:bg-yellow-400 px-10 py-2 rounded-full"
