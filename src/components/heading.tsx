import { HeadingType } from "@/types/allTypes";
import { cn } from "@/lib/utils";
export default function Heading({ headingName,heading, className }: HeadingType) {
    return (
      <div>
        <div className="flex items-center gap-2">
        <img src="./headingImage.png" alt="" />
        <p className={cn("text-[#DB4444] font-bold", className)}>{headingName}</p>
      </div>
            <div className="flex gap-10 items-center mb-5">
            <h1 className="text-[36px] font-bold">{heading}</h1>
          </div>
      </div>
    )
}