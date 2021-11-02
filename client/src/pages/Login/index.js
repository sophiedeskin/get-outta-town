import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { LOGIN_USER } from '../../utils/mutations';
import { useMutation } from '@apollo/client';



export default function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };




    return (
        <div className="bg-grey-lighter pt-40">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center">
        <div className="">
        {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
        ) : (
            <form className="bg-white p-16 rounded shadow-md text-black w-full" onSubmit={handleFormSubmit}>

                <h2 className="mb-8 text-3xl text-center">Log in</h2>
    
                <input 
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Email" />

                <input 
                    type="password"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                    placeholder="Password" />
<br/>
                <button class="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2  border rounded-full"
                    type="submit"
                    // class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                >Log in</button>

            </form>
                         )} 

                        {error && (
                          <div className="my-3 p-3 bg-danger text-white">
                            {error.message}
                          </div>
                        )}
                      </div>


        </div>
    </div>

    )
}
