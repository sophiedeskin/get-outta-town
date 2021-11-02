import React from 'react'
import './dashboard.css';
import { Link } from 'react-router-dom';

export default function myTrips() {
    return (
        <Link 
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2  border rounded-full"
        type="submit"
        to={`/addtrip`}
                  // class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
              >Add a Trip</Link>
    )
}
