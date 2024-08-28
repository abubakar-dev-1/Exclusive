import React from "react";
import AboutHero from "@/components/aboutHero";
import AboutMatrix from "@/components/aboutMatrix";
import AboutOwner from "@/components/aboutOwner";
import AllServices from "@/components/AllServices";
import Link from "next/link";
export default function About() {
  return (
    <>
      <div className="text-gray-500 mb-4">
        <span>
          {" "}
          <Link href="/"> Home </Link>
        </span>{" "}
        / <span className="text-black font-semibold">About</span>
      </div>
      <AboutHero />
      <AboutMatrix />
      <AboutOwner />
      <AllServices />
    </>
  );
}
