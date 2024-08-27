import React from "react";
import Heading from "./heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { nanoid } from "nanoid";
import { CategoriesData } from "@/data/categoriesData";
import { CategoriesIconsType } from "@/types/allTypes";
export default function Categories() {
  return (
    <div>
        <Heading headingName="Categories" heading="Browse By Category"/>
      <div className="flex flex-col items-center gap-7 mb-7">
        <div className="w-[60%] justify-center flex items-center">
          <Carousel
            opts={{
              align: "center",
            }}
            className="w-[90%] flex flex-col justify-center items-center"
          >
            <CarouselContent className="relative">
              {CategoriesData.map((card: CategoriesIconsType) => (
                <CarouselItem
                  key={nanoid()}
                  className="basis-[20%] md:basis-1/4 lg:basis-1/6"
                >
                  <div className=" relative w-full group hover:bg-[#DB4444] hover:ease-in-out transition-all overflow-hidden">
                    <div className="group-hover:text-white group-hover:ease-in-out trasnsition-all max-w-[100%] p-7 gap-1 border-[1px] flex flex-col justify-center items-center">
                      {card.icon}
                      <p className="mt-2">{card.name}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="absolute top-[-75px] right-0 flex mt-7 mr-10 gap-8">
              <CarouselPrevious className="" />
              <CarouselNext className="" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
