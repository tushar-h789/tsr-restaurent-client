
const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="food" /></figure>
  <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-2 px-2">${price}</p>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
     
    <div className="card-actions">
      <button className="btn btn-outline border-0 border-b-4 border-b-orange-500 text-orange-500 bg-slate-200">Add to cart</button>
    </div>
  </div>
</div>
  )
}

export default FoodCard