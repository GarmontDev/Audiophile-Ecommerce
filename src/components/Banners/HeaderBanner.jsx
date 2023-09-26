import { isMobile } from "react-device-detect"
import { Link } from "react-router-dom"

const HeaderBanner = ({item}) => { 
    return(
        <>
            <div key={item.slug} className={
                `text-white bg-black pt-10 pb-28 pl-6 pr-6
                grid grid-cols-1
                lg:grid-cols-2
                text-center
                bg-cover bg-no-repeat bg-bottom
                bg-[url(${isMobile ? 
                          'src/assets/home/mobile/image-header.jpg' 
                        : 'src/assets/home/desktop/image-header.jpg'})]
                `
                }>
                    <span className="font-thin text-base tracking-[0.75rem] mt-10">
                        {item.new ? "NEW PRODUCT" : ""}
                    </span> 
                    <h1 className="text-white text-4xl uppercase font-semibold mt-8">
                        {item.name}
                    </h1>
                    <p className="font-thin tracking-wide mt-10">
                        {item.description}
                    </p>
                    <Link to="/product-page" state={{item: item}} className="see-product-orange-btn m-auto mt-10">
                        SEE PRODUCT
                    </Link>
            </div>
        </>
    )
 }

 export default HeaderBanner