import React from 'react'

const ShoopingCart = () => {
    return (
        <div className='flex gap-4 justify-between mx-auto max-w-[1260px] mt-8'>
            <div className='bg-white flex w-full align-center gap-4 p-6 h-40'>
                <img src='https://i.imgur.com/Wv2KTsf.jpeg' alt='img' className='rounded-md w-28 h-28' />
                <div className='h-auto'>
                    <p className='text-[#212121] text-lg'>CardComponentProps CardComponentProps</p>
                    <p className='font-medium text-lg mt-5'>₹130</p>
                </div>
            </div>

            <div className='w-[380px] bg-white'>
                <p className='pt-3 px-6 text-[#878787] min-h-12 font-medium border-b border-[#f0f0f0] text-[16px]'>PRICE DETAILS</p>
                <div className='px-6'>
                    <div className='w-fulll flex flex-col border-b-2 border-dashed border-[#878787]'>
                        <p className='flex justify-between mt-5 text-[16px]'>Price (2 items) <span>₹40,589</span></p>
                        <div className='flex justify-between my-5 text-[16px]'>
                            <p>Delivery Charges</p>
                            <div className='flex gap-2'>
                                <span className='line-through text-[#878787]'>₹80</span>
                                <span className='text-[#388e3c]'>Free</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between my-5'>
                        <p className='font-medium text-lg'>
                            Total Amount
                        </p>
                        <span className='font-medium text-lg'>₹28,120</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoopingCart