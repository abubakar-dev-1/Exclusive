import { JSX } from "react";
export type MatrixType = {
    image: string;
    price: string;
    description: string;
}
export type OwnerType = {
    image: string;
    name: string;
    description: string;
}
export type ServiceType = {
    image: string;
    name: string;
    description: string;
}
export type HeroListType = {
    listName: string;
}
export type HeadingType = {
    headingName: string;
    heading?: string;
}
export type ProductCardType = {
    image: string;
    description: string;
    price: string;
    prePrice: string;
    sale:string;
}
export type ButtonProp= React.HTMLAttributes<HTMLDivElement> &{
    text: string;
}
export type SaleTagProp= React.HTMLAttributes<HTMLDivElement> &{
    text: string;
}
export type CategoriesIconsType = {
    name: string;
    icon: JSX.Element;
}