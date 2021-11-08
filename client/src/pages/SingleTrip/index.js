import React from "react";

// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import CommentList from "../../components/CommentList";
import CommentForm from "../../components/CommentForm";
import Activities from "../../components/Activities";
import { QUERY_USER } from "../../utils/queries";
import { QUERY_SINGLE_TRIP } from "../../utils/queries";

const SingleTrip = () => {

  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { tripId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_TRIP, {
    // pass URL parameter
    variables: { tripId: tripId },
  });

  const trip = data?.trip || {};
console.log(trip)
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <br />
      <div className="flex justify-center">
        <div className="container mx-auto p-8 " id="cards">
          <div className="flex justify-center flex-row flex-wrap ">
            <div className="sm:w-1/2 md:w-1/3 mb-4 px-2">
              <div className="relative bg-white rounded border">
                <picture className="block bg-gray-200 border-b">
                  <img className="block" src={trip.tripImg} alt="Card 1" />
                </picture>
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    <p className="stretched-link" title="Card 1">
                      {trip.tripCountry}
                    </p>
                  </h3>
                  <div className="block mb-2 text-sm text-gray-600">
                    {trip.tripDuration}
                  </div>
                  <p>{trip.tripDesc}</p>
                  <br />
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <CommentForm tripId={trip._id} />
          </div>
          <div className="">
            <CommentList comments={trip.comments} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTrip;
