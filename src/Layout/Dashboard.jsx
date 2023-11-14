import {
  FaBars,
  FaCalendar,
  FaCalendarCheck,
  FaCartArrowDown,
  FaCcAmazonPay,
  FaHome,
  FaMailBulk,
  FaShopify,
  FaUserTie,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart()
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <div>
          <h2 className="text-4xl my-8 mx-2 text-white font-bold text-center">
            TSR Restaurant
          </h2>
        </div>
        <ul className="menu gap-y-1 ">
          <li className="text-xl font-bold text-white">
            <NavLink to="/dashboard/userHome">
              <FaHome /> User Home
            </NavLink>
          </li>
          <li className="text-xl font-bold text-white">
            <NavLink to="/dashboard/reservation">
              <FaCalendar /> Reservation
            </NavLink>
          </li>
          <li className="text-xl font-bold text-white">
            <NavLink to="/dashboard/paymentHistory">
              <FaCcAmazonPay /> Payment History
            </NavLink>
          </li>
          <li className="text-xl font-bold text-white">
            <NavLink to="/dashboard/cart">
              <FaCartArrowDown /> My Cart <button className="btn btn-square btn-info btn-sm">{cart.length}</button>
            </NavLink>
          </li>
          <li className="text-xl font-bold text-white">
            <NavLink to="/dashboard/addReview">
              <FaUserTie /> Add Review
            </NavLink>
          </li>
          <li className="text-xl font-bold text-white">
            <NavLink to="/dashboard/myBooking">
              <FaCalendarCheck /> My Booking
            </NavLink>
          </li>
        </ul>

        <div className="divider"></div>
        <ul className="menu gap-y-1">
          <li className="text-xl font-bold text-white">
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li className="text-xl font-bold text-white">
            <NavLink to="/menu">
              <FaBars /> Menu
            </NavLink>
          </li>
          <li className="text-xl font-bold text-white">
            <NavLink to="/order/salad">
              <FaShopify /> Shop
            </NavLink>
          </li>
          <li className="text-xl font-bold text-white">
            <NavLink to="/contact">
              <FaMailBulk /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
