import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    // State to toggle the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="">
            <nav className="  ">
                <div className="container mx-auto ">
                    <div className="flex justify-around items-center py-4">
                        {/* Logo */}
                        <div className="text-2xl font-bold">
                            <a href="/">Shoe Planet</a>
                        </div>

                        {/* Links (Desktop) */}
                        <div className="hidden lg:flex space-x-6">
                            <Link to="/" className=" hover:text-gray-200 font-bold transition">
                                Home
                            </Link>
                            <Link to="/allProduct" className=" hover:text-gray-200 transition font-bold">
                                All Shoes
                            </Link>
                            <Link to="/about" className=" hover:text-gray-200 transition font-bold">
                                About
                            </Link>
                            <Link to="/contact" className=" hover:text-gray-200 transition font-bold">
                                Contact
                            </Link>
                            
                        </div>
                        <div>
                            <div className="relative  inline-block text-left">
                                {/* Dropdown Toggle */}
                                <div className="hidden lg:flex ">
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium  rounded-md "
                                    >
                                        Options
                                        <svg
                                            className="-mr-1 ml-2 h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                {/* Dropdown Menu */}
                                {isOpen && (
                                    <div
                                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="menu-button"
                                        tabIndex="-1"
                                    >
                                        <div className="py-1" role="none">
                                           
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                                tabIndex="-1"
                                                id="menu-item-0"
                                                onClick={()=>{setIsOpen(!isOpen)}}
                                            >
                                                Profile 
                                            </a>
                                            <Link
                                                to="/login"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                                tabIndex="-1"
                                                id="menu-item-1"
                                                onClick={()=>{setIsOpen(!isOpen)}}
                                            >Login
                                            </Link>
                                            <Link
                                                to="/register"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                                tabIndex="-1"
                                                id="menu-item-2"
                                                onClick={()=>{setIsOpen(!isOpen)}}
                                            >
                                                Sign up
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Hamburger Menu (Mobile) */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className=" focus:outline-none"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden">
                            <a
                                href="/"
                                className="block px-4 py-2  hover:bg-slate-300 transition"
                            >
                                Home
                            </a>
                            <a
                                href="/AllProduct"
                                className="block px-4 py-2  hover:bg-slate-300 transition"
                            >
                                All Product
                            </a>
                            <a
                                href="/about"
                                className="block px-4 py-2  hover:bg-slate-300 transition"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 hover:bg-slate-300 transition"
                            >
                                Contact
                            </a>
                            
                           
                            
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
