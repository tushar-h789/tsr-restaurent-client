
const MenuItem = ({item}) => {
    // console.log(item);
    const {name, image, price, recipe} = item
  return (
    <div className="flex items-center">
        <img className="w-[100px]" style={{borderRadius: "0 200px 200px 200px"}} src={image} alt="" />
        <div className="mx-2">
            <h3 className="text-2xl ">{name}-------------</h3>
            <p>{recipe}</p>
        </div>
        <p className="text-orange-500">${price}</p>
        
    </div>
  )
}

export default MenuItem