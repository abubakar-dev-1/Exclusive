import React from "react";
import { OwnerData } from "@/data/aboutOwner";
import { OwnerType } from "@/types/allTypes";
export default function AboutOwner() {
  return (
    <div className="flex justify-center gap-6 mt-24">
      {OwnerData.map((owner: OwnerType) => {
        return (
          <div className="flex flex-col gap-2 items-start w-[370px] py-6">
            <img src={owner.image} alt="" />
            <p className="font-bold text-[30px]">{owner.name}</p>
            <p>{owner.description}</p>
            <img src="./aboutPageImages/socialMedia.png" alt="" />
          </div>
        );
      })}
    </div>
  );
}
