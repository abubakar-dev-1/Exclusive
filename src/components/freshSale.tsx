import React from "react";
import Heading from "./heading";
import { MyTimer } from "./timer";
export default function FreshSale() {
  return (
    <div>
        <Heading headingName="Today's" heading="" />
      <div className="flex gap-10 items-center">
        <h1 className="text-[36px] font-bold">Fresh Sales</h1>
        <div className="pb-3">
          <MyTimer durationDays={3}></MyTimer>
        </div>
      </div>
    </div>
  );
}
