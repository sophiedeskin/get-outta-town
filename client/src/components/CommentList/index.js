import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';

const CommentList = ({ comments = [] }) => {
  const { data } = useQuery(QUERY_USER);
  // console.log(data)
  const user = data?.user || [];
  console.log(user)
  if (!comments.length) {
    return <h3 class="flex justify-center text-lg">No Comments Yet</h3>;
  }

    return (
      <div id="task-comments" class="pt-4">
               {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12 mb-3 pb-3">
      <div class="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4 border-black">
      <div class="flex flex-row justify-center mr-2">
      <h3 class="text-blue-600 font-semibold text-lg text-center md:text-left ">{user.username}</h3>
      </div>
      
      
      <p class="width: 90%" class="text-gray-600 text-lg text-center md:text-left ">{comment.commentText}</p>
      
      </div>
        </div>
        ))}
         </div>
      
    )
}
export default CommentList;