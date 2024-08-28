import React from 'react';

export default function Billing() {
  return (
    <div className="flex justify-between p-8 space-x-8">
      <div className="w-1/2">
        <h2 className="text-2xl font-semibold mb-8">Billing Details</h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="First Name*"
            className="border p-3 rounded-lg w-full"
            required
          />
          <input
            type="text"
            placeholder="Company Name"
            className="border p-3 rounded-lg w-full"
            required
          />
          <input
            type="text"
            placeholder="Street Address*"
            className="border p-3 rounded-lg w-full"
            required
          />
          <input
            type="text"
            placeholder="Apartment, floor, etc. (optional)"
            className="border p-3 rounded-lg w-full"
            required
          />
          <input
            type="text"
            placeholder="Town/City*"
            className="border p-3 rounded-lg w-full"
            required
          />
          <input
            type="text"
            placeholder="Phone Number*"
            className="border p-3 rounded-lg w-full"
            required
          />
          <input
            type="email"
            placeholder="Email Address*"
            className="border p-3 rounded-lg w-full"
            required
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              id="save-info"
              className="mr-2"
            />
            <label htmlFor="save-info" className="text-gray-700">
              Save this information for faster check-out next time
            </label>
          </div>
        </form>
      </div>

      {/* Right Column - Order Summary */}
      <div className="w-1/2 bg-white p-6 shadow-lg rounded-lg">
        <div className="space-y-4">
          {/* Product Items */}
          <div className="flex justify-between">
            <div className="flex items-center">
              <img src="/cart/game-cart.png" alt="LCD Monitor" className="w-12 mr-4" />
              <p>LCD Monitor</p>
            </div>
            <p>$650</p>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <img src="/cart/cart-lcd.png" alt="HI Gamepad" className="w-12 mr-4" />
              <p>HI Gamepad</p>
            </div>
            <p>$1100</p>
          </div>
          {/* Price Summary */}
          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p>$1750</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between font-bold">
              <p>Total:</p>
              <p>$1750</p>
            </div>
          </div>

          <div className="pt-4">
            <p className="mb-2">Select Payment Method:</p>
            <div className="space-y-2">
              <div className='flex justify-between'>
                <div>
                <input type="radio" id="bank" name="payment" className="mr-2" />
                <label htmlFor="bank" className="text-gray-700">Bank</label>
                </div>
                <div className=" ml-4">
                  <img src="/banks.png" alt="Bank" className="inline w-24 " />
                </div>
              </div>
              <div>
                <input type="radio" id="cod" name="payment" className="mr-2" />
                <label htmlFor="cod" className="text-gray-700">Cash on delivery</label>
              </div>
            </div>
          </div>

          <div className="pt-4 space-y-4">
            <div className="flex space-x-1 w-full">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border p-1 rounded-lg w-full"
              />
              <button className="bg-red-500 text-white p-3 rounded-lg w-[50%]">
                Apply Coupon
              </button>
            </div>
            <button className="bg-red-500 text-white w-full p-3 rounded-lg">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
