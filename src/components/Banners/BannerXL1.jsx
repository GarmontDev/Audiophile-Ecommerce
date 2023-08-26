import { isMobile } from "react-device-detect"

const BannerXL1 = ({ item }) => { 
    return(
        <>
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
                    <button>
                        <span id="banner-xl-button" className="see-product-black-btn mb-10">
                            SEE PRODUCT
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default BannerXL1