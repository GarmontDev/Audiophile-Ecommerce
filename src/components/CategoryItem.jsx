const CategoryItem = ({ item }) => { 
    return(
        <>
            <div className="pl-8 pr-8 pt-20 pb-6 grid justify-center">
                <img alt={item.name} src={"src/"+item.image.mobile} className="rounded-lg"/>
                {item.new ? 
                    <div id="category-item-new-product" className="pt-6 text-[#D87D4A] text-center text-sm tracking-[0.4rem] uppercase">
                        NEW PRODUCT
                    </div>
                :
                    ""
                }
                <div id="category-item-title" className="pt-4 text-center text-black text-2xl font-bold tracking-widest">
                    {item.name}
                </div>
                <div id="category-item-description" className="pt-4 text-center text-[#6e6e6e]">
                    {item.description}
                </div>
                <Link to="/product-page" state={{item: item}} className="see-product-orange-btn m-auto mt-4" >
                    SEE PRODUCT
                </Link>
            </div>
        </>
    )
 }

 export default CategoryItem