import { Helmet} from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import coverImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';

const Menu = () => {
  return (
    <div>
         <Helmet>
        <title>TSR || Menu</title>
      </Helmet>
      <Cover img={coverImg} title={"Our Menu"}></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={coverImg} title={"Our Menu"}></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={coverImg} title={"Our Menu"}></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={coverImg} title={"Our Menu"}></Cover>
      <PopularMenu></PopularMenu>
    </div>
  )
}

export default Menu