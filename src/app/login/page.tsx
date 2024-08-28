import React from 'react';

export default function Login() {
  return (
    <div className="flex h-screen mb-14">
      <div className="w-1/2 flex items-center justify-center">
        <img
          src="/loginSignup/Side-Image.png"
          alt="Shopping Cart and Mobile"
          className="max-w-full h-auto"
        />
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <div className="w-3/4 max-w-sm p-8">
          <h2 className="text-3xl font-semibold mb-6">Log in to Exclusive</h2>
          <p className="mb-4 text-gray-700">Enter your details below</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="border-b p-3 rounded-lg w-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-b p-3 rounded-lg w-full"
            />
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-red-500 text-white p-3 rounded-lg w-1/2"
              >
                Log In
              </button>
              <a href="#" className="text-red-500">
                Forget Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
