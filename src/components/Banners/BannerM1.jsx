import { isMobile } from "react-device-detect"


// bg-[url("./assets/product-zx7-speaker/mobile/image-product.jpg")]
// bg-[url(
//     ${isMobile 
//         ? item.image.mobile
//         : item.image.desktop
//     }
// )

const BannerM1 = ({data, productToDisplay}) => {
    return(
        <>
            {data.filter(product => product.id === productToDisplay).map((item, index) => {
                return (
                    <div key={index}>
                        <div className={`rounded-lg w-full h-80 mt-10 pl-6 pt-24
                            bg-cover bg-no-repeat bg-center
                            bg-[url('src/assets/product-zx7-speaker/mobile/image-speaker-zx7.jpg')]
                        `}>      
                            <h1 id="banner-lg-title" 
                                className="uppercase font-semibold tracking-widest text-black text-3xl mb-10">
                                {item.name}
                            </h1>
                            <button>
                                <span id="banner-lg-button" className="see-product-transparent-btn">
                                    SEE PRODUCT
                                </span>
                            </button>

                        </div>
                    </div>
            )})}
        </>
    )
}

export default BannerM1