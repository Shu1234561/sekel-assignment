import { ProductDetail } from "../Common/interface";
import { sanitizeImages } from "../Utils/helper";
import Button from "./Button";
interface CardComponentProps {
  item: ProductDetail;
  onDetail: (e: number) => void;
  onAddToCart: (item: ProductDetail) => void;
}

const CardComponent = ({ item, onDetail, onAddToCart }: CardComponentProps) => {
  const sanitizedImages = sanitizeImages(item?.images);

  return (
    <div
      className="w-[320px] border border-gray-200 rounded-md mt-4 shadow-md p-4 cursor-pointer"
      onClick={() => onDetail(item.id)}
    >
      <img
        src={sanitizedImages[0] || "https://i.imgur.com/Wv2KTsf.jpeg"}
        alt={item?.title}
        className="rounded-md m-auto min-h-[267px]"
      />
      <h3
        className="text-[16px] font-bold text-[#282c3f] mb-1.5 overflow-hidden text-ellipsis whitespace-nowrap"
        title="Change the title"
      >
        {item?.title}
      </h3>
      <div className="text-sm font-bold text-[#282c3f] whitespace-nowrap my-2">
        <span>{`Rs.${item?.price}`}</span>
      </div>
      <Button
        label={"Add to Cart"}
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          onAddToCart(item);
        }}
      />
      {/* <p className='text-sm text-[#5a5a5a] leading-relaxed'>Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or a casual outing.</p> */}
    </div>
  );
};

export default CardComponent;
