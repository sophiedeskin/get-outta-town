import React from 'react'
import './dashboard.css';
import { Link } from 'react-router-dom';
// import { QUERY_ME } from '../../utils/queries';
// import { useQuery } from '@apollo/client';
// import Trip from '../../components/Trip';

export default function myTrips() {
    // const { data } = useQuery(QUERY_ME);
    // const trips = data?.trips || [];

    
    return (
   
       <button className="addtrip">
        <Link 
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2  border rounded-full"
        type="submit"
        to={`/addtrip`}
                  // class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
              >Add a Trip</Link>
       </button>

  
              
    )
}
