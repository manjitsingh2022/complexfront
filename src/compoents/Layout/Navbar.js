import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useCommonState } from "../../common";

function Header({ handleLogout, isLoggingOut }) {
  const { loggedIn } = useSelector((state) => state.authentication);
  const [isDrawerOpen, setIsDrawerOpen] = useCommonState(false);
  const showHideDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleMouseLeave = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <header className="bg-gray-300 text-white py-4 px-6 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between content-center ">
          <Link to="/" className="text-black text-2xl font-bold">
            Your Logo
          </Link>
          {loggedIn ? (
            <ul className="flex space-x-4  items-center">
              <li>
                <Link to="/" 
          className="text-black hover:text-gray-400 border-2 border-transparent hover:border-black hover:border-solid hover:border-5 p-2 transition duration-300 ease-in-out"                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/protected"
                  className="text-black hover:text-gray-400 border-2 border-transparent hover:border-black hover:border-solid hover:border-5 p-2 transition duration-300 ease-in-out"
                >
                  Protected Page
                </Link>
              </li>

              <li >
                <div className="relative  text-left"  >
                  <div>
                    <button
                      type="button"
                      className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={showHideDrawer}
                      onMouseLeave={handleMouseLeave}

                    >
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="user photo"
                      />
                    </button>
                  </div>

                  <div
                    className={`absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                      isDrawerOpen ? "" : "hidden"
                    }`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1" role="none">
                      <Link
                        to="#"
                        className="text-gray-700 block px-4 py-2 text-sm flex items-center hover:bg-gray-200"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                      >
                        <svg
                          className="w-4 h-4 mr-2 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z"></path>
                          <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z"></path>
                        </svg>
                        Edit
                      </Link>
                      <Link
                        to="#"
                        className="text-gray-700 block px-4 py-2 text-sm flex items-center hover:bg-gray-200"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                      >
                        <svg
                          className="w-4 h-4 mr-2 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z"></path>
                          <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z"></path>
                        </svg>
                        Duplicate
                      </Link>
                    </div>
                    <div className="py-1" role="none">
                      <Link
                        to="#"
                        className="bg-red-300 text-gray-700 block px-4 py-2 text-sm flex items-center hover:bg-gray-200"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-6"
                        onClick={handleLogout}
                        disabled={isLoggingOut}
                      >
                        <svg
                          className="w-4 h-4 mr-2 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Logout
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          ) : (
            <Link
              to="/login"
              classNameName="bg-green-500 text-black font-bold py-2 px-4 rounded"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
