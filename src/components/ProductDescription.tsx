import React from 'react'
import Button from './Button';


const ProductDescription = () => {
    const data = {
        id: 12,
        title: 'Classic Black Baseball Cap',
        price: 58,
        description:
            'Elevate your casual wear with this timeless black baseball cap. Made with high-quality, breathable fabric, it features an adjustable strap for the perfect fit. Whether you’re out for a jog or just running errands, this cap adds a touch of style to any outfit.',
        images: ['https://i.imgur.com/KeqG6r4.jpeg', 'https://i.imgur.com/QkIa5tT.jpeg', 'https://i.imgur.com/KeqG6r4.jpeg'],
        creationAt: '2024-09-10T23:45:18.000Z',
        updatedAt: '2024-09-10T23:45:18.000Z',
        category: {
            id: 1,
            name: 'Clothes',
            image: 'https://i.imgur.com/QkIa5tT.jpeg',
            creationAt: '2024-09-10T23:45:18.000Z',
            updatedAt: '2024-09-10T23:45:18.000Z',
        },
    }
    return (
        <div className='mt-8'>
            <div className='w-[58%] float-left grid grid-cols-2 gap-4'>
                {data?.images?.map((img, index) => (
                    <img src={img} alt='img' className='w-full object-cover border border-[#f5f5f6]' key={index} />
                ))}
            </div>
            <div className='w-[42%] float-left pl-8'>
                <div className='border-b-2 border-[#d4d5d9] py-2'>
                    <h1 className='text-[24px] font-bold text-[#282c3f]'>{data?.title}</h1>
                    <h1 className='text-[20px] text-[#535665] pt-1'>{data?.title}</h1>
                </div>
                <div className='border-b-2 border-[#d4d5d9] py-4'>
                    <p>
                        <span className='text-[#282c3f] font-bold text-[24px]'>
                            <strong>{`₹ ${data?.price}`}</strong>
                        </span>
                    </p>
                    <p className='mb-3'>
                        <span className='text-[#03a685] font-bold'>
                            inclusive of all taxes
                        </span>
                    </p>
                    <p className='text-[#535665] text-lg'>
                        {data?.description}
                    </p>
                </div>

                <div className='mt-4'>
                    <Button label={'Add to Cart'} />
                </div>
            </div>
        </div>
    )
}

export default ProductDescription;