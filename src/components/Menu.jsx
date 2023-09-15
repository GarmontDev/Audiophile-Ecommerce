import { isMobile } from "react-device-detect"
import { Link, Outlet } from "react-router-dom"

const Menu = () => { 

    function goToTop(){
        window.scrollTo({top:0, behavior: 'smooth'})
    }

    return(
        <>
            <nav id='menu' className='text-white uppercase tracking-widest'>
                <li className={`${isMobile ? "grid grid-cols-1 space-y-4 mt-10" : "flex space-x-6"}`}>
                    <ul>
                        <Link to="/" onClick={() => goToTop()}>Home</Link>
                    </ul>
                    <ul>
                        <Link to="/category" state={{name: "headphones"}} onClick={() => goToTop()}>
                            Headphones
                        </Link>
                    </ul>
                    <ul>
                        <Link to="/category" state={{name: "speakers"}} onClick={() => goToTop()}>
                            Speakers
                        </Link>
                    </ul>
                    <ul>
                        <Link to="/category" state={{name: "earphones"}} onClick={() => goToTop()}>
                            Earphones
                        </Link>
                    </ul>
                </li>
            </nav>
            <Outlet />
        </>
    )
 }

 export default Menu