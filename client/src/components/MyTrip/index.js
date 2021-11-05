import React from 'react'
import { Link } from 'react-router-dom';
import { REMOVE_TRIP } from '../../utils/mutations';
import { QUERY_USER } from '../../utils/queries';
import { useMutation } from '@apollo/client';
import Activities from '../../components/Activities';
import CommentList from '../../components/CommentList';
import { useQuery } from '@apollo/client';

export default function MyTrip({ trips }) {
  
  const [removeTrip, { error }] = useMutation(REMOVE_TRIP, {
    update(cache, { data: { removeTrip } }) {
      try {
        cache.writeQuery({
              query: QUERY_USER,
              data: { me: removeTrip },
            });
          } catch (e) {
            console.error(e);
          }
        },
      });
    
      const handleRemoveTrip = async (trip) => {
        try {
          const { data } = await removeTrip({
            variables: { trip },
          });
        } catch (err) {
          console.error(err);
        }
      };
      
      if (!trips.length) {
        return <h3 className="flex justify-center pt-6 text-lg">No Trips Yet</h3>;
      }
      return (
   
        <div className="flex-column justify-center">
    {trips && trips.map((trip) => (
       <div key={trip._id} className="">
       <div className="container p-8 "id="cards">
   <div className="flex justify-center flex-row flex-wrap h-1/2" >       
     <div className="" >
       <div className="relative bg-white rounded border ">
         <picture className="block bg-gray-200 border-b">
           <img className="block" 
          //  src="https://picsum.photos/id/29/2106/1404" 
           src={trip.tripImg} 
           alt="Card 1"/>
         </picture>
         <div className="p-4">
           <h3 className="text-lg font-bold">
             <p className="stretched-link" title="Card 1">
             {trip.tripCountry}
             </p>
           </h3>
           <time className="block mb-2 text-sm text-gray-600" datetime="2019-01-01">{trip.tripDuration}</time>
           <p>
           {trip.tripDesc}
           </p>
           <br/>
           <button 
                    class="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2  border rounded-full"
                    // disabled={!(userFormData.username && userFormData.email && userFormData.password)}
                    onClick={() => handleRemoveTrip(trip)}
                    // variant='success'
                    >
                    Delete Trip</button>
         </div>
      <div className="">
        <CommentList 
        comments={trip.comments}/>
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