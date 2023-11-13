import Cover from "../../Shared/Cover/Cover"
import MenuItem from "../../Shared/MenuItem/MenuItem"

const MenuCategory = ({items, title, img}) => {
  return (
    <div className="my-16">
        {title && <Cover img={img} title={title}></Cover>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {
            items.map(item => <MenuItem
                key={item._id}
                item= {item}
            ></MenuItem>)
        }
    </div>
    </div>
  )
}

export default MenuCategory