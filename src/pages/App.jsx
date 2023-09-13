import '../styles/Home.css'
import IconLogo from '../assets/icons/IconLogo'
import IconCart from '../assets/icons/IconCart'
import IconHamburguer from '../assets/icons/IconHamburguer'
import CategoriesGrid from '../components/CategoriesGrid'
import { BrowserView, MobileView, isMobile } from 'react-device-detect'

import data from '../data.json'
import Menu from '../components/Menu'
import BannerM1 from '../components/Banners/BannerM1'
import BannerL1 from '../components/Banners/BannerL1'
import BannerXL1 from '../components/Banners/BannerXL1'
import Footer from '../components/Footer'
import { useState } from 'react'
import Cart from '../components/Cart'
import Popup from 'reactjs-popup'
import { Link, Route, Routes } from 'react-router-dom'
import Layout from '../assets/layout/layout'
import Home from './Home'
import Category from './Category'
import ProductPage from './ProductPage'

const App = () => { 

    const [page, setPage] = useState("home")
    const [productSelected, setProductSelected] = useState(0);
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
    const [cart, setCart] = useState([])

    return(
        <>
            <div id='wrapper' className='font-manrope h-auto w-full'>
                <div id='header' className="pt-10 grid grid-cols-3 pl-6 pr-6 pb-6 bg-black">
                    <MobileView>
                        <button className='flex justify-start' onClick={() => {setMobileMenuIsOpen(!mobileMenuIsOpen)}}>
                                <IconHamburguer/>
                        </button> 
                    </MobileView>
                     <div id='logo' className='flex justify-center'>
                        <Link to="/">
                            <IconLogo/>
                        </Link>
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
                <hr className="h-px w-full bg-[#555555] border-0 opacity-100"/>
                {mobileMenuIsOpen ? 
                    <div className='absolute top-24 left-0 bg-black bg-opacity-60 w-screen h-[125rem]'>
                        <div className='bg-white w-screen pb-10 pl-6 pr-6 pt-2 rounded-b-lg'>
                            <CategoriesGrid setPage={setPage} mobileMenuIsOpen={mobileMenuIsOpen} setMobileMenuIsOpen={setMobileMenuIsOpen}/>
                        </div>
                    </div>
                :   
                    ""
                }
                <Routes>
                    <Route path='/' element={ <Layout/>} />
                    <Route index element={<Home />} />
                    <Route path="category" element={<Category />} />
                    <Route path="product-page" element={<ProductPage />} />
                </Routes>
            </div>

            {!mobileMenuIsOpen ? 
                <div id="content" className="ml-6 mr-6 lg:ml-16 lg:mr-16">
                    <CategoriesGrid data={data}/>
                    <BannerXL1 data={data} productToDisplay={6} />
                    <BannerM1 data={data} productToDisplay={5} />
                    <BannerL1 data={data} productToDisplay={1} />
                </div>
            : 
                <div>
                    <Category 
                        data={data}
                        productSelected={productSelected} 
                        setProductSelected={setProductSelected}
                    />
                </div>
            }
            <Footer/>
        </>
    )
 }

 export default App