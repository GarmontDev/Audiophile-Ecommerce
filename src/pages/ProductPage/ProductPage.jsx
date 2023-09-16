import { useContext, useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { CartContext } from "../../components/Cart/Context/CartContext";
import data from '../../data.json'
import Popup from "reactjs-popup";

const ProductPage = () => { 

    const navigate = useNavigate();
    const location = useLocation()
    const item = location?.state.item

    const { cartItems, addToCart, removeFromCart } = useContext(CartContext)

    const [numberOfItems, setNumberOfItems] = useState(1)

    const [open, setOpen] = useState(false) 
    const closeModal = () => setOpen(false)

    function goToTop(){
        window.scrollTo({top:0, behavior: 'smooth'})
    }

    useEffect(() => {
        goToTop()
    }, [])

    return(
        <>
            <button id="go-back-button" className="pl-6 pt-4 text-[#6e6e6e]" onClick={() => navigate(-1)}>
                Go Back
            </button>
            <div id="product-image" className="pl-6 pr-6 pt-6">
                <img alt={item.name} src={"src/"+item.image.mobile} className=" rounded-lg"/>
            </div>
            <div className="pl-6 pr-6 pt-6 space-y-6 text-left">
                {item.new ? 
                    <div id="product-new-product" className="text-[#D87D4A] text-sm tracking-[0.4rem] uppercase">
                        NEW PRODUCT
                    </div>
                :
                    ""
                }
                <div id="product-name" className=" text-black text-2xl font-bold tracking-widest">
                    {item.name}
                </div>
                <div id="product-description" className=" text-[#6e6e6e]">
                    {item.description}
                </div>
                <div id="product-price" className="font-bold tracking-widest pl-2">
                    {item.price.toLocaleString("en-US")} €
                </div>
                <div id="add-to-cart-buttons" className="grid grid-cols-2 grid-rows-1">
                    <div className=" bg-[#F1F1F1] text-gray-400 font-bold w-fit h-12 pl-6 pr-6 pt-3">
                        <button className="" 
                                onClick={() => setNumberOfItems(numberOfItems-1)}>-
                        </button>
                        <button className="pl-6 pr-3 text-gray-800">
                            {numberOfItems}
                        </button>
                        <button className="pl-4"
                                onClick={() => setNumberOfItems(numberOfItems+1)}>+
                        </button>
                    </div>
                    <button className="see-product-orange-btn" onClick={() => {addToCart(item, numberOfItems), setOpen(true)}}>
                        ADD TO CART
                    </button>
                </div>
                <Popup 
                    open={open} 
                    onClose={closeModal}
                    closeOnDocumentClick 
                    position="top center"
                    modal
                >        
                    <div className="p-8 text-center bg-black text-white relative rounded-lg">          
                        <button className="absolute top-0 right-2 text-2xl" onClick={closeModal}> 
                            &times;
                        </button>
                        <div className="text-orange-300">
                            {numberOfItems + " x " + item.name}
                        </div>
                        <span>
                            added to the cart
                        </span>
                    </div>      
                </Popup>
                <div id="product-features" className="text-left text-[#6e6e6e] text-sm whitespace-break-spaces">
                    <div className="text-black uppercase tracking-wider font-bold text-xl pt-10 mb-4">
                        FEATURES
                    </div>
                    {item.features}
                </div>
                <div id="product-in-the-box">
                    <div className="text-black uppercase tracking-wider font-bold text-xl pt-10 mb-4">
                        IN THE BOX
                    </div>
                    {item.includes.map((element,index) => (
                        <div key={index} className="flex text-sm">
                            <div className="text-[#D87D4A] text-left font-semibold ">
                                {element.quantity}x
                            </div>
                            <div className="text-[#6e6e6e] pl-4 pb-4">
                                {element.item}
                            </div>
                        </div>
                    ))}
                </div>
                <div id="product-images" >
                    <img alt={item.title} src={"src/"+item.gallery.first.mobile} className="rounded-lg mb-4"/>
                    <img alt={item.title} src={"src/"+item.gallery.second.mobile} className="rounded-lg mb-4"/>
                    <img alt={item.title} src={"src/"+item.gallery.third.mobile} className="rounded-lg mb-4"/>
                </div>
                <div id="product-you-may-also-like">
                    <div className="text-black uppercase tracking-wider font-bold text-xl pt-10 mb-4">
                        YOU MAY ALSO LIKE
                    </div>
                    {item.others.map((element,index) => {
                        data.map((item) =>
                            element.id === item.id
                                ?   <div key={index} className="pt-10 pb-10 grid grid-cols-1">
                                        <img alt={element.name} src={"src/"+element.image.mobile} className=" rounded-lg"/>
                                        <div className="text-center font-bold tracking-widest text-xl pt-4">{element.name}</div>
                                        <Link to="/product-page" state={{product: element}} className="see-product-orange-btn m-auto mt-6" >
                                            SEE PRODUCT
                                        </Link>
                                    </div>
                                : ""
                            )
                    })}
                </div>
            </div>
        </>
    )
 }

 export default ProductPage