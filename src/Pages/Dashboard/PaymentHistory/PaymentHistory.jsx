import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      console.log(res);
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-3xl"> Total Payment: {payments.length}</h2>

      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Price</th>
        <th>Transaction Id</th>
        <th>Email</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {payments.map((payment, index) => <tr key={payment._id}>
        <th>{index + 1}</th>
        <td>${payment.price}</td>
        <td>{payment.transactionId}</td>
        <td>{payment.email}</td>
        <td>{payment.date}</td>
        <td>{payment.status}</td>
      </tr>)}
      
    </tbody>
  </table>
</div>
    </div>
  );
};

export default PaymentHistory;
