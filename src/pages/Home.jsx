import '../styles/Home.css'
import IconLogo from '../assets/icons/IconLogo'
import IconCart from '../assets/icons/IconCart'
import BannerXL from '../components/BannerXL'

function Home() {

  return (
    <>
        <div id='wrapper' className='wrapper'>
            <div id='header' className='header'>
                <div id='logo'>
                    <button>
                        <IconLogo/>
                    </button>
                </div>
                <div id='menu' className='menu'>
                    <div id='menu' className='uppercase'>
                        <li className='flex space-x-6'>
                            <ul>Home</ul>
                            <ul>Headphones</ul>
                            <ul>Speakers</ul>
                            <ul>Earphones</ul>
                        </li>
                    </div>
                </div>
                <button className='cart-icon'>
                    <IconCart/>
                </button>
            </div>
            <hr class="header-spacer"/>
            <div id='banner' className='banner-xl'>
                <BannerXL/>
                <img alt='headphones-photo'/>
            </div>
        </div>
    </>
  )
}

export default Home