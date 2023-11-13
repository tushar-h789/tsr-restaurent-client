import { Link, useNavigate } from "react-router-dom";
import registerImg from "../../../assets/others/registration.png";
import { AuthContext } from "../../../provider/AuthProvider";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // const handleLogin =(event)=>{
  //     event.preventDefault()
  //     const form = event.target;
  //     const name = form.name.value;
  //     const imageURL = form.imageURL.value;
  //     const email = form.email.value;
  //     const password = form.password.value;
  //     console.log( name, imageURL, email, password);

  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password, data.name, data.photoURL).then(
      (result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User Created successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            logOut();
          })
          .then(() => {
            navigate("/login");
          })
          .catch((error) => console.log(error));
      }
    );
  };

  return (
    <div>
      <Helmet>
        <title>TSR || Register</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:w-1/2 mx-10">
            <img src={registerImg} alt="" />
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-white text-md mt-2 rounded-sm px-2 py-1 bg-red-500">
                    Name is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photoURL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  name="photoURL"
                  placeholder="photoURL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-white text-md mt-2 rounded-sm px-2 py-1 bg-red-500">
                    photoURL is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-white text-md mt-2 rounded-sm px-2 py-1 bg-red-500">
                    Email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <input
                  type="text"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s)/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />

                {errors.password?.type === "required" && (
                  <span className="text-white text-md mt-2 rounded-sm px-2 py-1 bg-red-500">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-white text-md mt-2 rounded-sm px-2 py-1 bg-red-500">
                    Password must be 6 character
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-white text-md mt-2 rounded-sm px-2 py-1 bg-red-500">
                    Password less then 20 character
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-white text-md mt-2 rounded-sm px-2 py-1 bg-red-500">
                    Password must be One Upper case, One lower case, One digit,
                    One special character
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div className="text-center my-2">
                <p>
                  Have your account? Please{" "}
                  <span className="font-bold text-orange-500">
                    <Link to="/login">Login</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
