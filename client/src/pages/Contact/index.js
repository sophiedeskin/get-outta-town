import React, { useState } from 'react'
import './contact.css'
import { validateEmail } from '../../utils/helpers';
import emailjs from 'emailjs-com'

function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      // Based on the input type, we set the state of either email, username, and password
      if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'name') {
        setName(inputValue);
      } else {
        setMessage(inputValue === 'message');
      }
    };
    const handleFormSubmit = (e) => {
      if (email && name && message) {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
      emailjs.sendForm('service_5pe2lgp', 'template_ywo5m0e', e.target, 'user_H8lifA8XKrQAeUh737wDO')
      .then(res => {
        console.log(res);
        alert(`Thanks for reaching out ${name}!`);
      }).catch (err => console.log(err));
      // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
      if (!validateEmail(email) || !name) {
        setErrorMessage('Email or name is invalid');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        setName('');
        setEmail('');
        setMessage('');
        return;
        // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
      }
      else {
        alert(`Please fill in all required fields!`);
      }}
  
      // If everything goes according to plan, we want to clear out the input after a successful registration.
    };
  
  return (
  
    <form className="flex-col justify-center content-center items-center" id="attempt" onSubmit={handleFormSubmit}>
    <div className="flex flex-wrap mb-15 w-1/2 justify-center" >
      <div className="w-full px-3 ">
              <br/>
        <label className="block mb-2 text-sm text-white" for="grid-password">
          Name
        </label>
        <input className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-12 resize-none" id="nick" 
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleInputChange}/>
      </div>
    </div>
    <div className="flex flex-wrap mb-6 w-1/2">
      <div className="w-full px-3">
        <label htmlFor="email" className="block mb-2 text-sm text-white" for="grid-password">
          E-mail
        </label>
        <input className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-12 resize-none"             
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleInputChange}
            />
      </div>
    </div>
    <div className="flex flex-wrap mb-6 w-1/2 justify-center">
      <div className="w-full px-3">
        <label className="block mb-2 text-sm text-white" for="grid-password">
          Message
        </label>
        <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"             
              name="message"
              rows="5"
              defaultValue={message}
              onBlur={handleInputChange}>
              </textarea>
      </div>
    </div>
          <button className ="text-blue-600 bg-blue-300 shadow-lg font-normal h-10 w-10 rounded-full outline-none focus:outline-none mb-2" type="button"  type="submit">
             <i className="far fa-paper-plane"></i>
              </button>
  </form>  
      )
    }
    
    
    
    export default Contact;