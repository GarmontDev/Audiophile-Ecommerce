import '../../assets/styles/styles.css'
import HeaderBanner from '../../components/HeaderBanner'


import data from '../../data.json'

function Home() {
    return (
        <>
            <div>
                {data.filter(product => product.id === 4).map((item, index) => {
                    return (
                    <div key={index}>
                        <HeaderBanner item={item}/>
                    </div>
                )})}
            </div>
        </>
    )
}

export default Home