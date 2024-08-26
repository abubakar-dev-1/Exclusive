import React from "react";
import { HeroListData } from "@/data/heroList";
import { HeroListType } from "@/types/allTypes";
export default function HeroList() {
  return (
    <div className="flex px-10 gap-48 mb-10">
      <div className="flex flex-col gap-3 w-[90%]">
        {HeroListData.map((list: HeroListType) => {
          return (
            <div className="flex flex-col">
              <p className="text-sm">{list.listName}</p>
            </div>
          );
        })}
      </div>
      <img src="./Hero/image1.png" alt="" />
    </div>
  );
}
