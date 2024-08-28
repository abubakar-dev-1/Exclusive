"use client"
import React from 'react';
import {useEffect} from 'react';
import {
  ShoppingBag,
  User,
  XCircle,
  Star,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdownMenuDemo() {
    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.attributeName === 'data-scroll-locked') {
              document.body.removeAttribute('data-scroll-locked');
            }
          });
        });
    
        observer.observe(document.body, {
          attributes: true, // Observe changes to attributes
        });
    
        // Cleanup the observer when the component unmounts
        return () => {
          observer.disconnect();
        };
      }, []);
    
  return (
    <div className="relative"> {/* Ensure relative positioning */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <User className="hover:bg-[#db4444] hover:rounded-full hover:p-[0.19rem] hover:text-white w-8 h-8 cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="w-56 bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 border border-gray-100 text-white rounded-lg"
          style={{ position: 'absolute', top: '100%', right: '20%' }}  
        >
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-6 w-6" />
              <span>Manage My Account</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ShoppingBag className="mr-2 h-6 w-6" />
              <span>My Order</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <XCircle className="mr-2 h-6 w-6" />
              <span>My Cancellations</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Star className="mr-2 h-6 w-6" />
              <span>My Reviews</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuItem>
            <LogOut className="mr-2 h-6 w-6" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
