import React, { useState } from "react";
import "./addtrip.css";
import { Link } from "react-router-dom";
import { ADD_TRIP } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { QUERY_TRIPS } from "../../utils/queries";
import Auth from "../../utils/auth";

export default function AddTrip() {
  // const [tripCountry, setTripCountry] = useState('');
  // const [tripCity, setTripCity] = useState('');
  // const [tripDuration, setTripDuration] = useState('');
  // const [tripDesc, setTripDesc] = useState('');

  const [formState, setFormState] = useState({
    tripTitle: "",
    tripCountry: "",
    tripCity: "",
    tripDuration: "",
    tripDesc: "",
    tripImg: "",
  });

  const [characterCount, setCharacterCount] = useState(0);

  const [addTrip, { error }] = useMutation(ADD_TRIP, {
    update(cache, { data: { addTrip } }) {
      try {
        const { trips } = cache.readQuery({ query: QUERY_TRIPS });


        cache.writeQuery({
          query: QUERY_TRIPS,
          data: { trips: [addTrip, ...trips] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addTrip({
        variables: {
          ...formState, 
        },
      });
      console.log(formState)

      setFormState("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div class="flex justify-center pt-6  ">
      <div class="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
        <div class="flex justify-center py-4"></div>

        <div class="flex justify-center">
          <div class="flex">
            <h1 class="text-gray-600 font-bold md:text-2xl text-xl">
              Let's Get Outta Town!
            </h1>
          </div>
        </div>

        <form onSubmit={handleFormSubmit}>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
            <div class="grid grid-cols-1">
              <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Title
              </label>

              <textarea
                class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                value={formState.tripTitle}
                name="tripTitle"
                onChange={handleChange}
                type="text"
                placeholder="Input 2"
              />
            </div>
          </div>
          <div class="grid grid-cols-1 mt-5 mx-7">
            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Trip Description
            </label>

            <textarea
              class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              value={formState.tripDesc}
              name="tripDesc"
              onChange={handleChange}
              type="text"
              placeholder="Input 1"
            />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
            <div class="grid grid-cols-1">
              <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Country
              </label>

              <textarea
                class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                value={formState.tripCountry}
                name="tripCountry"
                onChange={handleChange}
                type="text"
                placeholder="Input 2"
              />
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
            <div class="grid grid-cols-1">
              <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                City
              </label>

              <textarea
                class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                value={formState.tripCity}
                name="tripCity"
                onChange={handleChange}
                type="text"
                placeholder="Input 2"
              />
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
            <div class="grid grid-cols-1">
              <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Link to an Image that describes your trip
              </label>
              <div className="block mb-2 text-sm text-gray-600">Image must end in PNG or JPG</div>
              <textarea
                class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                value={formState.tripImg}
                name="tripImg"
                onChange={handleChange}
                type="text"
                placeholder="Input 2"
              />
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
            <div class="grid grid-cols-1">
              <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Duration
              </label>

              <textarea
                class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                value={formState.tripDuration}
                name="tripDuration"
                onChange={handleChange}
                type="text"
                placeholder="Input 2"
              />
            </div>
  
          </div>
          {/* <div class="grid grid-cols-1 mt-5 mx-7">
      <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Selection</label>
      <select class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div> */}

          {/* <div class="grid grid-cols-1 mt-5 mx-7">
      <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Upload Photo</label>
        <div class='flex items-center justify-center w-full'>
            <label class='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group'>
                <div class='flex flex-col items-center justify-center pt-7'>
                  <svg class="w-10 h-10 text-purple-400 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  <p class='lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider'>Select a photo</p>
                </div>
              <input type='file' class="hidden" />
            </label>
        </div>
    </div> */}

          <div class="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
            <button 
            className="w-auto bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2  border rounded-full"
            type="submit"
            to={`/dashboard`}
            >
              Create
            </button>
            <Link
              className="w-auto bg-gray-600 hover:bg-blue-700 text-white text-sm px-4 py-2  border rounded-full"
              to={`/dashboard`}
              // class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
