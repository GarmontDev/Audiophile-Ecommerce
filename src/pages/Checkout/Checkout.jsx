import { Link } from "react-router-dom";
import "../../assets/styles/styles.css"
import { CartContext } from "../../components/Cart/Context/CartContext";
import { useContext, useState } from "react";
import CustomInputText from "../../components/CustomInputText";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import CustomRadioButton from "../../components/CustomRadioButton";


const Checkout = ({setCheckoutModal}) => { 
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal, getShippingCost, getTotalVAT } = useContext(CartContext)

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    name: "dsfaf",
    email: "huifhdsfds@jdsaio.com",
    phonenumber: 357153242, //undefined
    address: "dasgfd 159",
    zipcode: 22222, //undefined
    city: "asd",
    country: "dsadas",
    paymentmethod: "cash",
  }

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const checkoutSchema = yup.object().shape({
    name: yup.string()
      .min(2, "Name is too short")
      .max(25, "Name is too long")
      .matches(/^[a-zA-Z ]*$/, "Name should not contain numbers")
      .strict(true)
      .required("*Please provide a name"),
    email: yup.string()
      .email("Invalid email format")
      .required("*Required"),
    phonenumber: yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(9, "Too short")
      .max(12, "Too long")
      .required("*Required"),
    address: yup.string()
      .min(2, "Address is too short")
      .max(40 , "Address is too long")
      .required("*Required"),
    zipcode: yup.number()
      .integer()
      .min(6, "Too short")
      .max(99999, "Too long")
      .required("*Required"),
    city: yup.string()
      .min(2, "City name is too short")
      .max(40 , "City name is too long")
      .matches(/^[a-zA-Z ]*$/, "City name should not contain numbers")
      .required("*Required"),
    country: yup.string()
      .min(2, "Country name is too short")
      .max(40 , "Country name is too long")
      .matches(/^[a-zA-Z ]*$/, "Country name should not contain numbers")
      .required("*Required"),
    paymentmethod: yup.string()
      .required("*Select a payment method"),
  });

  const handleSubmit = async (values) => {
    const errors = await checkoutSchema.validate(values);
    console.log("HANDLe")
    if (errors) {
      console.log(errors)
    } else {
      alert("Submitting form successfully")
    }
  };

 
  return (
    <>
      <div className="pl-6 pt-4 text-[#8c8c8c] font-medium text-lg">
        <Link to="/">
            Go Back
        </Link>
      </div>
      <section className="ml-6 mr-6 pl-6 pr-6 mt-4 pt-4 rounded-md bg-white">
        <h1 className="font-bold text-2xl tracking-wider">
          CHECKOUT
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={checkoutSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => {
            const { errors, touched, isValid, dirty } = formik;
            return (
              <Form>
                <h3>
                    BILLING DETAILS
                </h3>
                  <CustomInputText name="name" type="text" label="Name" placeholder="Alexei Ward"/>
                  <CustomInputText name="email" type="text" label="Email" placeholder="alexei@mail.com"/>
                  <CustomInputText name="phonenumber" type="text" label="Phone number" placeholder="612123123"/>

                <h3>
                    SHIPPING INFO
                </h3>
                  <CustomInputText name="address" type="text" label="Your Address" placeholder="1137 Williams Avenue"/>
                  <CustomInputText name="zipcode" type="number" label="Zip Code" placeholder="10001"/>
                  <CustomInputText name="city" type="text" label="City" placeholder="New York"/>
                  <CustomInputText name="country" type="text" label="Country" placeholder="United States"/>
                  
                <h3>
                    PAYMENT DETAILS
                </h3>
                <div className="mt-4">
                  <CustomRadioButton name="paymentmethod" label="Paypal" value="paypal"/>
                  <CustomRadioButton name="paymentmethod" label="Card" value="card"/>
                  <CustomRadioButton name="paymentmethod" label="Bizum" value="bizum"/>
                </div>

                <div id="summary" className="ml-2 mr-2 p-4 mt-4 pt-4 rounded-md bg-white">
                  <h2>SUMMARY</h2>
                    {cartItems?.map((item, index) => {
                      return(
                          <div key={index} className="grid grid-cols-5 pb-4">
                            <img alt={item.name} src={"src/"+item.image?.mobile} className="rounded-lg h-16 w-16"/>
                              <div className="pl-4 pr-4 pt-2 text-sm col-span-3">
                                <div className="font-bold text-black">
                                  {item.name}
                                </div>
                                <div className="text-[#666666]">
                                  {item.price} €
                                </div>
                              </div>
                              <div className="text-gray-500 font-bold w-auto h-10 text-lg m-auto flex">
                                  x{item.quantity}
                              </div>
                          </div>
                        )
                    })}
                  <div className="grid grid-cols-2 gap-2 mt-4">
                      <h4>TOTAL</h4>
                      <div className="checkout-money-text text-right">
                          {(getCartTotal()).toLocaleString("es-ES", {maximumFractionDigits:2})} €
                      </div>
                      <h4>SHIPPING</h4>
                      <div className="checkout-money-text text-right">
                          {getShippingCost()} €
                      </div>
                      <h4>VAT (INCLUDED)</h4>
                      <div className="checkout-money-text text-right pb-4">
                          {(getTotalVAT()).toLocaleString("es-ES", {maximumFractionDigits:2})} €
                      </div>
                      <h4>GRAND TOTAL</h4>
                      <div className="checkout-money-text text-right text-lg text-[#f4a072]">
                          {((getCartTotal()+getShippingCost())).toLocaleString("es-ES", {maximumFractionDigits:2})} €
                      </div>
                  </div>
                <button 
                  type="submit"
                  className={(dirty && !isValid) ? "see-product-disabled-btn" : "see-product-orange-btn m-auto w-full mt-8"}
                  disabled={(dirty && !isValid)}
                >
                  CONTINUE & PAY
                </button>
                {(dirty && !isValid) ? <div>*There are fields in the form that require your attention.</div> : ""}
                {Object.keys(formErrors).length === 0 && isSubmitting && (
                  <span className="success-msg">Order completed successfully!</span>
                )}
                </div>
              </Form>
            )}}
        </Formik>
      </section>
    </>
  )
}

export default Checkout