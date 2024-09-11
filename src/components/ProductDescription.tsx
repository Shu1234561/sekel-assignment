import React, { useEffect, useState } from "react";
import Button from "./Button";
import withRootLayout from "../HOCs/withRootLayout";
import { useParams } from "react-router-dom";
import { ProductDetail } from "../Common/interface";
import { sanitizeImages } from "../Utils/helper";

const ProductDescription = () => {
  const [data, setData] = useState<ProductDetail[]>([]);
  const { productId } = useParams();

  const getProducts = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const productIdNumber = parseInt(productId || "", 10);
  const details = data.find((item) => item?.id === productIdNumber);
  const sanitizedImages = details ? sanitizeImages(details.images) : [];

  return (
    <div className="mt-8">
      <div className="w-[58%] float-left grid grid-cols-2 gap-4">
        {sanitizedImages?.map((img: string, index: number) => (
          <img
            src={img}
            alt="img"
            className="w-full object-cover border border-[#f5f5f6]"
            key={index}
          />
        ))}
      </div>
      <div className="w-[42%] float-left pl-8">
        <div className="border-b-2 border-[#d4d5d9] py-2">
          <h1 className="text-[24px] font-bold text-[#282c3f]">
            {details?.title}
          </h1>
          <h1 className="text-[20px] text-[#535665] pt-1">{details?.title}</h1>
        </div>
        <div className="border-b-2 border-[#d4d5d9] py-4">
          <p>
            <span className="text-[#282c3f] font-bold text-[24px]">
              <strong>{`₹ ${details?.price}`}</strong>
            </span>
          </p>
          <p className="mb-3">
            <span className="text-[#03a685] font-bold">
              inclusive of all taxes
            </span>
          </p>
          <p className="text-[#535665] text-lg">{details?.description}</p>
        </div>

        <div className="mt-4">
          <Button label={"Add to Cart"} />
        </div>
      </div>
    </div>
  );
};

export default withRootLayout({
  component: ProductDescription,
});
