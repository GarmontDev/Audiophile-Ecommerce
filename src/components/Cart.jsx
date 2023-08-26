import { useEffect, useState } from "react"
import Popup from "reactjs-popup"

const Cart = ({cart, setCart}) => { 

    const [itemsInCart, setItemsInCart] = useState(cart ? cart.length : 0)

    const [cartTotalPrice, setCartTotalPrice] = useState(0)

    useEffect(() => {
        setCartTotalPrice(calculateCartTotal())
        setItemsInCart(cart.length)
    }, [cart])

    function updateNumberOfItems(item, value){
        if(item.numberOfItems === 1 && value === -1){
            var updatedCart = cart.filter((product, index) => (product.slug != item.slug))
            setCart(updatedCart)
        }else{
            setCart(cart.map((product, index) => (product.slug === item.slug)
                ? {...product, numberOfItems: product.numberOfItems + value}
                : product
            ))
        }
        calculateCartTotal()
    }

    function calculateCartTotal(){
        let totalPrice = 0
        cart?.forEach(element => {
            totalPrice = totalPrice + (element.price * element.numberOfItems)
        });
        return totalPrice
    }


    return(
        <>
            <div className="bg-white rounded-lg pl-6 pr-6 h-auto w-auto ml-4 mr-4">
                <div id="cart-header" className="grid grid-cols-3 pt-6">
                    <div className="text-left text-black tracking-widest font-bold col-span-2">
                        CART ({itemsInCart})
                </div>
                <Popup 
                    trigger={
                        <button 
                            className="text-right pl-8 text-[#979797] text-xs underline" 
                            onClick={() => {
                                setCart([])
                            }}
                        >
                            Remove all
                        </button>
                    } 
                    modal
                >    
                    <span className="text-red-950 font-semibold tracking-widest text-sm flex text-left flex-wrap pl-2 pr-2 underline -mt-14">
                        All items has been removed
                    </span>
                </Popup>
                </div>
                <div id="cart-list" className=" mt-10">
                    {cart?.map((item, index) => (
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
                                        onClick={() => updateNumberOfItems(item, -1)}>-
                                </button>
                                <button className="pl-2 pr-2 text-gray-800">
                                    {item.numberOfItems}
                                </button>
                                <button className="pl-2 pr-2"
                                        onClick={() => updateNumberOfItems(item, +1)}>+
                                </button>
                            </div>
                        </div>
                    ))}
                    <div id="cart-total" className="grid grid-cols-3 relative">
                        <div className="text-left col-span-2">
                            TOTAL
                        </div>
                        <div className="text-right">
                            {cartTotalPrice} €
                        </div>
                    </div>
                    <div className="flex justify-center pt-4 pb-6">
                        <button className="see-product-orange-btn w-full">CHECKOUT</button>
                    </div>
                </div>
            </div>
        </>
    )
 }
 export default Cart