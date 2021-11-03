import React from 'react'
import './footer.css';

export default function index() {
    return (
        <footer className="relative bg-blueGray-200 pt-12 pb-0">
        <div className="items-center justify-center align-center text-gray-700">
         
            <div className="w-full bg-blue-200 p-10">
              <div className="items-center justify-center footer">
              
              <button className="bg-white text-gray-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <a href="https://github.com/sophiedeskin" target="_blank"><i className="fab fa-github"></i></a>
            </button>
            <button className="bg-white text-gray-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <a href="https://github.com/Giselle556" target="_blank"><i className="fab fa-github"></i></a>
            </button>
            <button className="bg-white text-gray-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <a href="https://github.com/Nephrim" target="_blank"><i className="fab fa-github"></i></a>
            </button>
               
              </div>
            </div>
         
        </div>
      </footer>
    )
}
