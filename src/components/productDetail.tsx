"use client";
import React, { useState } from "react";
import { ProductDetailData } from "@/data/productDetailData";

export default function AproductDetail() {
  const [selectedImage, setSelectedImage] = useState(
    ProductDetailData[0].image[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("XS"); 

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleInputChange = (e: any) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="flex justify-evenly ">
      <div className="flex justify-center gap-5 w-[70%]">
        <div className="flex flex-col space-y-2">
          {ProductDetailData[0].image.map((img, imgIndex) => (
            <img
              key={imgIndex}
              src={img}
              alt={`Product image ${imgIndex + 1}`}
              onClick={() => setSelectedImage(img)}
              className={`cursor-pointer w-[100px] h-[100px] border-2 ${
                selectedImage === img ? "border-blue-500" : "border-transparent"
              }`}
            />
          ))}
        </div>
        <img
          src={selectedImage}
          alt="Main product image"
          className="w-[500px] h-[500px]"
        />
      </div>

      <div className="w-[50%]">
        <div className="border-b-2 mb-2">
        <h1 className="text-3xl font-bold mb-2">{ProductDetailData[0].name}</h1>
        <div className="flex items-center mb-4">
          <div className="text-xl font-semibold text-gray-800">
            {ProductDetailData[0].price}
          </div>
          <div className="ml-4 text-green-500">In Stock</div>
        </div>
        <p className="mb-6 text-gray-700">{ProductDetailData[0].detail}</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Colours:</h3>
          <div className="flex gap-2">
            <button className="w-6 h-6 bg-black rounded-full border-2 border-gray-300"></button>
            <button className="w-6 h-6 bg-[#DB4444] rounded-full border-2 border-gray-300"></button>
            <button className="w-6 h-6 bg-white rounded-full border-2 border-gray-300"></button>
          </div>
        </div>

        <div className="mb-4 flex gap-6 items-center">
          <h3 className="font-semibold">Size:</h3>
          <div className="flex gap-2 text-xs">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                onClick={() => handleSizeClick(size)}
                className={`px-4 py-2 border border-gray-300 rounded-lg ${
                  selectedSize === size
                    ? "bg-[#DB4444] text-white"
                    : "bg-white text-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <button className="px-4 py-2 bg-gray-200" onClick={handleDecrement}>
              -
            </button>
            <input
              type="text"
              value={quantity}
              onChange={handleInputChange}
              className="w-12 text-center border-none focus:ring-0"
            />
            <button className="px-4 py-2 bg-gray-200" onClick={handleIncrement}>
              +
            </button>
          </div>
          <button className="px-6 py-2 bg-red-500 text-white rounded-lg">
            Buy Now
          </button>
        </div>
        <div className="space-y-2">
          <div className="flex border-[1px] py-4 px-2 w-[70%] border-black items-center gap-2">
            <div>
              <img src="./productDetail/icon-delivery.png" alt="" />
            </div>
            <div>
              <span className="font-bold">Free Delivery</span>
              <p className="underline text-xs">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>
          <div className="flex border-[1px] py-4 px-2 w-[70%] border-black items-center gap-2">
            <div>
              <img src="./productDetail/icon-return.png" alt="" />
            </div>
            <div>
              <span className="font-bold">Return Delivery</span>
              <p className="underline text-xs">
                Free 30 Days Delivery Returns. Details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
