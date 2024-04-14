import './index.css'

const ProductsHeader = () => {
    return(
        <>
        <div className='products-header-section'>
            <a href='/all' > <div className='product-header-img-and-text'> <img alt='' src='https://res.cloudinary.com/dx94215tz/image/upload/v1713066747/Frame_461_elxkqz.png'/><p> All Bags </p> </div> </a>
           <a href='/tote'> <div  className='product-header-img-and-text'> <img alt='' src='https://res.cloudinary.com/dx94215tz/image/upload/v1713066746/Frame_49_bmsvym.png'/> <p> Tote Bag </p> </div> </a> 
           <a href='/laptop'> <div  className='product-header-img-and-text'> <img alt='' src='https://res.cloudinary.com/dx94215tz/image/upload/v1713066746/Frame_49_1_dvcxtq.png'/> <p> Laptop Sleeve </p> </div> </a> 
           <a href='/messenger'> <div  className='product-header-img-and-text'> <img alt='' src='https://res.cloudinary.com/dx94215tz/image/upload/v1713066747/Frame_49_2_ditp3a.png'/> <p> Messenger Bags </p> </div> </a> 
            <a href='/pouch'> <div  className='product-header-img-and-text'>  <img alt='' src='https://res.cloudinary.com/dx94215tz/image/upload/v1713066747/Frame_50_s2c437.png'/><p> Vanity Pouch </p> </div> </a> 
            <a href='/hand'>  <div  className='product-header-img-and-text'> <img alt='' src='https://res.cloudinary.com/dx94215tz/image/upload/v1713066747/Frame_20_sitjws.png'/> <p> Hand Bags </p> </div> </a> 
            <a href='/sling'>  <div  className='product-header-img-and-text'> <img alt='' src='https://res.cloudinary.com/dx94215tz/image/upload/v1713066747/Frame_22_or8v7q.png'/><p> Sling Bags </p> </div> </a> 
            <a href='/duffle'>  <div  className='product-header-img-and-text'> <img alt='' src='https://res.cloudinary.com/dx94215tz/image/upload/v1713066746/Frame_13_rwznbw.png'/><p> Duffle Bags </p> </div> </a> 
            
        </div>

        <div className='products-header-section-mobile'>
            <a href='/all' > <div className='product-header-img-and-text'> <img alt='' src='https://res.cloudinary.com/dx94215tz/image/upload/v1713066747/Frame_461_elxkqz.png'/><p> All Bags </p> </div> </a>
           <a href='/tote'> <div  className='product-header-img-and-text'> <img alt='' src='https://res.cloudinary.com/dx94215tz/image/upload/v1713066746/Frame_49_bmsvym.png'/> <p> Tote Bag </p> </div> </a> 
           <a href='/laptop'> <div  className='product-header-img-and-text'> <img alt='' src='https://res.cloudinary.com/dx94215tz/image/upload/v1713066746/Frame_49_1_dvcxtq.png'/> <p> Laptop Sleeve </p> </div> </a> 
           <a href='/messenger'> <div  className='product-header-img-and-text'> <img alt='' src='https://res.cloudinary.com/dx94215tz/image/upload/v1713066747/Frame_49_2_ditp3a.png'/> <p> Messenger Bags </p> </div> </a> 
            <a href='/pouch'> <div  className='product-header-img-and-text'>  <img alt='' src='https://res.cloudinary.com/dx94215tz/image/upload/v1713066747/Frame_50_s2c437.png'/><p> Vanity Pouch </p> </div> </a> 
            <a href='/hand'>  <div  className='product-header-img-and-text'> <img alt='' src='https://res.cloudinary.com/dx94215tz/image/upload/v1713066747/Frame_20_sitjws.png'/> <p> Hand Bags </p> </div> </a> 
            <a href='/sling'>  <div  className='product-header-img-and-text'> <img alt='' src='https://res.cloudinary.com/dx94215tz/image/upload/v1713066747/Frame_22_or8v7q.png'/><p> Sling Bags </p> </div> </a> 
            <a href='/duffle'>  <div  className='product-header-img-and-text'> <img alt='' src='https://res.cloudinary.com/dx94215tz/image/upload/v1713066746/Frame_13_rwznbw.png'/><p> Duffle Bags </p> </div> </a> 
            
        </div>


        <div className='products-header-bottom-section'>
            <div className='products-header-bottom-section-both'>
                <p> Bags </p>
                <img alt='circle' src='https://res.cloudinary.com/dx94215tz/image/upload/v1713069521/Ellipse_35_ur8c3e.png' />
                <p> Backpacks</p>
            </div>
            <div className='products-header-bottom-section-both'>
                <p> 13 Products</p>
                <img alt='upload' src='https://res.cloudinary.com/dx94215tz/image/upload/v1713066746/Vector_4_nktmcw.png'/>
            </div>

        </div>
        </>
    )
}

export default ProductsHeader