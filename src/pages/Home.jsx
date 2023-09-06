import '../styles/Home.css'
import IconLogo from '../assets/icons/IconLogo'
import IconCart from '../assets/icons/IconCart'
import IconHamburguer from '../assets/icons/IconHamburguer'
import CategoriesGrid from '../components/CategoriesGrid'
import HeaderBanner from '../components/HeaderBanner'
import { BrowserView, MobileView, isMobile } from 'react-device-detect'

import data from '../data.json'
import Menu from '../components/Menu'
import BannerM1 from '../components/Banners/BannerM1'
import BannerL1 from '../components/Banners/BannerL1'
import BannerXL1 from '../components/Banners/BannerXL1'
import Footer from '../components/Footer'
import { useState } from 'react'
import Categories from '../components/Categories'
import ProductPage from '../components/ProductPage'
import Cart from '../components/Cart'
import Popup from 'reactjs-popup'
import Checkout from '../components/Checkout'

function Home() {

    const [page, setPage] = useState("home")
    const [productSelected, setProductSelected] = useState(0);
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
    const [cart, setCart] = useState([])

    return (
        <>
            <div id='wrapper' className='font-manrope bg-black h-auto w-full'>
                <div id='header' className="pt-10 grid grid-cols-3 pl-6 pr-6">
                    <MobileView>
                        <button className='flex justify-start' onClick={() => {setMobileMenuIsOpen(!mobileMenuIsOpen)}}>
                                <IconHamburguer/>
                        </button> 
                    </MobileView>
                     <div id='logo' className='flex justify-center'>
                        <button onClick={() => {setPage("home")}}>
                            <IconLogo/>
                        </button>
                    </div>
                    <BrowserView>
                        <Menu setPage={setPage}/>
                    </BrowserView>
                    <Popup trigger={
                        <button className='flex justify-end'>
                            <IconCart/>
                        </button>
                        } 
                        position="top center"
                        modal
                    >
                        <Cart cart={cart} setCart={setCart} setPage={setPage}/>
                    </Popup>
                </div>
                <hr className="h-px w-full bg-[#979797] border-0 opacity-40 mt-8"/>
                {mobileMenuIsOpen ? 
                    <div className='absolute top-24 left-0 bg-black bg-opacity-60 w-screen h-[125rem]'>
                        <div className='bg-white w-screen pb-10 pl-6 pr-6 pt-2 rounded-b-lg'>
                            <CategoriesGrid setPage={setPage} mobileMenuIsOpen={mobileMenuIsOpen} setMobileMenuIsOpen={setMobileMenuIsOpen}/>
                        </div>
                    </div>
                :   
                    ""
                }
                {page === "home"? 
                    <div>
                        {data.filter(product => product.id === 4).map((item, index) => {
                            return (
                            <div key={index}>
                                <HeaderBanner item={item} setPage={setPage} setProductSelected={setProductSelected}/>
                            </div>
                        )})}
                    </div>
                    : ""
                }

            </div>
            {page === "home" && !mobileMenuIsOpen ? 
                    <div id="content" className="ml-6 mr-6 lg:ml-16 lg:mr-16">
                        <CategoriesGrid setPage={setPage}/>
                        <BannerXL1 data={data} productToDisplay={6} />
                        <BannerM1 data={data} productToDisplay={5} />
                        <BannerL1 data={data} productToDisplay={1} />
                    </div>
                : 
                    <div>
                        <Categories 
                            data={data} 
                            page={page} 
                            setPage={setPage}
                            productSelected={productSelected} 
                            setProductSelected={setProductSelected}
                        />
                    </div>
                }
            {page === "ProductPage" && productSelected != 0 ?
                <div>
                    {data.filter(product => product.slug === productSelected).map((item, index) => {
                        return (
                            <div key={index}>
                                <ProductPage 
                                    item={item} 
                                    setPage={setPage} 
                                    setProductSelected={setProductSelected}
                                    cart={cart} setCart={setCart}
                                />
                            </div>
                    )})}
                </div>
                
            :
                ""
            }
            {page === "checkout" 
                ? <Checkout/>
                : ""
            }
            <Footer setPage={setPage}/>
        </>
    )
}

export default Home