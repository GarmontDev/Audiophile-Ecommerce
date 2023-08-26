import CategoryItem from "./CategoryItem"

const Categories = ({ data, page, setPage, setProductSelected }) => { 
    return(
        <>
            {page != "ProductPage" ? 
                <div className="bg-black font-semibold text-center uppercase tracking-widest text-white text-2xl pt-6 pb-6">
                    {page}
                </div>
            : ""    
            }
           
            {data.filter(product => product.category === page && product.new).map((item, index) => {
                return (
                    <div key={index}>
                        <CategoryItem 
                            item={item} 
                            setPage={setPage}
                            setProductSelected={setProductSelected}
                        />
                    </div>
            )})}
            
            {data.filter(product => product.category === page && !product.new).map((item, index) => {
                return (
                    <div key={index}>
                        <CategoryItem 
                            item={item} 
                            setPage={setPage}
                            setProductSelected={setProductSelected}
                        />
                    </div>
            )})}
        </>
    )
 }

 export default Categories