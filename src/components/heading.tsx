import { HeadingType } from "@/types/allTypes";

export default function Heading({ headingName,heading }: HeadingType) {
    return (
      <div>
        <div className="flex items-center gap-2">
        <img src="./headingImage.png" alt="" />
        <p className="text-[#DB4444] font-bold">{headingName}</p>
      </div>
            <div className="flex gap-10 items-center mb-5">
            <h1 className="text-[36px] font-bold">{heading}</h1>
          </div>
      </div>
    )
}