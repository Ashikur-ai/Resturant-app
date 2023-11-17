import React from 'react';
import useCart from '../../../hooks/useCart';
import CartRow from './CartRow';

const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    return (
        <div>
            <div className='flex justify-evenly'>
                <h2 className="text-4xl">Items: { cart.length }</h2>
                <h2 className="text-4xl">Total Price: {totalPrice}</h2>
                <button className='btn btn-primary'>Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart?.map(item => <CartRow key={item._id} item={item}></CartRow>)
                        }
                        
                    </tbody>
                    {/* foot */}
                    

                </table>
            </div>
        </div>
    );
};

export default Cart;