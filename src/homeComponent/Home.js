import React from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Home(){

  //i've created  multiple responsive carousel using bootstrap classes.
  // here i created responsive variable i given screen resolution according to device
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const productData=[
  {
    id:1,
    imgScr:"https://www.superkicks.in/cdn/shop/files/jordan-cap.jpg?v=1703855770&width=360",
    name:"jorden",
    price:"₹ 1,695.00",
    description:"JUMPMAN PRO ADJUSTABLE CAP'LOBSTER/GYM RED/WHITE'"
  },
  {
    id:2,
    imgScr:"https://www.superkicks.in/cdn/shop/files/PHOTOSHOP6-Copy.jpg?v=1703778736&width=360",
    name:"Nike",
    price:"₹ 11,695.00",
    description:"AIR FORCE 1 LV8 (GS)'SUMMIT WHITE/VIVID SULFUR-SUMMIT'"
  },
  {
    id:3,
    imgScr:"https://www.superkicks.in/cdn/shop/products/2_c6dce12d-8d76-475d-8800-866449fb6810.jpg?v=1675958421&width=360",
    name:"Nike",
    price:"₹ 7,695.00",
    description:"BLAZER MID'77 VINTAGE 'BLACK/WHITE'"
  },
  {
    id:4,
    imgScr:"https://www.superkicks.in/cdn/shop/files/FB9658-400-4.jpg?v=1703858256&width=360",
    name:"Nike",
    price:"₹ 16,995.00",
    description:"NIKE AIR FORCE"
  },
  {
    id:5,
    imgScr:"https://www.superkicks.in/cdn/shop/files/FJ4146-101-4.jpg?v=1703858223&width=360",
    name:"Nike",
    price:"₹ 9,695.00",
    description:"AIR FORCE 1 '07 'WHITE/PINK RISE-WHITE'"
  },
  {
    id:6,
    imgScr:"https://www.superkicks.in/cdn/shop/files/2_17c54df1-1f88-44eb-8cec-6937384d5fe3.jpg?v=1694511351&width=360",
    name:"Asic",
    price:"₹ 11,999.00",
    description:"GEL-LYTE V 'CLAY GREY'"
  },
  {
    id:7,
    imgScr:"https://www.superkicks.in/cdn/shop/files/FJ4007-200-2.jpg?v=1703858243&width=600",
    name:"Crocs",
    price:"₹ 6,695.00",
    description:"AIR MAX 1 'ALE BROWN/CORAL-OLIVE GREY-SAIL'"
  },
  {
    id:8,
    imgScr:"https://www.superkicks.in/cdn/shop/files/FB9658-400-4.jpg?v=1703858256&width=360",
    name:"nike",
    price:"₹ 12,695.00",
    description:"JUMPMAN PRO ADJUSTABLE CAP 'LOBSTER/GYM RED/WHITE'"
  },
]
    return( 
      <> 
      {/* i've created home page with static imported images  */}
      <div className="container-fluid mt-4">
            <div className="row">
         <div className="col-sm-8">
          <Link to ={"/Products"}><img className="img-fluid first"src={"images/nikeDunk.jpg"} alt="product image"/></Link>
         </div>
             <div className="col-sm-2">
             <Link to={"/Products"} ><img className="second" src="https://www.superkicks.in/cdn/shop/files/RIGHT_BANNER_TOP_jordan_11-2.png?v=1699712917"/></Link>
             <div className="row">
             <div className="col-sm-2">
           <Link to={"/Products"}><img className="last" src="https://www.superkicks.in/cdn/shop/files/RIGHT_BANNER_TOP_LAST_01.png?v=1698990539" /></Link>
           </div>
             </div>
             </div>
         </div>
         </div> 
         <div className="container">
          <h2 className="display-3 mt-3 mb-3">New Arrivals</h2>
         </div>
         {/* here i created responsive carousel with card and card-body using bootstrap */}
        <div className="container-fluid">
        <Carousel responsive={responsive}>
          {productData.map(item =>(
             <div className='card cardsbody border-0 mx-4 mb-3' key={item.id} style={{width:290}}>
        <Link to={"/Products"}><img className='card-img-top  img-fluid f1' src={item.imgScr} alt='product image'/></Link>
        <div className='card-body'>
          <h5>{item.name}</h5>
          <h3 className='card-text cardtext1'>{item.description}</h3>
          <p className='price'>{item.price}</p>
        </div>
      </div>
          ))} 
          </Carousel>
        </div>
<div className="container-fluid">
  <div className="row">
    <div className="col-sm-4 col-md-4 mt-3 mb-3 mx-2">
    <Link to={"/Products"}> <img className="card-img-top img-fluid first1" src={"images/img2.jpg"} /></Link>
      </div>
      <div className="col-sm-2 col-md-2 mt-3 mb-3 mx-4">
        <div className="card cardsjs mx-3" style={{width:260}}>
        <Link to={"/Products"}><img className="card-img-top img-fluid sec1" src={"images/tshirt3.jpg"} /></Link>
          <div className="card-body">
            <h5>tshirts Originals</h5>
            <h4 className="card-text cardtext1">INITIAL BOUCLE POLO</h4>
            <p className="price">₹ 19,999.00</p>
          </div>
        </div>
      </div>
      <div className="col-sm-2 col-md-2 mt-3 mb-3 mx-4">
        <div className="card cardsjs mx-3" style={{width:260}}>
        <Link to={"/Products"}> <img className="card-img-top img-fluid sec1" src={"images/tshirt4.jpg"} /></Link>
          <div className="card-body">
            <h5>Represents</h5>
            <h4 className="card-text cardtext1"> Youth Of <br/>Paris</h4>
            <p className="price">₹ 19,999.00</p>
          </div>
        </div>
      </div>
      <div className="col-sm-2 col-md-2 mt-3 mb-3 mx-4">
        <div className="card cardsjs mx-3" style={{width:260}}>
        <Link to={"/Products"}>  <img className="card-img-top img-fluid sec1" src={"images/hoodi.jpg"} /></Link>
          <div className="card-body">
            <h5>Represents</h5>
            <h4 className="card-text cardtext1">GIANTS HOODIE 'BLACK'</h4>
            <p className="price">₹ 19,999.00</p>
            </div>
          </div>
        </div>
        </div>
     </div>

    {/* here i created some static images */}
     <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 mt-3 mb-3 pull-left">
        <Link to={"/Products"}><img className="div1" src="	https://www.superkicks.in/cdn/shop/files/0_5.png?v=1693477795" /></Link>
        </div>
        <div className="col-sm-6 mt-3 mb-3">
        <Link to={"/Products"}> <img className="div2" src="https://www.superkicks.in/cdn/shop/files/tote.png?v=1695292378" /></Link>
        </div>
      </div>
     </div>
      </>
    )
}
export default Home;