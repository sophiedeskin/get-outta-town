import React from 'react'
import { Link } from 'react-router-dom';
import DropDown from '../../components/DropDown';

export default function SearchActivities() {

  

        return (
     
          <div className="flex justify-center grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
         <div className="container mx-auto p-8 "id="cards">
     <div className="flex justify-center flex-row flex-wrap " >       
       <div className="sm:w-1/2 md:w-1/3 mb-4 px-2" >
         <div className="relative bg-white rounded border">
           <picture className="block bg-gray-200 border-b">
             <img className="block" 
             src="https://picsum.photos/id/29/2106/1404" 
            //  src={trip.tripImg} 
             alt="Card 1"/>
           </picture>
           <div className="p-4">
             <h3 className="text-lg font-bold">
               <a className="stretched-link" href="#" title="Card 1">
               Yelp stuff
               </a>
             </h3>
             <time className="block mb-2 text-sm text-gray-600" datetime="2019-01-01">Yelp stuff</time>
             <p>
             Yelp stuff
             </p>
             <br/>

             <div class="relative inline-flex">

</div>

           </div>
         </div>
       </div>
                     
     </div>
    </div>
       </div>
        //  ))};
         );
    }