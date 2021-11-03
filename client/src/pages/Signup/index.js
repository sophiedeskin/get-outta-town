import React, { useState } from 'react';
import './signup.css';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

export default function Signup() {

  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
    // setFormState({
    //   username: '',
    //   email: '',
    //   password: '',
    // });
  };


    return (
            <div className="bg-grey-lighter pt-40">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="">

                    <h2 className="mb-8 text-3xl text-center">Sign up</h2>
                <form className="bg-white p-16 rounded shadow-md text-black w-full" onSubmit={handleFormSubmit}>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="username"
                        value={formState.username}
                        onChange={handleChange}
                        placeholder="Username" />
                        

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

                    <button 
                    class="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2  border rounded-full"
                    // disabled={!(userFormData.username && userFormData.email && userFormData.password)}
                    // type="submit"
                    // variant='success'
                    >
                    Create Account</button>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a class="no-underline border-b border-blue text-blue pl-2" href="../login/">
                         Log in
                    </a>.
                </div>
                </form>
{/* 
                            {error && (
                              <div className="my-3 p-3 bg-danger text-white">
                                {error.message}
                              </div>
                            )} */}
                          </div>


            </div>
        </div>
    )
}
