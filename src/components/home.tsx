import React from 'react'
import HeroList from './landingPage-hero-list'
import FreshSale from './freshSale'
import { ProductCard } from './productCard'
import Categories from './categories'
import Heading from './heading'
import NewArrival from './new-arrival-sec'
import AllServices from '@/components/AllServices'
export default function Home() {
  return (
    <>
      <HeroList/>
      <FreshSale/>
      <ProductCard></ProductCard>
      <Categories/>
      <Heading headingName='This Month' heading='Best Selling Products'/>
      <ProductCard></ProductCard>
      <div className='flex justify-center mb-1'>
        <img src="./JBL.png" alt="" />
      </div>
      <Heading headingName='Our Products' heading='Explore Our Products'/>
      <ProductCard></ProductCard>
      <NewArrival/>
      <AllServices/>
    </>
  )
}
