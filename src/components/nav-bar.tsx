import React from "react";
import { Heart, ShoppingCart, Search,UserRound } from "lucide-react";
import Link from "next/link";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuDemo } from "./user-dropdown";



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
          <ul className="flex gap-[48px] text-[16px] cursor-pointer">
            <Link href="/"> <li>Home</li></Link>
            <Link href="/contactUs"> <li>Contact</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/signup"> <li>Sign Up</li></Link>
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
            <Link href="/wishList"> <Heart className="hover:bg-[#db4444] rounded-3xl hover:p-[0.19rem] hover:text-white"/> </Link>
            <Link href="/cart"> <ShoppingCart className="hover:bg-[#db4444] hover:rounded-3xl hover:p-[0.19rem] hover:text-white"/> </Link>
            <DropdownMenuDemo/>
          </div>
        </div>
      </div>
    </>
  );
}
