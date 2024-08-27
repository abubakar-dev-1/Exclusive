"use client"

import React, { useState } from 'react';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'LCD Monitor',
      price: 650,
      quantity: 1,
      image: '/cart/cart-lcd.png',
    },
    {
      id: 2,
      name: 'HI Gamepad',
      price: 550,
      quantity: 2,
      image: '/cart/game-cart.png',
    },
  ]);

  const calculateSubtotal = (item:any) => {
    return item.price * item.quantity;
  };


  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + calculateSubtotal(item), 0);
  };

 
  const handleQuantityChange = (id:any, quantity:any) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Number(quantity) } : item
    );
    setCartItems(updatedItems);
  };

  return (
    <>
      <div className="p-4 space-y-8 mb-10">
        <div className="grid grid-cols-4 text-center border-b-2 pb-4">
          <div>
            <p>Product</p>
          </div>
          <div>
            <p>Price</p>
          </div>
          <div>
            <p>Quantity</p>
          </div>
          <div>
            <p>Subtotal</p>
          </div>
        </div>

        {cartItems.map((item) => (
          <div key={item.id} className="grid grid-cols-4 items-center text-center mb-4">
            <div className="flex items-center gap-4 justify-center">
              <img src={item.image} alt={item.name} className="w-16" />
              <p>{item.name}</p>
            </div>
            <div>
              <p>${item.price}</p>
            </div>
            <div>
              <input
                type="number"
                min="1"
                max="10"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                className="border p-1 w-12 text-center"
              />
            </div>
            <div>
              <p>${calculateSubtotal(item)}</p>
            </div>
          </div>
        ))}

        <div className="flex justify-between p-5 px-8 mt-8">
          <button className="border p-2">Return To Shop</button>
          <button className="border p-2">Update Cart</button>
        </div>

        <div className="flex justify-between items-center mt-8">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border p-2"
            />
            <button className="bg-red-500 text-white p-2">Apply Coupon</button>
          </div>

          <div className="border p-4 w-1/3">
            <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
            <div className="flex justify-between mb-2">
              <p>Subtotal:</p>
              <p>${calculateTotal()}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between font-bold">
              <p>Total:</p>
              <p>${calculateTotal()}</p>
            </div>
            <button className="bg-red-500 text-white w-full mt-4 p-2">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
