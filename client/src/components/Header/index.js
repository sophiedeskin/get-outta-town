import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

export default function Header() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
    return (

    <section className="w-full bg-blue-200 p-12">
       
              {/* <div class="text-center text-white">
                <h1 class="font-GT-Pressura-Regular font-bold text-5xl">Get Outta Town</h1>
                <br/>
                <div class="nav">
                <Link class="font-GT-Pressura-Regular text-xl pr-8">View Trips</Link>
                <Link class="font-GT-Pressura-Regular text-xl pr-8">Login</Link>
                <Link class="font-GT-Pressura-Regular text-xl pr-8">Signup</Link>
                <Link class="font-GT-Pressura-Regular text-xl pr-8">About Us</Link>
                <Link class="font-GT-Pressura-Regular text-xl pr-8">Contact</Link>
                </div>
                <div className="container flex-row justify-space-between-lg justify-center align-center"> */}
        <div>
          <Link className="text-center text-white text-5xl" to="/">
            <h1 className="">Get Outta Town</h1>
          </Link>
        </div>
        <nav className="flex justify-center pt-8">
          {Auth.loggedIn() ? (
            <>
              <Link className="font-GT-Pressura-Regular text-xl pr-8 text-center text-white hover:text-blue-400" to="/">
                Home
              </Link>
              <Link className="font-GT-Pressura-Regular text-xl pr-8 text-center text-white hover:text-blue-400" to="/dashboard">View Your Trips</Link>
              <Link className="font-GT-Pressura-Regular text-xl pr-8 text-center text-white hover:text-blue-400" to="/contact">
                Contact Us
              </Link>
              <Link className="font-GT-Pressura-Regular text-xl pr-8 text-center text-white hover:text-blue-400" to="/aboutus">
                About Us
              </Link>
              <button className="font-GT-Pressura-Regular text-xl pr-8 text-center text-white hover:text-blue-400" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="font-GT-Pressura-Regular text-xl pr-8 text-center text-white hover:text-blue-400" to="/">
                Home
              </Link>
              <Link className="font-GT-Pressura-Regular text-xl pr-8 text-center text-white hover:text-blue-400" to="/login">
                Login
              </Link>
              <Link className="font-GT-Pressura-Regular text-xl pr-8 text-center text-white hover:text-blue-400" to="/signup">
                Signup
              </Link>
              <Link className="font-GT-Pressura-Regular text-xl pr-8 text-center text-white hover:text-blue-400" to="/contact">
                Contact Us
              </Link>
              <Link className="font-GT-Pressura-Regular text-xl pr-8 text-center text-white hover:text-blue-400" to="/aboutus">
                About Us
              </Link>
            </>
          )}
        </nav>
      {/* </div>
              </div> */}
    </section>

    )
}
