import { useState } from 'react'
import Popup from 'reactjs-popup'
import { BrowserView, MobileView, isMobile } from 'react-device-detect'
import { Link, Route, Routes } from 'react-router-dom'

import '../../assets/styles/styles.css'
import Layout from '../../assets/layout/layout'

import Menu from '../../components/Menu'
import Cart from '../../components/Cart/Cart'
import Footer from '../../components/Footer'

import Home from '../Home/Home'
import Category from '../Category/Category'
import ProductPage from '../ProductPage/ProductPage'
import { CartIcon, HamburguerIcon, LogoIcon } from '../../assets/icons/Icons'
import Checkout from '../Checkout/Checkout'
import CategoriesGrid from '../../components/Categories/CategoriesGrid'
import CheckoutModal from '../Checkout/CheckoutModal'

export const App = () => { 
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
    const closeMobileMenu = () => setMobileMenuIsOpen(false)

    const [cartOpen, setCartOpen] = useState(false);
    const [checkoutModal, setCheckoutModal] = useState(false)

    function goToTop(){
        window.scrollTo({top:0, behavior: 'smooth'})
    }

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
                    <button className='flex justify-end' onClick={() => (setCartOpen(true), setMobileMenuIsOpen(false))}>
                        <CartIcon/>
                    </button>
                    <Popup 
                        open={cartOpen}
                        onClose={() => setCartOpen(false)}
                        position="top center"
                        modal
                    >
                        <Cart setCartOpen={setCartOpen}/>
                    </Popup>
                    <Popup 
                        open={checkoutModal}
                        onClose={() => (setCheckoutModal(false), goToTop())}
                        position="top center"
                        modal
                    >
                        <CheckoutModal setCheckoutModal={setCheckoutModal}/>
                    </Popup>
                </div>
                <hr className="h-px w-full bg-[#555555] border-0 opacity-100"/>
                {mobileMenuIsOpen ? 
                    <div className='absolute top-24 left-0 bg-black bg-opacity-60 w-screen h-[125rem]'>
                        <div className='bg-white w-screen pb-10 pl-6 pr-6 pt-2 rounded-b-lg'>
                            <CategoriesGrid mobileMenuIsOpen={mobileMenuIsOpen} closeMobileMenu={closeMobileMenu}/>
                        </div>
                    </div>
                    :   
                    ""
                }
            </div>
            <div id="cart-blur" className={cartOpen || checkoutModal ? 'bg-black opacity-40' : "bg-[#f9f9f9]"}>
                <Routes>
                    <Route path='/' element={ <Layout/>} />
                    <Route index element={<Home mobileMenuIsOpen={mobileMenuIsOpen} closeMobileMenu={closeMobileMenu}/>} />
                    <Route path="category" element={<Category />}/>
                    <Route path="product-page" element={<ProductPage setCartOpen={setCartOpen}/>} />
                    <Route path="checkout" element={<Checkout setCheckoutModal={setCheckoutModal}/>} />
                </Routes>
                <Footer/>
            </div>
        </>
    )
 }

 export default App