
import featuredImg from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import './Featured.css'

const Featured = () => {
  return (
      <div className=" featured-item bg-fixed p-10 text-white my-20 ">
      <div className="bg-black bg-opacity-30">
      <SectionTitle heading={"Featured Item"} subHeading={"Check it out"}></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 ">
        <div className="">
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>March 20, 2023</p>
          <h3 className="uppercase">WHERE CAN I GET SOME?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore rem nam eum quisquam voluptatibus minus incidunt, unde neque libero accusantium architecto ipsam error labore ut illum voluptate deleniti iure quod ducimus blanditiis id laborum enim excepturi? Et officia esse, corrupti architecto ipsam corporis, reiciendis, deleniti error libero quam harum iure.</p>

          <button className="btn btn-outline bg-orange-500 text-white my-5 uppercase border-b-8">Read more</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Featured