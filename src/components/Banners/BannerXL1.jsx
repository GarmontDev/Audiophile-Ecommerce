import { isMobile } from "react-device-detect"
import { Link } from "react-router-dom"

const BannerXL1 = ({ data, productToDisplay }) => { 
    return(
        <>
            {data.filter(product => product.id === productToDisplay).map((item, index) => {
                return (
                    <div key={index}>
                        <div className="grid grid-cols-1 justify-center bg-[#D87D4A] rounded-lg mt-20">
                            <div className="w-[10rem] pt-10 m-auto">
                                <img 
                                    alt="Banner XL" 
                                    className="object-cover object-top bg-transparent" 
                                    src={isMobile ? "src/"+item.image.mobile : "src/"+item.image.desktop}
                                />
                            </div>
                            <div id="banner-xl-info" className="text-center ml-6 mr-6 mt-10">
                                <div id="banner-xl-title" className="uppercase font-semibold tracking-widest text-white text-5xl">
                                    {item.name}
                                </div>
                                <div id="banner-xl-description" className="text-white mt-8 mb-8 ">
                                    {item.description}
                                </div>
                                <Link to="/product-page" state={{item: item}} className="see-product-black-btn mb-10" onClick={() => window.scrollTo({top:0, behavior: 'smooth'})}>
                                    SEE PRODUCT
                                </Link>
                            </div>
                        </div>
                    </div>
            )})}
        </>
    )
}

export default BannerXL1