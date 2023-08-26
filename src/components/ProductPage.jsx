import { useEffect, useState } from "react"
import Popup from "reactjs-popup"

const ProductPage = ({item, setPage, setProductSelected, cart, setCart}) => { 

    const [numberOfItems, setNumberOfItems] = useState(1)

    useEffect(() => {
        window.scrollTo({top:0, behavior: 'smooth'})
    }, [])

    function handleAddToCart(){    
        var newItem = {
            slug: item.slug,
            name: item.name,
            image: {
                mobile: item.image.mobile,
                desktop: item.image.desktop
            }, 
            price: item.price,
            numberOfItems: numberOfItems
        }

        setCart(cart2 => [...cart, newItem])

        alert(newItem.name +" added to the cart!")
    }

    return(
        <>
            <button id="go-back-button" className="pl-6 pt-4 text-[#6e6e6e]" onClick={() => {setPage(item.category)}}>
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
                    <button className="see-product-orange-btn" onClick={() => {
                        handleAddToCart()
                    }}>
                        ADD TO CART
                    </button>
                </div>
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
                    {item.others.map((element,index) => (
                        <div key={index} className="pt-10 pb-10 grid grid-cols-1">
                            <img alt={element.name} src={"src/"+element.image.mobile} className=" rounded-lg"/>
                            <div className="text-center font-bold tracking-widest text-xl pt-4">{element.name}</div>
                            <button 
                                className="see-product-orange-btn m-auto mt-6" 
                                onClick={() => {setProductSelected(element.slug), window.scrollTo({top:0, behavior: 'smooth'})}}
                            >
                                SEE PRODUCT
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
 }

 export default ProductPage