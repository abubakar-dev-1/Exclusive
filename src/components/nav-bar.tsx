import React from "react";
import { Heart, ShoppingCart, Search } from "lucide-react";

export default function NavBar() {
  return (
    <>
      <div className="border-b-[1px] mb-10">
        <div className="bg-black flex justify-center text-sm gap-3 p-1 text-white">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <button className="underline">Shop Now</button>
        </div>
        <div className="flex justify-between px-10 py-5 items-center">
          <div className="text-[24px] font-[700]">Exclusive</div>
          <ul className="flex gap-[48px] text-[16px]">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>

          <div className="flex gap-[24px] align-middle items-center">
            <div className="relative">
              <input
                type="text"
                name="search"
                placeholder="What are you looking for?"
                className="bg-[#F5F5F5] p-2 text-sm pr-10"
              />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black" />
            </div>
            <Heart />
            <ShoppingCart />
          </div>
        </div>
      </div>
    </>
  );
}
