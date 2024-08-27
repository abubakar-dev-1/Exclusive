"use client";
import React from "react";
import { ProductCardType } from "@/types/allTypes";
import { ProductCardData } from "@/data/ProductCard";
import Button from "./button";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { nanoid } from "nanoid";
import SaleTag from "./saleTag";

export function ProductCard() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const handleQuickViewClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-7 mb-7">
        <div className="w-full justify-center flex items-center">
          <Carousel
            opts={{
              align: "center",
            }}
            className="w-[90%] flex flex-col justify-center items-center"
          >
            <CarouselContent className="relative pt-7">
              {ProductCardData.map((card: ProductCardType) => (
                <CarouselItem
                  key={nanoid()}
                  className="basis-[20%] md:basis-1/2 lg:basis-1/4"
                >
                  <div className=" relative group overflow-hidden rounded-[0.50rem]">
                    <div className="max-w-[100%] p-4 bg-[#F5F5F5] flex justify-center items-center">
                      <img
                        className="max-w-full max-h-full"
                        src={card.image}
                        alt="Image"
                      />
                      <div className="absolute top-3 right-3">
                        <img src="./productCards/wishList.png" alt="" />
                      </div>
                      <div className="absolute top-14 right-3 cursor-pointer">
                        <img
                          src="./productCards/QuickView.png"
                          alt="Quick View"
                          onClick={() => handleQuickViewClick(card.image)}
                        />
                      </div>
                      <div className="absolute top-3 left-3 bg-[#DB4444] text-white px-2 rounded-[0.40rem]">
                        <SaleTag text={card.sale}></SaleTag>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-10 bg-black text-white flex justify-center items-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        Add To Cart
                      </div>
                    </div>
                  </div>

                  <p className="font-semibold mt-2">{card.description}</p>
                  <div className="flex gap-4 mt-3">
                    <p className="text-[#DB4444]">{card.price}</p>
                    <p className="line-through opacity-[50%] font-semibold">
                      {card.prePrice}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex mt-7 mr-10 gap-8">
              <CarouselPrevious className="" />
              <CarouselNext className="" />
            </div>
          </Carousel>
        </div>
        <Button
          className="bg-[#DB4444] text-white px-14 py-[10px]"
          text="View All Products"
        />
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleCloseModal}
        >
          <Zoom>
            <img
              src={selectedImage}
              alt="Zoomed"
              className="max-w-[100%] max-h-[100%] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </Zoom>
        </div>
      )}
    </>
  );
}
