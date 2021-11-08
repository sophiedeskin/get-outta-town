import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import "./commentform.css";
import { ADD_COMMENT } from '../../utils/mutations';
import Auth from '../../utils/auth';

const CommentForm = ({ tripId }) => {
  const [commentText, setCommentText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    console.log("clicked")
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          tripId,
          commentText,
        },
      });

      setCommentText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'commentText' && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

    return (

      <div>
      {Auth.loggedIn() ? (
        <>
          <p
            className={`flex justify-center text-white text-lg ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
            {error && <span className="ml-2">{error.message}</span>}
          </p>
<section class="rounded-b-lg  mt-4 ">
  

<form
onSubmit={handleFormSubmit}
><input type="hidden" />
<textarea 
class="w-full shadow-inner p-4 border-0 mb-4 rounded-lg focus:shadow-outline text-2xl" 
placeholder="Add your comment..." 
value={commentText}
name="commentText"
onChange={handleChange}
cols="6" 
rows="6" 
id="comment_content" 
spellcheck="false">

</textarea>

<button class="flex justify-center font-bold py-2 px-4 w-1/4 bg-blue-600 hover:bg-blue-700 text-lg text-white rounded-lg " 
id="commentbutton"
type="submit"
>Comment </button>
</form>
</section>
</>
      ) : (
        <p className="commentform">
          You need to be logged in to share your thoughts. Please 
          
          login or signup.
        </p>
      )}
    </div>

    )
}
export default CommentForm;
