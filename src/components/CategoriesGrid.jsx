import IconArrowRight from '../assets/icons/IconArrowRight'
import { Link } from 'react-router-dom'

const categories = [
    {name: "headphones", thumbnail: "src/assets/shared/desktop/image-category-thumbnail-headphones.png"},
    {name: "speakers", thumbnail: "src/assets/shared/desktop/image-category-thumbnail-speakers.png"},
    {name: "earphones", thumbnail: "src/assets/shared/desktop/image-category-thumbnail-earphones.png"}
]

const CategoriesGrid = ({data, mobileMenuIsOpen, setMobileMenuIsOpen}) => { 

    function goToTop(){
        window.scrollTo({top:0, behavior: 'smooth'})
    }

    return(
        <>
            {categories.map((category, index) =>
                <div id={index} key={index}>
                    <div id="category-thumbnail">
                        <img alt={category.name} src={category.thumbnail} className='h-48 w-48 mx-auto mt-8'/>
                        <div className="bg-zinc-100 pt-20 -mt-28 rounded-md">
                            <div id="category-name" className="flex justify-center uppercase font-semibold mt-4 mb-2">
                                {category.name}
                            </div>
                            <div className="shop-btn">
                                <Link 
                                    to="/category" 
                                    state={{name: category.name}}
                                    onClick={() => goToTop()}
                                >
                                    SHOP
                                </Link>
                                <div className='mt-1 ml-2'>
                                    <IconArrowRight/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
 }

export default CategoriesGrid