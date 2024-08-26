import React from 'react'

export default function AboutHero() {
  return (
    <div className='flex justify-between items-center'>
    <div className='w-[40%]'>
        <h1 className='text-[54px] tracking-wider font-bold mb-5'>Our Story</h1>    
        <p className='leading-7'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
        <p className='leading-7'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
    </div>       
    <div className='w-[40%]'>
        <img src="./aboutPageImages/bannerImage.png" alt="" />
    </div> 
</div>
  )
}
