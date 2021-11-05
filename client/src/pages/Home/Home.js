import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import Trip from "../../components/Trip";
import { QUERY_TRIPS } from "../../utils/queries";
import { Link } from "react-router-dom";

import "./home.css";

function Home() {
  const { data } = useQuery(QUERY_TRIPS);
  const trips = data?.trips || [];
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");
  const filterTrips = (trip) =>
    Object.values(trip).some((val) =>
      val.toLowerCase().includes(searchInput.toLowerCase())
    );

  return (
    <main>
      <div className="flex justify-center pt-6">
        <form className="w-96 h-10 pl-3 pr-2 bg-white border-blue-500 border-4 rounded-full flex">
          <input
            className="appearance-none w-full outline-none focus:outline-none active:outline-none"
            name="search"
            id="search"
            placeholder="Search for city"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            type="submit"
            class="ml-1 outline-none focus:outline-none active:outline-none"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </form>
      </div>
      <br />
      <div className="">
        <Trip trips={trips.filter(filterTrips)} />
      </div>
    </main>
  );
}

export default Home;
