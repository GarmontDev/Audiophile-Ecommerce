const BannerXL2 = () => { 
    return (
        <>
            <div className="mt-16 mb-10 ml-6 mr-6">
                <img alt="Banner XL2" 
                     className="object-cover object-top rounded-lg" 
                     src={"src/assets/shared/mobile/image-best-gear.jpg"}
                />
                <div id="banner-lg-info" className="mt-6 pl-2 h-auto text-center">
                    <div id="banner-lg-title" className="font-semibold tracking-widest text-black text-3xl pt-4 pb-8">
                        BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO GEAR
                    </div>
                    <span className="text-gray-500">
                        Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
                        earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
                        rooms available for you to browse and experience a wide range of our products. 
                        Stop by our store to meet some of the fantastic people who make Audiophile the best place 
                        to buy your portable audio equipment.
                    </span>
                </div>
            </div>
        </>
    )
}

export default BannerXL2