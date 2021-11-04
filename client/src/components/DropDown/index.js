import React from 'react'
import Select from 'react-select';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';


export default function DropDown() {
    const techCompanies = [
        { label: "Apple", value: 1 },
        { label: "Facebook", value: 2 },
        { label: "Netflix", value: 3 },
        { label: "Tesla", value: 4 },
        { label: "Amazon", value: 5 },
        { label: "Alphabet", value: 6 },
      ];
    

    return (
        <div>
<label for="activities">Add to a Trip:</label>

<Select options={ techCompanies } />
</div>
    )
}
// import React, { useState } from "react";
// import { useQuery } from '@apollo/client';
// import { QUERY_USER } from '../../utils/queries';

// function DropDown({ mytrips = [] }) {
//   const [tripState, setTripState] = useState("dumpling");
//   const { data } = useQuery(QUERY_USER);
//   const mytrip = data?.user.trip || [];
//   console.log(mytrip)
// if (!mytrips.length) {
//     return <h3 class="flex justify-center text-lg">No Trips Yet</h3>;
//   }
//   return (
//     <div className="container p-5">
//         {mytrip &&
//           mytrip.map((trip) => (
//             <div key={trip._id}>
//       <select
//         className="custom-select"
//         value={tripState}
//         onChange={(e) => {
//           const selectedFood = e.target.value;
//           setTripState(selectedFood);
//         }}
//       >
//         <option value="steak">{trip.tripTitle}</option>
//       </select>
//       {tripState}
//     </div>
//       ))}
//            </div>
//   );
// }

// export default DropDown;
