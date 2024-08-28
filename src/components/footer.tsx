import React from 'react';
import { SendHorizontal , FacebookIcon , InstagramIcon ,LinkedinIcon ,TwitterIcon } from 'lucide-react';
import Link from 'next/link';
export default function Footer() {
  return (
    <>
      <div className='bg-black text-white gap-[60px] p-10 flex justify-between '>
        <div className='text-[24px] font-light space-y-5 w-[18%]'>
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

        <div className='text-[16px] font-light space-y-5 w-[40%] '>
            <p className='font-normal text-[20px]'>Support</p>
            <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
        </div>

        <div className='text-[16px] font-light space-y-5 w-[25%]'>
            <p className='font-normal text-[20px]'>Account</p>
            <p>My Account</p>
            <div>
               <span> <Link href="/login"> Login </Link></span> / <span> <Link href="/signup"> Register </Link></span> 
              
            </div>
            <p> <Link href="/cart"> Cart </Link></p>
            <p>Wishlist</p>
            <p>Shop</p>
        </div>
        <div className='text-[16px] font-light space-y-5 w-[30%]'>
            <p className='font-normal text-[20px]'>Quick Link</p>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p><Link href="/contactUs"> Contact</Link></p>
        </div>
        <div className='text-[16px] font-light space-y-5 w-[40%]'>
            <p className='font-normal text-[20px]'>Download App</p>
            <p>Save $3 with App New User Only</p>
            <img src="/Frame.png" alt="" />

            <div className='flex gap-[24px]'>
                <LinkedinIcon/>
                <FacebookIcon/>
                <TwitterIcon/>
                <LinkedinIcon/>
            </div>
        </div>
      </div>
    </>
  );
}
