import './index.css'

const Header = () => {
    return(
        <div>
            <div className='header-top-section'>
                <div>
                    <img alt='logo' src='https://res.cloudinary.com/dx94215tz/image/upload/v1713066746/TANN_TRIM_zcmeyr.png' /> 
                </div>
                <div className='header-top-section-icons'> 
                    <img className='header-icons' alt='search' src='https://res.cloudinary.com/dx94215tz/image/upload/v1713066746/Frame_51_iiyqpy.png' /> 
                    <img className='header-icons' alt='profile' src='https://res.cloudinary.com/dx94215tz/image/upload/v1713066746/Frame_52_stfrbu.png' /> 
                    <img className='header-icons' alt='save' src='https://res.cloudinary.com/dx94215tz/image/upload/v1713066747/Frame_53_n3lzef.png' /> 
                    <img className='header-icons' alt='cart' src='https://res.cloudinary.com/dx94215tz/image/upload/v1713066747/Frame_54_k6ocdm.png' /> 
                </div>
            </div>
            <div className='nav-list-mobile'>
                <ul>
                    <li> <img alt='menu-bar' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712512325/Group_48100065_1_qtvkb2.png'/></li>
                    <a href='/bags'> <li> Bags </li> </a>
                    <a  href='/travel'> <li> Travel </li> </a> 
                    <a href='/accesories'> <li>Accesories </li> </a>
                    <a href='/gifting'> <li> Gifting </li> </a>
                    <a  href='/jewelery'> <li> Jewelery</li> </a> 
                </ul>
            </div>

             
        </div>
    )
}

export default Header