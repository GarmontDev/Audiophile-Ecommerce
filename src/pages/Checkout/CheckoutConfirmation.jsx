import { Link } from "react-router-dom";
import { CartContext } from "../../components/Cart/Context/CartContext";
import { useContext } from "react";
import { CheckIcon } from "../../assets/icons/Icons";

const CheckoutConfirmation = () => { 

  const { cartItems, getCartTotal, clearCart } = useContext(CartContext)

  return(
    <>
      <div className="bg-gray-100 rounded-md p-6 grid justify-center text-center ml-3 mr-3">
        <div className="flex justify-start">
          <CheckIcon/>
        </div>
        <h1 className="pt-4">
          THANK YOU FOR YOUR ORDER
        </h1>
        <span className="flex justify-start text-start pt-2 pb-2">
          You will receive an email confirmation shortly.
        </span>
        <div className="bg-gray-200 text-gray-500 font-semibold rounded-md mt-4 mb-2">
          {cartItems.length > 0 ? 
            <div>
              <div key={cartItems[0].name} className="grid grid-cols-5 p-4 text-start">
                <img alt={cartItems[0].name} src={"src/"+cartItems[0].image?.mobile} className="rounded-lg h-16 w-16"/>
                  <div className="pl-4 pr-4 pt-1 text-sm col-span-3">
                    <div className="font-bold text-black">
                      {cartItems[0].name}
                    </div>
                    <div className="text-[#666666]">
                      {cartItems[0].price} €
                    </div>
                  </div>
                  <div className="text-gray-500 font-bold w-auto h-10 text-lg m-auto flex">
                      x{cartItems[0].quantity}
                  </div>
              </div>
              <hr className="w-10/12 mx-auto border-t-2"/>
              {cartItems.length > 1 ? 
                <div className="pt-3">
                  and {cartItems.length - 1} other item(s)
                </div>
                : ""
              }
              <div id="cart-total" className="grid grid-cols-3 relative mt-4 bg-black text-white p-4 rounded-b-md">
                  <div className="text-left col-span-2">
                      TOTAL
                  </div>
                  <div className="text-right">
                      {getCartTotal()} €
                  </div>
              </div>
            </div>
            : ""
          }
   
        </div>
        <Link to="/" onClick={() => {clearCart()}} className="see-product-orange-btn mt-6">
          BACK TO HOME
        </Link>
      </div>
    </>
  )
 }

 export default CheckoutConfirmation;