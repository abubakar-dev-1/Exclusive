import React from "react";
import { ProductCardData } from "@/data/ProductCard";
import { ProductCardType } from "@/types/allTypes";
import Heading from "@/components/heading";
import SaleTag from "@/components/saleTag";
export default function ForYouCards() {
  const itemCount = ProductCardData.length;

  return (
    <>
      <div className="p-10 pb-16">

      <div className="flex justify-between items-center">
      <Heading headingName="Just For You" className="text-black"/>
      <div className="pb-6 pr-2">
            <button className=" hover:bg-[#DB4444] hover:ease-in-out transition-all hover:text-white px-6 py-2 rounded-lg border-[1px] border-black">Move All To Cart</button>
          </div>
      </div>
      <div className="flex flex-wrap gap-6">
          {ProductCardData.slice(0, 5).map((card: ProductCardType) => {
            return (
              <div className="flex flex-col">
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
