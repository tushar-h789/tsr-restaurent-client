import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [cart] = useCart()
  // console.log(cart.data);

  const navOptions = (
    <div className="flex justify-center items-center">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/dashboard/cart">
          <button className="btn">
          <FaCartArrowDown  className="text-2xl "/>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
          
        </Link>
      </li>
    </div>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar fixed z-10 bg-opacity-30 text-white max-w-screen-xl bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          TSR Restaurant
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <span className="mr-2">{user?.displayName}</span>
            <button onClick={handleLogout} className="btn btn-primary">
              Log Out
            </button>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </label>
          </>
        ) : (
          <>
            <button className="btn btn-warning">
              <Link to="/login">Login</Link>
            </button>
            <button className="btn btn-warning ml-5">
              <Link to="/register">Register</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
