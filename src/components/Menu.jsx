import { isMobile } from "react-device-detect"

const Menu = ({setPage}) => { 
    return(
        <>
            <div id='menu' className='text-white uppercase tracking-widest'>
                <li className={`${isMobile ? "grid grid-cols-1 space-y-4 mt-10" : "flex space-x-6"}`}>
                    <ul>
                        <button onClick={() => setPage("home")}>Home</button>
                    </ul>
                    <ul>
                        <button onClick={() => setPage("headphones")}>Headphones</button>
                    </ul>
                    <ul>
                        <button onClick={() => setPage("speakers")}>Speakers</button>
                    </ul>
                    <ul>
                        <button onClick={() => setPage("earphones")}>Earphones</button>
                    </ul>
                </li>
            </div>
        </>
    )
 }

 export default Menu