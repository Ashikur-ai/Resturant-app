import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit } = useForm();
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
        console.log(res.data);
    };
    return (
        <div>
            <SectionTitle
            heading="add an item"
            subHeading="What's new?"
            ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} />

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name</span>
                            
                        </label>
                        <input
                            {...register('name')}
                            type="text" placeholder="Type here" className="input input-bordered w-full " />
                        
                    </div>
                    <div className="flex gap-6">
                        {/* category  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category</span>

                            </label>
                            <select
                            defaultValue="default"
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
                                type="number" placeholder="Type price" className="input input-bordered w-full " />

                        </div>

                    </div>

                    {/* recipe details  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                            
                        </label>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                        
                    </div>

                    <div className="form-control w-full my-6">
                        <input type="file" {...register('image')} className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    
                   
                    <button className="btn">Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;