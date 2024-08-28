import React from 'react';
import Link from 'next/link';

export default function User() {
  return (
    <div className="p-6 font-sans">
      <div className="text-gray-500 mb-4">
        <span> <Link href="/"> Home </Link></span> / <span>My Account</span>
      </div>
      <div className="flex">
        <div className="w-1/4">
          <h3 className="text-lg font-semibold mb-4">Manage My Account</h3>
          <ul className="space-y-2">
            <li className="text-red-500 cursor-pointer">My Profile</li>
            <li className="cursor-pointer">Address Book</li>
            <li className="cursor-pointer">My Payment Options</li>
          </ul>
          <h3 className="text-lg font-semibold mt-6 mb-4">My Orders</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer">My Returns</li>
            <li className="cursor-pointer">My Cancellations</li>
          </ul>
          <h3 className="text-lg font-semibold mt-6 mb-4">My Wishlist</h3>
        </div>
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-red-500 mb-6">Edit Your Profile</h2>
          <form>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-600 mb-2">First Name</label>
                <input
                  type="text"
                  value="Md"
                  readOnly
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Last Name</label>
                <input
                  type="text"
                  value="Rimel"
                  readOnly
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  value="rimel1111@gmail.com"
                  readOnly
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Address</label>
                <input
                  type="text"
                  value="Kingston, 5236, United State"
                  readOnly
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-4">Password Changes</h3>
            <div className="mb-6">
              <label className="block text-gray-600 mb-2">Current Password</label>
              <input
                type="password"
                placeholder="Current Password"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 mb-2">New Password</label>
              <input
                type="password"
                placeholder="New Password"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 mb-2">Confirm New Password</label>
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="text-gray-500 mr-4"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-red-500 text-white py-2 px-6 rounded-lg"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
