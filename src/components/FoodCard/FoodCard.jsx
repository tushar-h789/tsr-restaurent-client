import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({item}) => {
    const {_id, name, image, price, recipe} = item
    const {user} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    // console.log("this is foodcard location",location);
    const axiosSecure = useAxiosSecure()
    const [,refetch] = useCart()

    const handleAddToCart =()=>{
      if(user || user?.email){
        //TODO: send user info database
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price
        }

        axiosSecure.post('/carts', cartItem)
        .then(res =>{
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} is added`,
              showConfirmButton: false,
              timer: 2000
            });
          }
          refetch()
        })

      }else{
        Swal.fire({
          title: "You are not Logged In?",
          text: "Please login to add to the cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from:location}})
          }
        });
      }
    }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="food" /></figure>
  <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-2 px-2">${price}</p>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
     
    <div className="card-actions">
      <button onClick={()=>handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 border-b-orange-500 text-orange-500 bg-slate-200">Add to cart</button>
    </div>
  </div>
</div>
  )
}

export default FoodCard