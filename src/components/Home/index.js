import axios from 'axios'
import { useEffect, useState} from 'react'
import './index.css'

const Home = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        const getProducts = async ()=>{
            const response = await axios.get('https://fakestoreapi.com/products')
            setData(response.data)
            
        }
        getProducts()
    },[])
     
    return(
        <div className='products-list-container'>
             {data.map(eachItem => 
            <div key={eachItem.id} className='products-list-container-div'> 
                 <img className='products-list-container-img' src={eachItem.image} alt={eachItem.title}/>                
                <h4> {eachItem.title.substring(0, 30)+'..'}</h4>                
                <div className='add-cont'> 
                <p> <span className='new-price'> &#8377;{Math.ceil(eachItem.price * 80)}</span> <span className='old-price'> {parseInt(eachItem.price)*160} </span> <span className='offer'> (50% off) </span>   </p>
                <img className='add-icon' alt='add' src='https://res.cloudinary.com/dx94215tz/image/upload/v1713066746/Group_450_kpi1ay.png'/>
                </div>
            </div>
            
            )}
        </div>
    )
}

export default Home