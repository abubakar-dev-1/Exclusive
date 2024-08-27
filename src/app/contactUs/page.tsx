import React from 'react';

export default function Contact() {
  return (
    <div className="flex justify-between p-14 space-x-8 mt-20 mb-20">
      <div className="bg-white p-6 shadow-lg w-1/3 rounded-lg">
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <div className="bg-red-500 text-white p-3 rounded-full mr-3">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h2 className="text-lg font-semibold">Call To Us</h2>
          </div>
          <p className="text-gray-700">We are available 24/7, 7 days a week.</p>
          <p className="text-gray-700 mt-2">Phone: +8801611112222</p>
        </div>
        <hr className="border-gray-300 my-6" />
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-red-500 text-white p-3 rounded-full mr-3">
              <i className="fas fa-envelope"></i>
            </div>
            <h2 className="text-lg font-semibold">Write To Us</h2>
          </div>
          <p className="text-gray-700">Fill out our form and we will contact you within 24 hours.</p>
          <p className="text-gray-700 mt-2">Emails: customer@exclusive.com</p>
          <p className="text-gray-700">Emails: support@exclusive.com</p>
        </div>
      </div>

      <div className="bg-white p-6 shadow-lg w-2/3 rounded-lg">
        <form>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <input
              type="text"
              placeholder="Your Name *"
              className="border p-3 rounded-lg w-full"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="border p-3 rounded-lg w-full"
            />
            <input
              type="text"
              placeholder="Your Phone *"
              className="border p-3 rounded-lg w-full"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Your Message"
              className="border p-3 rounded-lg w-full h-32"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white p-3 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
