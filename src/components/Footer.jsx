import Menu from "./Menu"
import BannerXL2 from "./Banners/BannerXL2"
import { LogoIcon, FacebookIcon, TwitterIcon, InstagramIcon } from "../assets/icons/Icons"

const Footer = () => { 
    return(
        <>
            <BannerXL2/>
            <div className="bg-black text-white grid text-center">
                <hr className="bg-[#D87D4A] h-1.5 m-auto w-2/6"/>
                <div className="mt-10 flex justify-center">
                    <LogoIcon/>
                </div>  
                <Menu/>
                <div className="ml-6 mr-6 mt-10 mb-10 text-gray-400 font-medium">
                    Audiophile is an all in one stop to fulfill your audio needs. 
                    We're a small team of music lovers and sound specialists who are devoted to helping 
                    you get the most out of personal audio. Come and visit our demo facility - 
                    we're open 7 days a week.
                    <div className="mt-10">
                        Copyright 2023. All Rights Reserved
                    </div>
                </div>
                <div id="social-logos" className="space-x-3 mb-10">
                    <button><FacebookIcon/></button>
                    <button><TwitterIcon/></button>
                    <button><InstagramIcon/></button>
                </div>
            </div>
        </>
    )
}

export default Footer