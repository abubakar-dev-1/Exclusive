import React from 'react';
import { SendHorizontal } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <div className='bg-black text-white p-10 flex justify-between '>
        <div className='text-[24px] font-light space-y-5'>
          <p className='font-[700]'>Exclusive</p>
          <p className='text-[20px]'>Subscribe</p>
          <p className='text-[16px]'>Get 10% off your first order</p>
          <div className='relative w-[217px]'>
            <input 
              type="email" 
              placeholder='Enter Your Mail' 
              name="email" 
              className='border-[1px] bg-black w-full text-base p-2 pr-10' 
            />
            <SendHorizontal className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer' />
          </div>
        </div>

        <div className='text-[16px] font-light space-y-5'>
            <p className='font-normal'>Support</p>
            <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
        </div>

        <div className='text-[16px] font-light space-y-5'>
            <p className='font-normal'>Account</p>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
        </div>
        <div className='text-[16px] font-light space-y-5'>
            <p className='font-normal'>Support</p>
            <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
        </div>
      </div>
    </>
  );
}
