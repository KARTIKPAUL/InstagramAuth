import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900">Welcome to Instagram</h1>
          <p className="mt-4 text-xl text-gray-600">Share your moments with friends and family</p>
          <button className="mt-6 text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-lg px-6 py-3">
          <Link to='/signup' className="block text-center text-white">
          Get Started
          </Link>
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Features</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800">Connect</h3>
              <p className="mt-4 text-gray-600">Easily connect with your friends and family.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800">Share</h3>
              <p className="mt-4 text-gray-600">Share photos and videos with ease.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800">Discover</h3>
              <p className="mt-4 text-gray-600">Discover new content and trends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900">What Our Users Say</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">"Instagram has changed the way I connect with my friends and family. It's so easy to use and fun!"</p>
              <h3 className="mt-4 text-lg font-bold text-gray-800">- User One</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">"I love sharing my travel photos on Instagram. The filters and editing tools are fantastic!"</p>
              <h3 className="mt-4 text-lg font-bold text-gray-800">- User Two</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-500 py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold">Join Instagram Today</h2>
          <p className="mt-4">Create an account to start sharing your moments with the world.</p>
          <button className="mt-6 bg-white text-blue-500 hover:bg-gray-200 font-medium rounded-lg text-lg px-6 py-3">
          <Link to='/signup' className="block text-center text-indigo-600 hover:text-indigo-800">
          SignUp
          </Link>
          </button>
        </div>
      </section>
    </main>
  );
}

export default Home;
