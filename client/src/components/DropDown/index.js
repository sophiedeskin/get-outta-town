import React from 'react'
import Select from 'react-select';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';



export default function DropDown({ tripsTitle = [] }) {

    const { data } = useQuery(QUERY_USER);
    const trips = data?.user.trips || [];
    console.log(data)
    

    return (
        <div>
<label for="activities">Add to a Trip:</label>
{tripsTitle &&
          tripsTitle.map((tripsTitle) => (
            <div key={trips._id} className="">
<Select options={ trips.tripTitle } />
</div>
 ))}
    </div>
     )
}
