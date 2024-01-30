import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Products(){
const[products, setProducts] = useState([]);
    // const Products = [
    //     {
    //         id:0,
    //         name:'nike',
    //         imgSrc:'https://www.superkicks.in/cdn/shop/products/2-3_04890a75-cb2d-42fa-adff-7652852d6bcf.jpg?v=1681121167&width=360',
    //         price:20000,
    //         rating:4.5,
    //         description:'AIR FORCE 1 07 TRIPLE WHITE BLACK YELLOW O9 2',
    //         thumbnailImgs: [
    //             'https://www.superkicks.in/cdn/shop/products/1-3_c4a86ac6-b85f-46f2-96fa-cffc3ce36e53.jpg?v=1681121167&width=600',
    //             'https://www.superkicks.in/cdn/shop/products/3-3_9d161233-ad69-4033-98d4-fb2516fc1999.jpg?v=1681121167&width=600',
    //             'https://www.superkicks.in/cdn/shop/products/5-1_ce7639d4-d2ed-4f65-9ef9-fdd5423b620a.jpg?v=1681121167&width=600',
    //             'https://www.superkicks.in/cdn/shop/products/6-1_6f487d67-bc3b-454d-9c0f-381f03775a1b.jpg?v=1681121167&width=600',
    //             'https://www.superkicks.in/cdn/shop/products/4-3_4bb09ae9-7ff1-4c6a-9040-fc0c3db279fc.jpg?v=1681121167&width=600'

    //         ]
    //     },
    //     {
    //         id:1,
    //         name:'nike',
    //         imgSrc:'https://www.superkicks.in/cdn/shop/files/2_69a06b0a-f80b-4b48-ad4c-3cd60c83e001.jpg?v=1701694858&width=360',
    //         price:20000,
    //         rating:4.5,
    //         description:'AIR FORCE 1 07 TRIPLE WHITE',
    //         thumbnailImgs: [
    //             'https://www.superkicks.in/cdn/shop/products/1-3_c4a86ac6-b85f-46f2-96fa-cffc3ce36e53.jpg?v=1681121167&width=600',
    //             'https://www.superkicks.in/cdn/shop/products/3-3_9d161233-ad69-4033-98d4-fb2516fc1999.jpg?v=1681121167&width=600',
    //             'https://www.superkicks.in/cdn/shop/products/5-1_ce7639d4-d2ed-4f65-9ef9-fdd5423b620a.jpg?v=1681121167&width=600',
    //             'https://www.superkicks.in/cdn/shop/products/6-1_6f487d67-bc3b-454d-9c0f-381f03775a1b.jpg?v=1681121167&width=600',
    //             'https://www.superkicks.in/cdn/shop/products/4-3_4bb09ae9-7ff1-4c6a-9040-fc0c3db279fc.jpg?v=1681121167&width=600'

    //         ]
    //     },
    //     {
    //         id:2,
    //         name:'nike',
    //         imgSrc:'https://www.superkicks.in/cdn/shop/files/2_c313a3ff-21f4-4144-b6ff-b9d3d7600d29.jpg?v=1701435941&width=360',
    //         price:20000,
    //         rating:4.5,
    //         description:'AIR FORCE 1 07 TRIPLE WHITE'
    //     },
    //     {
    //         id:3,
    //         name:'nike',
    //         imgSrc:'https://www.superkicks.in/cdn/shop/files/2_c313a3ff-21f4-4144-b6ff-b9d3d7600d29.jpg?v=1701435941&width=360',
    //         price:20000,
    //         rating:4.5,
    //         description:'AIR FORCE 1 07 TRIPLE WHITE'
    //     },
    //     {
    //         id:4,
    //         name:'adidas',
    //         imgSrc:'https://www.superkicks.in/cdn/shop/files/2_c313a3ff-21f4-4144-b6ff-b9d3d7600d29.jpg?v=1701435941&width=360',
    //         price:20000,
    //         rating:4.5,
    //         description:'AIR FORCE 1 07 TRIPLE WHITE'
    //     },
    //     {
    //         id:5,
    //         name:'adidas',
    //         imgSrc:'https://www.superkicks.in/cdn/shop/files/2_c313a3ff-21f4-4144-b6ff-b9d3d7600d29.jpg?v=1701435941&width=360',
    //         price:20000,
    //         rating:4.5,
    //         description:'AIR FORCE 1 07 TRIPLE WHITE'
    //     },
    //     {
    //         id:6,
    //         name:'puma',
    //         imgSrc:'https://www.superkicks.in/cdn/shop/files/2_c313a3ff-21f4-4144-b6ff-b9d3d7600d29.jpg?v=1701435941&width=360',
    //         price:20000,
    //         rating:4.5,
    //         description:'AIR FORCE 1 07 TRIPLE WHITE'
    //     },
    //     {
    //         id:7,
    //         name:'puma',
    //         imgSrc:'https://www.superkicks.in/cdn/shop/files/2_de288e8f-38bd-4fc9-acdb-4e614dd5cadb.jpg?v=1701417954&width=360',
    //         price:20000,
    //         rating:4.5,
    //         description:'AIR FORCE 1 07 TRIPLE WHITE'
    //     },
    //     {
    //         id:8,
    //         name:'puma',
    //         imgSrc:'https://www.superkicks.in/cdn/shop/files/2_c313a3ff-21f4-4144-b6ff-b9d3d7600d29.jpg?v=1701435941&width=360',
    //         price:20000,
    //         rating:4.5,
    //         description:'AIR FORCE 1 07 TRIPLE WHITE'
    //     },
    //     {
    //         id:9,
    //         name:'louis vitton',
    //         imgSrc:'https://www.superkicks.in/cdn/shop/files/2_41a42f41-70dd-40bb-842e-3b5dd6e937b0.jpg?v=1701434591&width=360',
    //         price:20000,
    //         rating:4.5,
    //         description:'AIR FORCE 1 07 TRIPLE WHITE'
    //     },
    //     {
    //         id:10,
    //         name:'louis vitton',
    //         imgSrc:'https://www.superkicks.in/cdn/shop/files/2_67f9974b-aa18-4027-a9d8-f3767f15dd59.jpg?v=1701435287&width=360',
    //         price:20000,
    //         rating:4.5,
    //         description:'AIR FORCE 1 07 TRIPLE WHITE'
    //     },
    // ];
    const [seachQuery, setSeachQuery] = useState('');
    const [filteredProducts, setFiltetredProducts] = useState(products);
    const baseURL = process.env.REACT_APP_API_BASE_URL || "http://localhost:9091";
    const searchproducts = (value) =>{
      setSeachQuery(value);
      console.log(seachQuery);
      setFiltetredProducts(products.filter(product => product.name.toLocaleLowerCase().includes(seachQuery)));
  };
    // useEffect(() => {
    //     axios.get('http://localhost:9091/api/v1/list')
    //       .then(response => {
    //         const { data } = response;
    //         setProducts(data);
    //      setFiltetredProducts(data); // Initialize filteredProducts with fetched data
    //       })
    //       .catch(error => {
    //         console.error('Error fetching data:', error);
    //       });
    //   }, []);
    useEffect(() => {
      axios
        .get(`${baseURL}/api/v1/list`)
        .then((response) => {
          const { data } = response;
          setProducts(data);
          setFiltetredProducts(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, [baseURL]);
  
    return(
        <>
        {/* here i implemeted search bar to search products */}
        <div className="container">
            <div className="row my-4">
                <div className="col-sm-6 mx-auto">
                    <input type="text" onChange={(e) => searchproducts(e.target.value)} className="form-control" id="seachQuery" placeholder="search product here.."/>
                </div>
            </div>
        </div>
        {/* here i implemented card and used map method to itereate all array of objects and filter every product
        <div className="container-fluid products-Lists">
            {filteredProducts.map(product => (
                    <div className="card cards border-0 mx-4 my-4" key={product.id} style={{width:450}}>
                  <Link to={`/product-details/${product.id}/product-description?name=${product.name}&price=${product.price}`}><img className="img-fluid pimg1" src={`${baseURL}/images/${product.imgSrc}`} alt="product image"/></Link>
                  <div className="card-body">
                      <h5>{product.name}</h5>
                      <h4 className="card-text cardtext1">{product.description}</h4>
                      <p className="pricefont">₹{product.price}</p>
                      <p className="ratingfont">{product.rating}</p>
                  </div>
              </div>
            ))}
        </div> */}
         <div className="container-fluid products-Lists">
         {filteredProducts.map(product => {
    const imageUrl = `${baseURL}${product.imgSrc}`;  // Remove the extra "/images/" here
    console.log("Image URL:", imageUrl);

    return (
        <div className="card cards border-0 mx-4 my-4" key={product.id} style={{ width: 450 }}>
            <Link to={`/product-details/${product.id}/product-description?name=${product.name}&price=${product.price}`}>
                <img className="img-fluid pimg1" src={imageUrl} alt="product image" />
            </Link>
              <div className="card-body">
                <h5>{product.name}</h5>
                <h4 className="card-text cardtext1">{product.description}</h4>
                <p className="pricefont">₹{product.price}</p>
                <p className="ratingfont">{product.rating}</p>
              </div>
            </div>
          );
        })}
      </div>
        </>
    )
}
export default Products;