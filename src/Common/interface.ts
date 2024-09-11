import { ComponentType, ReactNode } from "react";

export interface ProductDetail {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: {
      id: number;
      name: string;
      image: string;
      creationAt: string;
      updatedAt: string;
    };
}

export interface RootLayoutProps {
  children: ReactNode;
}

export interface RootLayoutHocProps{
  component: ComponentType;
}