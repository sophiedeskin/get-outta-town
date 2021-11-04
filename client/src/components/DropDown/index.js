// import React from 'react'
// import Select from 'react-select';
// import { useQuery } from '@apollo/client';
// import { QUERY_USER } from '../../utils/queries';


// export default function Dropdown() {
//     const techCompanies = [
//         { label: "Apple", value: 1 },
//         { label: "Facebook", value: 2 },
//         { label: "Netflix", value: 3 },
//         { label: "Tesla", value: 4 },
//         { label: "Amazon", value: 5 },
//         { label: "Alphabet", value: 6 },
//       ];
    

//     return (
//         <div>
// <label for="activities">Add to a Trip:</label>

// <Select options={ techCompanies } />
// </div>
//     )
// }
import React, { useState } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';

function DropDown() {
  const [tripState, setTripState] = useState("dumpling");
  const { data } = useQuery(QUERY_USER);
  const trips = data?.user.trips || [];
  console.log(trips)

  return (
    <div className="container p-5">
      <select
        className="custom-select"
        value={tripState}
        onChange={(e) => {
          const selectedFood = e.target.value;
          setTripState(selectedFood);
        }}
      >
        <option value="steak">Steak</option>
        <option value="sandwich">Sandwich</option>
        <option value="dumpling">Dumpling</option>
      </select>
      {tripState}
    </div>
  );
}

export default DropDown;
