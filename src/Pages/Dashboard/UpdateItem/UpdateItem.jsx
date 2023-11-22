import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateItem = () => {
    const {name, price, recipe, _id } = useLoaderData()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()


    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();



    const onSubmit = async (data) => {
      console.log("updated data:",data);
      //image upload to imgbb and then get an url
      const imgFile = {image: data.image[0]}
      const res = await axiosPublic.post(image_hosting_api, imgFile, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      if(res.data.success){
        //now send the menu item to the server with the image url
        const menuItem = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          recipe: data.recipe,
          image: res.data.data.display_url
        }
        //TODO: send add item data in the server
        const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
        console.log(menuRes.data);
        if(menuRes.data.modifiedCount > 0){
          reset()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} is updated food in the item`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
      console.log(res.data);
    };


  return (
    <div>
        <SectionTitle heading='Update Item' subHeading='Now Update this item'></SectionTitle>
        <div className="w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Recipe name*</span>
              </label>
              <input
              defaultValue={name}
                {...register("name", { required: true })}
                type="text"
                placeholder="name"
                className="input input-bordered w-full "
              />
              {errors.name?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Recipe name is required
                </p>
              )}
            </div>
            <div className="flex items-center w-full gap-20 my-6">
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Pick a Category</span>
                </label>
                <select
                defaultValue='category'
                  {...register("category", { required: true })}
                  className="select select-bordered w-full"
                >
                  
                  <option disabled value='default'>
                    Category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drink">Drink</option>
                </select>
                {errors.category?.type === "required" && (
                    <p role="alert" className="text-red-500">
                      Item is required
                    </p>
                  )}
              </div>
              <div className="form-control  w-full">
                <label className="label">
                  <span className="label-text">Price*</span>
                </label>
                <input
                defaultValue={price}
                  {...register("price", { required: true })}
                  type="text"
                  placeholder="price"
                  className="input input-bordered w-full"
                />
                {errors.price?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Price is required
                  </p>
                )}
              </div>
            </div>
            <div className="">
              <textarea
                placeholder="recipe"
                defaultValue={recipe}
                {...register("recipe")}
                className="textarea textarea-bordered textarea-lg w-full "
              ></textarea>
              {errors.recipe?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Recipe Description is required
                </p>
              )}
            </div>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs mt-2"
            />
            {errors.image?.type === "required" && (
              <p role="alert" className="text-red-500">
                Price is required
              </p>
            )}
          </div>

          <input
            className="btn btn-warning w-full mt-5 text-xl"
            type="submit"
            value="Update Item"
          />
        </form>
      </div>
    </div>
  )
}

export default UpdateItem