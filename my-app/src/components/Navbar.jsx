import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // dropdown
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600 dark:text-teal-300" href="#">
              <img src={logo} alt="Logo" className=" w-32 h-32 invert" />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Careers
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    History
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Projects
                  </a>
                </li>

                <li ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-centertext-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  >
                    Services <ChevronDown className="ml-1 h-5 w-4" />
                  </button>
                  {dropdownOpen && (
                    <ul className="absolute left-0 mt-2 w-36 rounded-md shadow-lg bg-white border z-50">
                      <li>
                        <button
                          onClick={() => setDropdownOpen(false)}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Blogs/Articles
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setDropdownOpen(false)}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Illness Reports
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setDropdownOpen(false)}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Online Consultation
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setDropdownOpen(false)}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Health Analysis
                        </button>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
