import '../../assets/styles/styles.css'
import BannerL1 from '../../components/Banners/BannerL1'
import BannerM1 from '../../components/Banners/BannerM1'
import BannerXL1 from '../../components/Banners/BannerXL1'
import HeaderBanner from '../../components/Banners/HeaderBanner'
import CategoriesGrid from '../../components/Categories/CategoriesGrid'

import data from '../../data.json'
import Category from '../Category/Category'

function Home({ mobileMenuIsOpen, closeMobileMenu }) {
    return (
        <>
            <div>
                {data.filter(product => product.id === 4).map((item, index) => {
                    return (
                    <div key={index}>
                        <HeaderBanner item={item}/>
                    </div>
                )})}
                {!mobileMenuIsOpen ? 
                    <div id="content" className="ml-6 mr-6 lg:ml-16 lg:mr-16">
                        <CategoriesGrid data={data} closeMobileMenu={closeMobileMenu}/>
                        <BannerXL1 data={data} productToDisplay={6} />
                        <BannerM1 data={data} productToDisplay={5} />
                        <BannerL1 data={data} productToDisplay={1} />
                    </div>
                : 
                    <div>
                        <Category data={data}/>
                    </div>
                }
            </div>
        </>
    )
}

export default Home