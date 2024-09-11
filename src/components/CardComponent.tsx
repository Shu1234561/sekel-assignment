import { ProductDetail } from "../Common/interface";

interface CardComponentProps {
    item: ProductDetail;
}

const CardComponent = ({ item }: CardComponentProps) => {
    const sanitizeImages = (images: string[]) => {
        return images.map(image => image.replace(/[\[\]\"\']/g, ''));
    }
    const sanitizedImages = sanitizeImages(item?.images);
    // console.log("sanitizedImages:::", sanitizedImages);
    
    return (
        <div className='w-[300px] border border-gray-200 rounded-md mt-4 shadow-md p-4 cursor-pointer'>
            <img src={sanitizedImages[0] || 'https://i.imgur.com/Wv2KTsf.jpeg'} alt={item?.title} className='rounded-md m-auto min-h-[267px]'/>
            {/* {item.images.length > 1 ?
                    item.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={item.title}
                            style={{ width: '200px', margin: '10px' }} // Adjust width and margin as needed
                        />
                    ))
                :
            <img src={item?.images[0]} alt='img' className='rounded-md m-auto'/>
        } */}
            <h3 className='text-[16px] font-bold text-[#282c3f] mb-1.5 overflow-hidden text-ellipsis whitespace-nowrap' title='Change the title'>{item?.title}</h3>
            <div className='text-sm font-bold text-[#282c3f] whitespace-nowrap my-2'>
                <span>{`Rs.${item?.price}`}</span>
            </div>
            {/* <p className='text-sm text-[#5a5a5a] leading-relaxed'>Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or a casual outing.</p> */}
        </div>
    )
}

export default CardComponent;