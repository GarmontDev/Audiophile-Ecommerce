import { Link } from "react-router-dom"

const BannerM1 = ({data, productToDisplay}) => {
    return(
        <>
            {data.filter(product => product.id === productToDisplay).map((item, index) => {
                return (
                    <div key={index}>
                        <div className={`rounded-lg w-full h-80 mt-10 pl-6 pt-24
                            bg-cover bg-no-repeat bg-center
                            bg-[url('src/assets/images/product-zx7-speaker/mobile/image-speaker-zx7.jpg')]
                        `}>      
                            <h1 id="banner-lg-title" 
                                className="uppercase font-semibold tracking-widest text-black text-3xl mb-10">
                                {item.name}
                            </h1>
                            <Link to="/product-page" state={{item: item}} className="see-product-transparent-btn" onClick={() => window.scrollTo({top:0, behavior: 'smooth'})}>
                                    SEE PRODUCT
                            </Link>
                        </div>
                    </div>
            )})}
        </>
    )
}

export default BannerM1