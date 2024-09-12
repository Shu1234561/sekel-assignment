import withRootLayout from '../HOCs/withRootLayout'
import { useDispatch, useSelector } from 'react-redux'
import { CartStatus } from '../Common/interface'
import { sanitizeImages } from '../Utils/helper'
import { removeItems } from '../store/cart'
import { decrement } from '../store/countCart'

const ShoopingCart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state: CartStatus) => state?.cart?.items)
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const handleRemoveFromCart = (productId: number) => {
        dispatch(removeItems(productId));
        dispatch(decrement());
    }

    return (
        <div className='flex gap-4 justify-between mx-auto max-w-[1200px] mt-8'>
            {/* left section */}
            <div className='flex flex-col gap-4 w-[820px]'>
                {cartItems.length > 0 ?
                    cartItems.map((item, index) =>
                        <div className='bg-white flex w-full align-center gap-4 p-6 h-40'>
                            <img src={sanitizeImages(item.images)[0]} alt='img' className='rounded-md w-28 h-28' />
                            <div className='h-auto'>
                                <p className='text-[#212121] text-lg'>{item.title}</p>
                                <p className='font-medium text-lg mt-5'>₹{item.price}</p>
                                <div className='flex items-center mt-3 justify-between'>
                                    <p className='font-medium text-lg w-fit cursor-pointer hover:text-[#2370f4]' onClick={() => handleRemoveFromCart(item.id)}>Remove</p>
                                    {/* <p className='font-medium text-lg'>item added: 2</p> */}
                                </div>
                            </div>
                        </div>
                    ) :
                    <div className='flex bg-white items-center justify-center w-full h-full'>
                        <p className='text-lg'>No items added</p>
                    </div>
                }
            </div>

            {/* right section */}
            <div className='w-96 h-72 bg-white'>
                <p className='pt-3 px-6 text-[#878787] min-h-12 font-medium border-b border-[#f0f0f0] text-[16px]'>PRICE DETAILS</p>
                <div className='px-6'>
                    <div className='w-fulll flex flex-col border-b-2 border-dashed border-[#878787]'>
                        <p className='flex justify-between mt-5 text-[16px]'>{`Price (${cartItems.length} items)`} <span>{`₹${totalPrice}`}</span></p>
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
                        <span className='font-medium text-lg'>₹{totalPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRootLayout({
    component: ShoopingCart
})