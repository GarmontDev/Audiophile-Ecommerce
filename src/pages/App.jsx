import { useState } from 'react'
import Popup from 'reactjs-popup'
import { BrowserView, MobileView, isMobile } from 'react-device-detect'
import { Link, Route, Routes } from 'react-router-dom'

import data from '../data.json'

import '../assets/styles/styles.css'
import Layout from '../assets/layout/layout'

import Menu from '../components/Menu'
import Cart from '../components/Cart/Cart'
import CategoriesGrid from '../components/Categories/CategoriesGrid'
import BannerM1 from '../components/Banners/BannerM1'
import BannerL1 from '../components/Banners/BannerL1'
import BannerXL1 from '../components/Banners/BannerXL1'
import Footer from '../components/Footer'

import Home from './Home/Home'
import Category from './Category/Category'
import ProductPage from './ProductPage/ProductPage'
import { CartIcon, HamburguerIcon, LogoIcon } from '../assets/icons/Icons'

export const App = () => { 
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
    
    return(
        <>
            <div id='wrapper' className='font-manrope h-auto w-full'>
                <div id='header' className="pt-10 grid grid-cols-3 pl-6 pr-6 pb-6 bg-black">
                    <MobileView>
                        <button className='flex justify-start' onClick={() => {setMobileMenuIsOpen(!mobileMenuIsOpen)}}>
                            <HamburguerIcon/>
                        </button> 
                    </MobileView>
                    <div className='flex justify-center'>
                        <Link to="/" >
                            <LogoIcon/>
                        </Link>
                    </div>
                    <BrowserView>
                        <Menu/>
                    </BrowserView>
                    <Popup trigger={
                        <button className='flex justify-end'>
                            <CartIcon/>
                        </button>
                        } 
                        position="top center"
                        modal
                    >
                        <Cart/>
                    </Popup>
                </div>
                <hr className="h-px w-full bg-[#555555] border-0 opacity-100"/>
                {mobileMenuIsOpen ? 
                    <div className='absolute top-24 left-0 bg-black bg-opacity-100 w-screen h-[125rem]'>
                        <div className='bg-white w-screen pb-10 pl-6 pr-6 pt-2 rounded-b-lg'>
                            <CategoriesGrid mobileMenuIsOpen={mobileMenuIsOpen} setMobileMenuIsOpen={setMobileMenuIsOpen}/>
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
                    <CategoriesGrid data={data} setMobileMenuIsOpen={setMobileMenuIsOpen}/>
                    <BannerXL1 data={data} productToDisplay={6} />
                    <BannerM1 data={data} productToDisplay={5} />
                    <BannerL1 data={data} productToDisplay={1} />
                </div>
            : 
                <div>
                    <Category data={data}/>
                </div>
            }
            <Footer/>
        </>
    )
 }

 export default App