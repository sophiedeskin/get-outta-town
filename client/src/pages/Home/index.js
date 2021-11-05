import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Trip from '../../components/Trip';
import { QUERY_TRIPS } from '../../utils/queries';
import { Link } from 'react-router-dom';

import './home.css';

function Home() {
  const { data } = useQuery(QUERY_TRIPS);
  var trip = data?.trips || [];
  console.log(trips);
  
  // create state for holding returned trip data
  const [searchedTrips, setSearchedTrips] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');
  
  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
console.log("clicked")
console.log(searchInput)
    // if (!searchInput) {
    //   return false;
    // }
    for(let i =0; i<trip.length; i++){
      if (trip[i].tripCity==searchInput){
        console.log("city matches")
       trips=[];
        trips.push(trip[i])
      }
    }
    console.log(trips)
  
    // try {
    //   const response = await trips(searchInput);

//       if (!response.ok) {
//         throw new Error('something went wrong!');
//       }

//       const { items } = await response.json();
// console.log(items)
//       const tripData = items.map((trip) => ({
//         tripId: trip._id,
//         city: trip.tripCity || ['No city to display'],
//         title: trip.tripTitle,
//         country: trip.tripCountry,
//         duration: trip.tripDuration,
//         img: trip.tripImg,
//       }));

//       setSearchedTrips(tripData);
//       setSearchInput('');
//     } catch (err) {
//       console.error(err);
    // }
    // trips=tripData
  };

  return (
    <main>
    <div className ="flex justify-center pt-6">
<div className="w-96 h-10 pl-3 pr-2 bg-white border-blue-500 border-4 rounded-full flex ">
  <input className="appearance-none w-full outline-none focus:outline-none active:outline-none"
  name="search" 
  id="search" 
  placeholder="Search for activities"
    name='searchInput'
    value={searchInput}
    onChange={(e) => setSearchInput(e.target.value)} 
      />
  <button 
    onClick={handleFormSubmit} 
  class="ml-1 outline-none focus:outline-none active:outline-none">
    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
         viewBox="0 0 24 24" class="w-6 h-6">
      <path 
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
      </path>
    </svg>
  </button>
</div>
    </div>
    <br/>
        <div
        className=""
      >
        <Trip 
        trips={trip}/>
      </div>
      </main>
    
  );
}

export default Home;