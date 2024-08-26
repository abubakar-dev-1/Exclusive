import React from "react";
import { ServiceData } from "@/data/serviceData";
import { ServiceType } from "@/types/allTypes";
export default function AllServices() {
  return (
    <div className="flex justify-evenly gap-6 mt-40">
      {ServiceData.map((service: ServiceType) => {
        return (
          <div className="flex flex-col gap-2 items-center w-[249px] py-6">
            <img src={service.image} alt="" />
            <p className="font-bold text-[20px]">{service.name}</p>
            <p className="text-[14px]">{service.description}</p>
          </div>
        );
      })}
    </div>
  );
}
