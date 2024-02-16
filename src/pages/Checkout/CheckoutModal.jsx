import { useContext } from "react"
import { CheckIcon } from "../../assets/icons/Icons"
import { CartContext } from "../../components/Cart/Context/CartContext"
import { Link } from "react-router-dom"

const CheckoutModal = ({setCheckoutModal}) => { 

    const { cartItems, getCartTotal, clearCart} = useContext(CartContext)

    return(
        <>
            <div className="bg-white rounded-lg h-auto w-auto ml-6 mr-6 pl-6 pr-6">
                <div id="cart-header" className="grid pt-6">
                    <header>
                        <CheckIcon/>
                        <div className="text-left text-black tracking-wider font-bold text-2xl mt-4">
                            THANK YOU <br/>FOR YOUR ORDER
                        </div>
                        <div className="text-gray-400 font-semibold mt-6">
                            You will receive and email confirmation shortly.
                        </div>
                    </header>
                    <div className="bg-gray-100 rounded-t-lg mt-6">
                        <div className="flex pl-2 pt-4">
                            <img alt={cartItems[0]?.name} src={"src/"+cartItems[0]?.image?.mobile} className="rounded-lg h-16 w-16"/>
                            <div className="pl-2 pr-2 pt-2 text-sm">
                                <div className="font-bold text-black">
                                    {cartItems[0]?.name}
                                </div>
                                <div className="text-[#979797]">
                                    {cartItems[0]?.price} €
                                </div>
                            </div>
                            <div className="text-gray-500 font-bold w-auto h-10 text-base m-auto flex">
                                x{cartItems[0]?.quantity}
                            </div>
                        </div>
                        {cartItems.length > 1 ? 
                            <div>
                                <hr className="w-10/12 m-auto"/>
                                <div className="text-center text-[#979797] text-sm font-semibold pt-2 mb-6">
                                    and {cartItems?.length} other item(s)
                                </div>

                            </div>
                            :
                            ""
                        }
                    </div>
                    <div className="grid grid-rows-2 bg-[#121212] rounded-b-lg pl-4 h-20">
                        <div className="text-[#979797] pt-4">
                            GRAND TOTAL
                        </div>
                        <div className="text-white font-bold">
                            {getCartTotal()} €
                        </div>
                    </div>                                        
                    <Link to="/" onClick={() => (setCheckoutModal(false), clearCart())} className="see-product-orange-btn w-full text-center m-auto mt-6 mb-6" >
                        BACK TO HOME
                    </Link>
                </div>
            </div>
        </>
    )
 }

 export default CheckoutModal