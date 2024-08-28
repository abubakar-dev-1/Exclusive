"use client";
import React, { useState } from "react";
import AproductDetail from "@/components/productDetail";
import ForYouCards from "@/components/forYouCards";
import Link from "next/link";
export default function ProductDetail() {
  return(
    <>
          <div className="pl-8 text-gray-500 mb-4">
        <span>
          {" "}
          <Link href="/user"> Account / </Link>
        </span>{" "}
        <span> <Link href="/">Gaming</Link></span>
        {" "}
        / <span className="text-black font-semibold">Havic HV G-92 Gamepad</span>
      </div>
    <AproductDetail/>
    <ForYouCards/>
    </>
)
  
}
