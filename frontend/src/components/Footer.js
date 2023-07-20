import React from 'react';

const Footer = () => {

  return (
    <footer className="bg-gray-900 text-white">

      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">

        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-teal-400">Free</span> until you're ready to launch
        </h1>

        <div>
          <input
            type="text"
            placeholder="Enter your phone number"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full">
            Request Code
          </button>
        </div>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:ml-12">

        <ul>
          <h1 className="mb-1 font-semibold">Products</h1>
          <li >
            <a className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6" href=''
            >Drag And Drop</a>
          </li>
          <li >
            <a className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6" href='#'
            >Drag And Drop</a>
          </li>
          <li >
            <a className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6" href='#'
            >Drag And Drop</a>
          </li>
        </ul>

        <ul>
          <h1 className="mb-1 font-semibold">Products</h1>
          <li >
            <a className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6" href='#'
            >Drag And Drop</a>
          </li>
          <li >
            <a className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6" href='#'
            >Drag And Drop</a>
          </li>
          <li >
            <a className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6" href='#'
            >Drag And Drop</a>
          </li>
        </ul>

        <ul>
          <h1 className="mb-1 font-semibold">Products</h1>
          <li >
            <a className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6" href='#'
            >Drag And Drop</a>
          </li>
          <li >
            <a className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6" href='#'
            >Drag And Drop</a>
          </li>
          <li >
            <a className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6" href='#'
            >Drag And Drop</a>
          </li>
        </ul>

        <ul>
          <h1 className="mb-1 font-semibold">Products</h1>
          <li >
            <a className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6" href='#'
            >Drag And Drop</a>
          </li>
          <li >
            <a className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6" href='#'
            >Drag And Drop</a>
          </li>
          <li >
            <a className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6" href='#'
            >Drag And Drop</a>
          </li>
        </ul>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">

        <span>© 2023 Blog App. All rights reserved.</span>
        <span>Terms & Privacy Policy</span>

        <div className="text-teal-500">

          <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300 ">
            <i className="fa-brands fa-facebook"></i>
          </span>
          <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300 ">
            <i className="fa-brands fa-twitter"></i>
          </span>
          <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300 ">
            <i className="fa-brands fa-github"></i>
          </span>
          <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300 ">
            <i className="fa-brands fa-linkedin"></i>
          </span>
          <span className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300 ">
            <i className="fa-brands fa-discord"></i>
          </span>

        </div>

      </div>

    </footer>
  );
};

export default Footer;