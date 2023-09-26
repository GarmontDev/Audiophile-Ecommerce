import { useContext, useState } from "react"
import { CartContext } from "./Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const [openClearCartMsg, setOpenClearCartMsg] = useState(false); 
    const closeClearCartMsg = () => setOpenClearCartMsg(false);

    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)
    
    return(
        <>
            <div className="bg-white rounded-lg pl-6 pr-6 h-auto w-auto ml-4 mr-4">
                <div id="cart-header" className="grid grid-cols-3 pt-6">
                    <div className="text-left text-black tracking-widest font-bold col-span-2">
                        CART ({cartItems.length})
                    </div>
                    <button 
                        className="text-right pl-8 text-[#979797] text-xs underline" 
                        onClick={() => (setOpenClearCartMsg(true))}
                    >
                        Remove all
                    </button>
                </div>
                {openClearCartMsg 
                    ?   <div className="bg-red-200 rounded-lg p-10">
                            <span>Clear all the items from the cart?</span>
                            <div className="grid grid-cols-2">
                                <button onClick={() => {clearCart(), closeClearCartMsg()}}>
                                    Yes
                                </button>
                                <button onClick={() => closeClearCartMsg()}>
                                    NO
                                </button>
                            </div>
                        </div>
                    : ""
                }
                <div id="cart-list" className="mt-10">
                    {cartItems?.length < 1 
                        ? <div className="text-center p-4">The cart is empty</div>
                        : ""
                    }
                    {cartItems?.map((item, index) => {
                        return(
                            <div key={index} className="flex pb-4">
                                <img alt={item.name} src={"src/"+item.image?.mobile} className="rounded-lg h-16 w-16"/>
                                <div className="pl-4 pr-4 text-sm">
                                    <div className="font-bold text-black">
                                        {item.name}
                                    </div>
                                    <div className="text-[#979797]">
                                        {item.price} €
                                    </div>
                                </div>
                                <div className="bg-[#F1F1F1] text-gray-400 font-bold w-auto h-10 m-auto flex">
                                    <button className="pl-2 pr-2" 
                                            onClick={() => removeFromCart(item)}>-
                                    </button>
                                    <button className="pl-2 pr-2 text-gray-800">
                                        {item.quantity}
                                    </button>
                                    <button className="pl-2 pr-2"
                                            onClick={() => addToCart(item, 1)}>+
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                    <div id="cart-total" className="grid grid-cols-3 relative">
                        <div className="text-left col-span-2">
                            TOTAL
                        </div>
                        <div className="text-right">
                            {getCartTotal()} €
                        </div>
                    </div>
                    <div className="flex justify-center text-center pt-4 pb-6">
                        <Link className="see-product-orange-btn w-full" to={"/checkout"} onClick={() => {closeClearCartMsg()}}>CHECKOUT</Link>
                    </div>
                </div>
            </div>
        </>
    )
 }
 export default Cart