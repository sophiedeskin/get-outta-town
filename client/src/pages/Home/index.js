import React from 'react';
import { useQuery } from '@apollo/client';
import Trip from '../../components/Trip';
import { Link } from 'react-router-dom';

import { QUERY_TRIPS } from '../../utils/queries';

import './home.css';

function Home() {
  const { data } = useQuery(QUERY_TRIPS);
  const trips = data?.trips || [];
  // console.log(trips);
  return (
    <main>
    <div className ="flex justify-center pt-6">
<div className="w-96 h-10 pl-3 pr-2 bg-white border-blue-500 border-4 rounded-full flex ">
  <input className="search" name="search" id="search" placeholder="Search for activities"
         className="appearance-none w-full outline-none focus:outline-none active:outline-none"/>
  <Link 
  type="submit" 
    to={`/searchactivities/`}
  class="ml-1 outline-none focus:outline-none active:outline-none">
    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
         viewBox="0 0 24 24" class="w-6 h-6">
      <path 
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
      </path>
    </svg>
  </Link>
</div>
    </div>
    <br/>
        <div
        className=""
      >
        <Trip 
        trips={trips}/>
      </div>
      </main>
    
  );
}

export default Home;