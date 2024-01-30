import axios from "axios";
import { Link, Outlet, useParams, useSearchParams} from "react-router-dom";
import { useEffect, useState } from "react";
function ProductDetails({ setCart, addToCart }){
//   const Products = [
//     {
//         id:0,
//         name:'nike',
//         imgSrc:'https://www.superkicks.in/cdn/shop/products/2-3_04890a75-cb2d-42fa-adff-7652852d6bcf.jpg?v=1681121167&width=360',
//         price:20000,
//         rating:4.5,
//         description:'AIR FORCE 1 07 TRIPLE WHITE BLACK YELLOW O9 2',
//         thumbnailImgs: [
//           'https://www.superkicks.in/cdn/shop/products/1-3_c4a86ac6-b85f-46f2-96fa-cffc3ce36e53.jpg?v=1681121167&width=600',
//           'https://www.superkicks.in/cdn/shop/products/2-3_04890a75-cb2d-42fa-adff-7652852d6bcf.jpg?v=1681121167&width=600',
//           'https://www.superkicks.in/cdn/shop/products/3-3_9d161233-ad69-4033-98d4-fb2516fc1999.jpg?v=1681121167&width=600',
//           'https://www.superkicks.in/cdn/shop/products/5-1_ce7639d4-d2ed-4f65-9ef9-fdd5423b620a.jpg?v=1681121167&width=600',
//           'https://www.superkicks.in/cdn/shop/products/6-1_6f487d67-bc3b-454d-9c0f-381f03775a1b.jpg?v=1681121167&width=600',
//           'https://www.superkicks.in/cdn/shop/products/4-3_4bb09ae9-7ff1-4c6a-9040-fc0c3db279fc.jpg?v=1681121167&width=600'

//       ],
//       size: ['7','8','9','10','11']
//     },
//     {
//         id:1,
//         name:'nike',
//         imgSrc:'https://www.superkicks.in/cdn/shop/files/2_69a06b0a-f80b-4b48-ad4c-3cd60c83e001.jpg?v=1701694858&width=360',
//         price:20000,
//         rating:4.5,
//         description:'AIR FORCE 1 07 TRIPLE WHITE',
//         thumbnailImgs: [
//           'https://www.superkicks.in/cdn/shop/products/1-3_c4a86ac6-b85f-46f2-96fa-cffc3ce36e53.jpg?v=1681121167&width=600',
//           'https://www.superkicks.in/cdn/shop/products/3-3_9d161233-ad69-4033-98d4-fb2516fc1999.jpg?v=1681121167&width=600',
//           'https://www.superkicks.in/cdn/shop/products/5-1_ce7639d4-d2ed-4f65-9ef9-fdd5423b620a.jpg?v=1681121167&width=600',
//           'https://www.superkicks.in/cdn/shop/products/6-1_6f487d67-bc3b-454d-9c0f-381f03775a1b.jpg?v=1681121167&width=600',
//           'https://www.superkicks.in/cdn/shop/products/4-3_4bb09ae9-7ff1-4c6a-9040-fc0c3db279fc.jpg?v=1681121167&width=600'

//       ],
//       size: ['7','8','9','10','11']
//     },
//     {
//         id:2,
//         name:'nike',
//         imgSrc:'https://www.superkicks.in/cdn/shop/files/2_c313a3ff-21f4-4144-b6ff-b9d3d7600d29.jpg?v=1701435941&width=360',
//         price:20000,
//         rating:4.5,
//         description:'AIR FORCE 1 07 TRIPLE WHITE',
//         thumbnailImgs: [
//           'https://www.superkicks.in/cdn/shop/files/1-2023-12-07T175859.773.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/2-2023-12-07T175901.635.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/3_97.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/5_66_178deb4c-afd4-40db-9dd7-a8f6a66c3050.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/6_56_51624324-c086-4c47-a883-5d39058a156f.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/7_11.jpg?v=1701952193&width=600'

//       ],
//       size: ['7','8','9','10','11']
//     },
//     {
//         id:3,
//         name:'nike',
//         imgSrc:'https://www.superkicks.in/cdn/shop/files/2_c313a3ff-21f4-4144-b6ff-b9d3d7600d29.jpg?v=1701435941&width=360',
//         price:20000,
//         rating:4.5,
//         description:'AIR FORCE 1 07 TRIPLE WHITE',
//         thumbnailImgs: [
//           'https://www.superkicks.in/cdn/shop/files/1-2023-12-07T175859.773.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/2-2023-12-07T175901.635.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/3_97.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/5_66_178deb4c-afd4-40db-9dd7-a8f6a66c3050.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/6_56_51624324-c086-4c47-a883-5d39058a156f.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/7_11.jpg?v=1701952193&width=600'

//       ],
//       size: ['7','8','9','10','11']
//     },
//     {
//         id:4,
//         name:'adidas',
//         imgSrc:'https://www.superkicks.in/cdn/shop/files/2_c313a3ff-21f4-4144-b6ff-b9d3d7600d29.jpg?v=1701435941&width=360',
//         price:20000,
//         rating:4.5,
//         description:'AIR FORCE 1 07 TRIPLE WHITE',
//         thumbnailImgs: [
//           'https://www.superkicks.in/cdn/shop/files/1-2023-12-07T175859.773.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/2-2023-12-07T175901.635.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/3_97.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/5_66_178deb4c-afd4-40db-9dd7-a8f6a66c3050.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/6_56_51624324-c086-4c47-a883-5d39058a156f.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/7_11.jpg?v=1701952193&width=600'

//       ],
//       size: ['7','8','9','10','11']
//     },
//     {
//         id:5,
//         name:'adidas',
//         imgSrc:'https://www.superkicks.in/cdn/shop/files/2_c313a3ff-21f4-4144-b6ff-b9d3d7600d29.jpg?v=1701435941&width=360',
//         price:20000,
//         rating:4.5,
//         description:'AIR FORCE 1 07 TRIPLE WHITE',
//         thumbnailImgs: [
//           'https://www.superkicks.in/cdn/shop/files/1-2023-12-07T175859.773.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/2-2023-12-07T175901.635.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/3_97.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/5_66_178deb4c-afd4-40db-9dd7-a8f6a66c3050.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/6_56_51624324-c086-4c47-a883-5d39058a156f.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/7_11.jpg?v=1701952193&width=600'

//       ],
//       size: ['7','8','9','10','11']
//     },
//     {
//         id:6,
//         name:'puma',
//         imgSrc:'https://www.superkicks.in/cdn/shop/files/2_c313a3ff-21f4-4144-b6ff-b9d3d7600d29.jpg?v=1701435941&width=360',
//         price:20000,
//         rating:4.5,
//         description:'AIR FORCE 1 07 TRIPLE WHITE',
//         thumbnailImgs: [
//           'https://www.superkicks.in/cdn/shop/files/1-2023-12-07T175859.773.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/2-2023-12-07T175901.635.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/3_97.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/5_66_178deb4c-afd4-40db-9dd7-a8f6a66c3050.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/6_56_51624324-c086-4c47-a883-5d39058a156f.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/7_11.jpg?v=1701952193&width=600'

//       ],
//       size: ['7','8','9','10','11']
//     },
//     {
//         id:7,
//         name:'puma',
//         imgSrc:'https://www.superkicks.in/cdn/shop/files/2_de288e8f-38bd-4fc9-acdb-4e614dd5cadb.jpg?v=1701417954&width=360',
//         price:20000,
//         rating:4.5,
//         description:'AIR FORCE 1 07 TRIPLE WHITE',
//         thumbnailImgs: [
//           'https://www.superkicks.in/cdn/shop/files/1-2023-12-07T175859.773.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/2-2023-12-07T175901.635.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/3_97.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/5_66_178deb4c-afd4-40db-9dd7-a8f6a66c3050.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/6_56_51624324-c086-4c47-a883-5d39058a156f.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/7_11.jpg?v=1701952193&width=600'

//       ],
//       size: ['7','8','9','10','11']
//     },
//     {
//         id:8,
//         name:'puma',
//         imgSrc:'https://www.superkicks.in/cdn/shop/files/2_c313a3ff-21f4-4144-b6ff-b9d3d7600d29.jpg?v=1701435941&width=360',
//         price:20000,
//         rating:4.5,
//         description:'AIR FORCE 1 07 TRIPLE WHITE',
//         thumbnailImgs: [
//           'https://www.superkicks.in/cdn/shop/files/1-2023-12-07T175859.773.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/2-2023-12-07T175901.635.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/3_97.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/5_66_178deb4c-afd4-40db-9dd7-a8f6a66c3050.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/6_56_51624324-c086-4c47-a883-5d39058a156f.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/7_11.jpg?v=1701952193&width=600'

//       ],
//       size: ['7','8','9','10','11']
//     },
//     {
//         id:9,
//         name:'louis vitton',
//         imgSrc:'https://www.superkicks.in/cdn/shop/files/2_41a42f41-70dd-40bb-842e-3b5dd6e937b0.jpg?v=1701434591&width=360',
//         price:20000,
//         rating:4.5,
//         description:'AIR FORCE 1 07 TRIPLE WHITE',
//         thumbnailImgs: [
//           'https://www.superkicks.in/cdn/shop/files/1-2023-12-07T175859.773.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/2-2023-12-07T175901.635.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/3_97.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/5_66_178deb4c-afd4-40db-9dd7-a8f6a66c3050.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/6_56_51624324-c086-4c47-a883-5d39058a156f.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/7_11.jpg?v=1701952193&width=600'

//       ],
//       size: ['7','8','9','10','11']
//     },
//     {
//         id:10,
//         name:'louis vitton',
//         imgSrc:'https://www.superkicks.in/cdn/shop/files/2_67f9974b-aa18-4027-a9d8-f3767f15dd59.jpg?v=1701435287&width=360',
//         price:20000,
//         rating:4.5,
//         description:'AIR FORCE 1 07 TRIPLE WHITE',
//         thumbnailImgs: [
//           'https://www.superkicks.in/cdn/shop/files/1-2023-12-07T175859.773.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/2-2023-12-07T175901.635.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/3_97.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/5_66_178deb4c-afd4-40db-9dd7-a8f6a66c3050.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/6_56_51624324-c086-4c47-a883-5d39058a156f.jpg?v=1701952193&width=600',
//           'https://www.superkicks.in/cdn/shop/files/7_11.jpg?v=1701952193&width=600'

//       ],
//       size: ['7','8','9','10','11']
//     },

// ];
const[searchParams, setSearchParams] = useSearchParams();
const{productId} = useParams();
const[filteredProduct, setFiltetredProduct] = useState({});
const[selectedSize, setSelectedSize] = useState('');
const baseURL = process.env.REACT_APP_API_BASE_URL || "http://localhost:9091";
// useEffect(() =>{
//   const _filteredProduct = Products.find(product => product.id == productId);
//   setFiltetredProduct(_filteredProduct);
//   setSearchParams(_filteredProduct);
//   console.log(searchParams.get('name'), searchParams.get('price'));
//   console.log(setSelectedSize(_filteredProduct.size[0]));
// },[]);
useEffect(() => {
  axios.get(`${baseURL}/api/v1/products/${productId}`)
    .then(response => {
      const { data } = response;
      setFiltetredProduct(data);
      setSelectedSize(data.size[0]); // Set the default size
    })
    .catch(error => {
      console.error('Error fetching product details:', error);
    });
}, [productId, baseURL]);
    return(
      <> 
      <div className="container">
        <div className="row my-5">
          <div className="col-sm-8 prdctimg">
          {filteredProduct.thumbnailImgs?.map(imgSrc => {
    const thumbnailUrl = `${baseURL}/thumbnails/${imgSrc}`;
    console.log("Thumbnail URL:", thumbnailUrl);

    return (
        <img className="img-fluid" key={productId.id} src={thumbnailUrl} alt="product image" />
    );
})}
          </div>
          <div className="col-sm-4 text-center">
            <h6 className="name">{filteredProduct.name}</h6>
             <p className="fontsize1 cardtext1">{filteredProduct.description}</p>
             <p className="pricefont">₹{filteredProduct.price}</p>
            <p className="ratingfont">{filteredProduct.rating}</p>
            <h4 className="mt-2 text-center">Shoe Size</h4> 
            {filteredProduct.size?.map((size, index) => (
         <button
        className={`mx-2 ${selectedSize === size ? 'btn btn-outline-success' : 'btn btn-dark'}`}
        key={index}
        onClick={() => setSelectedSize(size)}
        >
        {size}
        </button>
        ))}
            <div className="mt-3">
              <Link to={'/Cart'}><button type="submit" className="bg-dark text-white addtoCart" onClick={() => addToCart(filteredProduct)}>Add to cart</button></Link>
              </div> 
          {/* {filteredProduct.thumbnailImgs?.map(imgSrc=>(
                  <img className="img-fluid" key={productId.id} src={`${baseURL}thumbnails/${imgSrc}`} alt="product image" />
                  // src={imgSrc}
                  // src={`http://localhost:9091/thumbnails/${imgSrc}`}
                ))}
            </div> 
            <div className="col-sm-4 text-center">
            <h6 className="name">{filteredProduct.name}</h6>
             <p className="fontsize1 cardtext1">{filteredProduct.description}</p>
             <p className="pricefont">₹{filteredProduct.price}</p>
            <p className="ratingfont">{filteredProduct.rating}</p>
            <h4 className="mt-2 text-center">Shoe Size</h4> 
            {filteredProduct.size?.map((size, index) => (
         <button
        className={`mx-2 ${selectedSize === size ? 'btn btn-outline-success' : 'btn btn-dark'}`}
        key={index}
        onClick={() => setSelectedSize(size)}
        >
        {size}
        </button>
        ))}
            <div className="mt-3">
              <Link to={'/Cart'}><button type="submit" className="bg-dark text-white addtoCart" onClick={() => addToCart(filteredProduct)}>Add to cart</button></Link>
              </div> */}
              <div>
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-4 me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="about-product">About Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Product-description">Product desciption</Link>
        </li>
      </ul>    
    </div>
   </div>
 </nav>
              </div>
 <Outlet/>
            </div>
        </div>
      </div>
      
      </>
    )
}
export default ProductDetails;
