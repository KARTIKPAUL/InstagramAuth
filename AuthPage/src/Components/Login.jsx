import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
function Login(){
    const[email,setEmail] = useState();
    const[password,setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
      e.preventDefault();
      axios.post('http://localhost:3000/login',{email,password})
      .then(res => {
        console.log(res)
        navigate('/heropage');
      })
      .catch(err => console.log(`Error happen when Login Account ${err}`))
    }

    return(
        <div className="min-h-screen flex items-center justify-center bg-slate-200">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-center font-bold mb-5 text-2xl">Login Here</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="w-full rounded border px-3 py-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold mb-2">
              Password:
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="w-full rounded border px-3 py-2"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
            Login
          </button>
        </form>
        <p className="text-center mt-5">
          Don't Have An Account?{' '}
          <Link to="/signup" className="text-blue-600 font-semibold hover:text-blue-800 duration-200">
            Signup
          </Link>
        </p>
      </div>
        </div>
    )
}

export default Login;