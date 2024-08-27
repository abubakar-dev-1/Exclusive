import React from 'react'
import HeroList from './landingPage-hero-list'
import FreshSale from './freshSale'
import { ProductCard } from './productCard'


export default function Home() {
  return (
    <>
      <HeroList/>
      <FreshSale/>
      <ProductCard></ProductCard>
    </>
  )
}
