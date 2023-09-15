import { useEffect } from "react"
import CategoryItem from "../../components/Categories/CategoryItem"
import { useLocation } from "react-router-dom"

import data from '../../data.json'

const Category = () => { 

    useEffect(() => {
        window.scrollTo({top:0, behavior: 'smooth'})
    }, [])

    const location = useLocation()
    const categoryName = location?.state?.name

    return(
        <>  
            {categoryName ? 
                <div className="w-full h-auto p-6 bg-black text-white text-2xl font-bold uppercase tracking-widest text-center">
                    {categoryName}
                </div>
                : ""
            }
            
            {data.filter(product => product.category === categoryName && product.new).map((item, index) => {
                return (
                    <div key={index}>
                        <CategoryItem 
                            item={item} 
                        />
                    </div>
            )})}

            {data.filter(product => product.category === categoryName && !product.new).map((item, index) => {
                return (
                    <div key={index}>
                        <CategoryItem 
                            item={item} 
                        />
                    </div>
            )})}           
        </>
    )
 }

 export default Category