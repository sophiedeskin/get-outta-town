import React from 'react'
import { Link } from 'react-router-dom';

export default function Trip({ trips }) {
  if (!trips.length) {
    return <h3 className="flex justify-center pt-6 text-lg">No Trips Yet</h3>;
  }

    return (
  <div>
  {trips && trips.map((trip) => (
      <div key={trip._id} className="">
      <div className="container mx-auto p-8">
  <div className="flex flex-row flex-wrap -mx-2">       
    <div className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
      <div className="relative bg-white rounded border">
        <picture className="block bg-gray-200 border-b">
          <img className="block" src="https://via.placeholder.com/800x600/EDF2F7/E2E8F0/&amp;text=Card" alt="Card 1"/>
        </picture>
        <div className="p-4">
          <h3 className="text-lg font-bold">
            <a className="stretched-link" href="#" title="Card 1">
            {trip.tripAuthor}
            </a>
          </h3>
          <time className="block mb-2 text-sm text-gray-600" datetime="2019-01-01">{trip.tripDuration}</time>
          <p>
          {trip.tripDesc}
          </p>
          <br/>
          <Link 
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2  border rounded-full"
          type="submit"
          to={`/trips/${trip._id}`}
                    // class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                >Read more</Link>
        </div>
      </div>
    </div>
                  
  </div>
</div>
    </div>
      ))};
      </div>
      );
}
