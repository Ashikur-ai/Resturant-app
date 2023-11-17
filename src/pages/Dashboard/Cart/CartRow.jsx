import React from 'react';

const CartRow = (item) => {
    console.log(item)
    const { name, image, price } = item.item;
    return (
        <>
            <tr>
                
                <th>
                    <label>
                       
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold"></div>
                            
                        </div>
                    </div>
                </td>
                <td>
                    {name}
                </td>
                <td>{price}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>   
        </>
    );
};

export default CartRow;