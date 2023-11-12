import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Category from "../Category/Category";
import ContactNumber from "../ContactNumber/ContactNumber";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
        <Helmet>
        <title>TSR || Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <BistroBoss></BistroBoss>
      <PopularMenu></PopularMenu>
      <ContactNumber></ContactNumber>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
