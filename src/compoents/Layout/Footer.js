import { Link, NavLink } from 'react-router-dom';


import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light-white text-black white:bg-gray-900 mt-auto p-4 bg-gray-200">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <NavLink to="/" className="flex items-center hover:text-gray-400" >
              <span className="self-center text-2xl font-semibold whitespace-nowrap white:text-black">App Name</span>
            </NavLink>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase white:text-black hover:text-gray-400">Resources</h2>
              <ul className="text-gray-500 white:text-gray-400 font-medium">
                <li className="mb-4">
                  <NavLink to="/custom-link" className="hover:underline hover:text-gray-400">Custom Link</NavLink>
                </li>
             
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase white:text-black hover:text-gray-400">Follow us</h2>
              <ul className="text-gray-500 white:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="" className="hover:underline hover:text-gray-400">Github</Link>
                </li>
                <li>
                  <Link to="" className="hover:underline hover:text-gray-400">Discord</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase white:text-black hover:text-gray-400">Legal</h2>
              <ul className="text-gray-500 white:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline hover:text-gray-400">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline hover:text-gray-400">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto white:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center white:text-gray-400">
            © 2023 <NavLink to="" className="hover:underline hover:text-gray-400">AppName™</NavLink>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link to="#" className="text-gray-500 hover:text-gray-900 white:hover:text-black">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
              </svg>
              <span className="sr-only hover:text-gray-400">Facebook page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
