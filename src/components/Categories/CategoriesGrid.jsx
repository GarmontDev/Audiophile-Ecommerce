import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../../assets/icons/Icons'
import { Categories } from '../../consts/Categories'

const CategoriesGrid = ({ setMobileMenuIsOpen }) => { 

    function goToTop(){
        window.scrollTo({top:0, behavior: 'smooth'})
    }

    return(
        <>
            {Categories.map((category, index) =>
                <main id={index} key={index}>
                    <article id="category-thumbnail">
                        <img alt={category.name} src={category.thumbnail} className='h-48 w-48 mx-auto mt-8'/>
                        <section className="bg-zinc-100 pt-20 -mt-28 rounded-md">
                            <title id="category-name" className="flex justify-center uppercase font-semibold mt-4 mb-2">
                                {category.name}
                            </title>
                            <Link 
                                to="/category" 
                                state={{name: category.name}}
                                onClick={() => (goToTop(), setMobileMenuIsOpen(false))}
                                className="shop-btn"
                            >
                                SHOP
                                <div className='mt-1 ml-2'>
                                    <ArrowRightIcon/>
                                </div>
                            </Link>
                        </section>
                    </article>
                </main>
            )}
        </>
    )
 }

export default CategoriesGrid