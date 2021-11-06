import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import MyTrip from "../../components/MyTrip";
import "./dashboard.css";
import { Link } from "react-router-dom";

function MyTrips() {
  const { data } = useQuery(QUERY_USER);
  const trips = data?.user.trips || [];
  console.log(data);
  

  return (
    <div className="">
      <button className="flex justify-center pt-6" id="addtrip">
        <Link
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2  border rounded-full"
          type="submit"
          to={`/addtrip`}
          // class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
        >
          Add a Trip
        </Link>
      </button>
      <div className="flex justify-center pt-6">
        <div className="">
          <MyTrip trips={trips} />
        </div>
      </div>
    </div>
  );
}

export default MyTrips;
