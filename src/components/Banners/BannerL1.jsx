import { Link } from "react-router-dom"

const BannerL1 = ({data, productToDisplay}) => { 
    return(
        <>
            {data.filter(product => product.id === productToDisplay).map((item, index) => {
                return (
                    <div key={index}>
                        <div className="mt-6">
                            <img alt="Banner L-2" 
                                className="object-cover object-top rounded-lg" 
                                src={"src/assets/images/product-yx1-earphones/mobile/image-earphones-yx1.jpg"}
                            />
                            <div id="banner-lg-info" className="mt-4 pt-4 pl-10 h-56 bg-gray-100 rounded-lg">
                                <div id="banner-lg-title" className="uppercase font-semibold tracking-widest text-black text-3xl pt-4 pb-10">
                                    {item.name}
                                </div>
                                <Link to="/product-page" state={{item: item}} className="see-product-transparent-btn mb-10" onClick={() => window.scrollTo({top:0, behavior: 'smooth'})}>
                                    SEE PRODUCT
                                </Link>
                            </div>
                        </div>
                    </div>
            )})}
        </>
    )
}

export default BannerL1