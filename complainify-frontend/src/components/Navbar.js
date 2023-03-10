import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <a
          href='https://flowbite.com/'
          className='flex items-center'>
          <img
            src='https://flowbite.com/docs/images/logo.svg'
            className='h-6 mr-3 sm:h-9'
            alt='Logo'
          />
          <span
            className='self-center text-3xl font-semibold whitespace-nowrap dark:text-white text-gray-700'
            style={{ fontFamily: 'Roboto' }}>
            Complainify
          </span>
        </a>
        <div class='flex items-center md:order-2'>
          <button
            type='button'
            data-dropdown-toggle='language-dropdown-menu'
            class='inline-flex items-center justify-center p-2 text-sm text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white font-medium'>
            English
          </button>
          <div
            class='z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700'
            id='language-dropdown-menu'>
            <ul
              class='py-1'
              role='none'>
              <li>
                <a
                  href='#'
                  class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'
                  role='menuitem'>
                  <div class='inline-flex items-center'>English</div>
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'
                  role='menuitem'>
                  <div class='inline-flex items-center'>Hindi</div>
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'
                  role='menuitem'>
                  <div class='inline-flex items-center'>Odia</div>
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle='mobile-menu-language-select'
            type='button'
            class='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='mobile-menu-language-select'
            aria-expanded='false'>
            <span class='sr-only'>Open main menu</span>
            <svg
              class='w-6 h-6'
              fill='currentColor'
              aria-hidden='true'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clip-rule='evenodd'></path>
            </svg>
          </button>
        </div>
        <div
          className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
          id='navbar-sticky'>
          <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <Link
                to='/'
                className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white text-xl'
                aria-current='page'>
                Home
              </Link>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-xl'>
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-xl'>
                Services
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-xl'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
