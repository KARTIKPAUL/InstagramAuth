import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
function SignUp(){
    const[name,setName] = useState();
    const[email,setEmail] = useState();
    const[password,setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
      e.preventDefault();
      axios.post('http://localhost:3000/signup',{name,email,password})
      .then(res => {console.log(res)
       navigate('/heropage')
    })
      .catch(err => console.log(`Error happen when create an Account ${err}`))
    }

    return(
      <div className="flex justify-center items-center h-screen bg-slate-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-2xl font-bold mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input 
              type="text"
              placeholder="Enter name"
              autoComplete="off"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input 
              type="email"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input 
              type="password"
              placeholder="Enter password"
              autoComplete="off"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 focus:outline-none">
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">Already have an account?</p>
        <Link to='/login' className="block text-center mt-2 text-indigo-600 hover:text-indigo-800">
          Login
        </Link>
      </div>
    </div>
    
    )
}

export default SignUp;