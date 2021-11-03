import React from 'react'
import { Link } from 'react-router-dom';


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
             <label for="activities">Add an Activity:</label>
  <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
  <select class="w-auto bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2  border rounded-full">
    <option>Red</option>
    <option>Blue</option>
    <option>Yellow</option>
    <option>Black</option>
    <option>Orange</option>
    <option>Purple</option>
    <option>Gray</option>
    <option>White</option>
  </select>
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