import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { useLoaderData } from "react-router-dom";
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { name, category, recipe, price, _id } = useLoaderData();
    console.log(name)
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url 
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url 
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }

            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                //show success popup
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log(res.data);
    };
    // console.log(item);
    return (
        <div>
            <SectionTitle
                heading="Update an Item"
                subHeading="Refresh info"
            ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name</span>

                        </label>
                        <input
                            {...register('name')}
                            defaultValue={name}
                            type="text" placeholder="Type here" className="input input-bordered w-full " />

                    </div>
                    <div className="flex gap-6">
                        {/* category  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category</span>

                            </label>
                            <select
                                defaultValue={category}
                                {...register('category')}
                                className="select select-bordered w-full ">
                                <option disabled value="default">Select a Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">pizza</option>
                                <option value="soup">soup</option>
                                <option value="dessert">dessert</option>
                                <option value="drinks">drinks</option>
                            </select>

                        </div>


                        {/* price  */}

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price</span>

                            </label>
                            <input
                                {...register('price')}
                                defaultValue={price}
                                type="number" placeholder="Type price" className="input input-bordered w-full " />

                        </div>

                    </div>

                    {/* recipe details  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>

                        </label>
                        <textarea {...register('recipe')}
                            defaultValue={recipe}
                            className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>

                    </div>

                    <div className="form-control w-full my-6">
                        <input type="file" {...register('image')} className="file-input file-input-bordered w-full max-w-xs" />
                    </div>


                    <button className="btn">Update Item</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;