import { loadStripe } from "@stripe/stripe-js"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from "./CheckoutForm"

//TODO: 
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_METHOD)
const Payment = () => {
  return (
    <div>
        <SectionTitle heading='Payment' subHeading='This is payment page'></SectionTitle>
        <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    </div>
  )
}

export default Payment