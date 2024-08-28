import React from 'react';

export default function CreateAccount() {
  return (
    <div className="flex h-screen">

      <div className="w-1/2 flex items-center justify-center">
        <img
          src="/loginSignup/Side-Image.png"
          alt="Shopping Cart and Mobile"
          className="max-w-full h-auto"
        />
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <div className="w-3/4 max-w-sm p-8">
          <h2 className="text-3xl font-semibold mb-6">Create an account</h2>
          <p className="mb-4 text-gray-700">Enter your details below</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="border-b p-3 rounded-lg w-full"
            />
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
            <button
              type="submit"
              className="bg-red-500 text-white p-3 rounded-lg w-full"
            >
              Create Account
            </button>
          </form>
          <div className="mt-4">
            <button
              type="button"
              className="border-b p-3 rounded-lg w-full flex items-center justify-center space-x-2"
            >
              <img
                src="/loginSignup/icon-google.png"
                alt="Google Icon"
                className="w-5 h-5"
              />
              <span>Sign up with Google</span>
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-700">
              Already have an account?{' '}
              <a href="/login" className="text-red-500">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
