import { HeadingType } from "@/types/allTypes";

export default function Heading({ headingName }: HeadingType) {
    return (
        <p className="text-[#DB4444] font-bold">{headingName}</p>
    )
}