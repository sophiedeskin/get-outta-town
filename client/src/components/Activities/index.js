import React from 'react'

export default function Activities({ activities = [] }) {
    if (!activities.length) {
        return <h3 class="flex justify-center text-lg">No Activities Yet</h3>;
    }
    return (
        <div>
          {activities &&
          activities.map((activity) => (
          <div class="flex justify-center">
            <div key={activities._id} class="bg-white shadow-xl rounded-lg w-1/2">
                <ul class="divide-y divide-gray-300">
                    <li class="p-4 hover:bg-gray-50 cursor-pointer">{activity.activityTitle}</li>
                </ul>
            </div>
        </div>   
        ))}
        </div>
    )
}
