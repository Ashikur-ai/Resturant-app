import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";

 

const ManageItems = () => {
    const [menu] = useMenu();
    const handleDeleteItem = (item) => {
        
    }


    return (
        <div>
            <SectionTitle
                heading="Manage All items"
                subHeading="Hurry up"
            ></SectionTitle>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               #
                            </th>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu?.map((item, index) => <tr
                            key={item._id}>
                                <th>
                                    {index+1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td >
                                    {item.name}
                                </td>
                                <td className="text-right">${item.price}</td>
                                <th>
                                    <button
                                       
                                        className="btn 
                                        bg-orange-500
                                        
                                          
                                        ">
                                        <FaEdit className='text-white'></FaEdit>
                                    </button>
                                </th>
                                <td>
                                    <button
                                        onClick={() => handleDeleteItem(item)}
                                        className="btn btn-ghost btn-xs">
                                        <FaRegTrashAlt className='text-red-600'></FaRegTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }
                        
                       
                    </tbody>
                    

                </table>
            </div> 
        </div>
    );
};

export default ManageItems;