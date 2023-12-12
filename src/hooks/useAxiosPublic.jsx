import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://tsr-restaurent-server.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
