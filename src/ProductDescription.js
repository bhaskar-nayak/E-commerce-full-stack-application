import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDescription(){
    const Products = [
        {
            id:0,
            name:'nike',
            imgSrc:'https://www.superkicks.in/cdn/shop/products/2-3_04890a75-cb2d-42fa-adff-7652852d6bcf.jpg?v=1681121167&width=360',
            price:20000,
            rating:4.5,
            description:'AIR FORCE 1 07 TRIPLE WHITE BLACK YELLOW O9 2',
            thumbnailImgs: [
              'https://www.superkicks.in/cdn/shop/products/1-3_c4a86ac6-b85f-46f2-96fa-cffc3ce36e53.jpg?v=1681121167&width=600',
              'https://www.superkicks.in/cdn/shop/products/2-3_04890a75-cb2d-42fa-adff-7652852d6bcf.jpg?v=1681121167&width=600',
              'https://www.superkicks.in/cdn/shop/products/3-3_9d161233-ad69-4033-98d4-fb2516fc1999.jpg?v=1681121167&width=600',
              'https://www.superkicks.in/cdn/shop/products/5-1_ce7639d4-d2ed-4f65-9ef9-fdd5423b620a.jpg?v=1681121167&width=600',
              'https://www.superkicks.in/cdn/shop/products/6-1_6f487d67-bc3b-454d-9c0f-381f03775a1b.jpg?v=1681121167&width=600',
              'https://www.superkicks.in/cdn/shop/products/4-3_4bb09ae9-7ff1-4c6a-9040-fc0c3db279fc.jpg?v=1681121167&width=600'
    
          ],
          size: ['7','8','9','10','11'],
          aboutproduct: [
            {
              title: "HERITAGE STYLE, PREMIUM COMFORT ON AND OFF THE COURT.",
              content: "The Air Jordan 1 Mid brings full-court style and premium comfort to an iconic look. Its Air-Sole unit cushions play on the hardwood, while the padded collar gives you a supportive feel.",
            }
          ],
          productdescription: [
            {
              Manufacturer : "Nike India Pvt. Ltd.",
              Country:" Vietnam",
              ImportedBy : "Nike India Pvt. Ltd.",
              Weight : "0.10 KG",
              GenericName : "SHOE",
              UnitofMeasurement : "1 Pair",
              MarketedBy : "Superkicks India Pvt. Ltd.",
              ArticleCode : "BQ6472-200"
    
            }
          ]
        },
        {
            id:1,
            name:'nike',
            imgSrc:'https://www.superkicks.in/cdn/shop/files/2_69a06b0a-f80b-4b48-ad4c-3cd60c83e001.jpg?v=1701694858&width=360',
            price:20000,
            rating:4.5,
            description:'AIR FORCE 1 07 TRIPLE WHITE',
            thumbnailImgs: [
              'https://www.superkicks.in/cdn/shop/products/1-3_c4a86ac6-b85f-46f2-96fa-cffc3ce36e53.jpg?v=1681121167&width=600',
              'https://www.superkicks.in/cdn/shop/products/3-3_9d161233-ad69-4033-98d4-fb2516fc1999.jpg?v=1681121167&width=600',
              'https://www.superkicks.in/cdn/shop/products/5-1_ce7639d4-d2ed-4f65-9ef9-fdd5423b620a.jpg?v=1681121167&width=600',
              'https://www.superkicks.in/cdn/shop/products/6-1_6f487d67-bc3b-454d-9c0f-381f03775a1b.jpg?v=1681121167&width=600',
              'https://www.superkicks.in/cdn/shop/products/4-3_4bb09ae9-7ff1-4c6a-9040-fc0c3db279fc.jpg?v=1681121167&width=600'
    
          ],
          size: ['7','8','9','10','11'],
          aboutproduct: [
              {
                title: "HERITAGE STYLE, PREMIUM COMFORT ON AND OFF THE COURT.",
                content: "The Air Jordan 1 Mid brings full-court style and premium comfort to an iconic look. Its Air-Sole unit cushions play on the hardwood, while the padded collar gives you a supportive feel.",
              }
            ],
            productdescription: [
              {
                Manufacturer : "Nike India Pvt. Ltd.",
                Country:" Vietnam",
                ImportedBy : "Nike India Pvt. Ltd.",
                Weight : "0.10 KG",
                GenericName : "SHOE",
                UnitofMeasurement : "1 Pair",
                MarketedBy : "Superkicks India Pvt. Ltd.",
                ArticleCode : "BQ6472-200"
      
              }
            ]
        },
        {
            id:2,
            name:'nike',
            imgSrc:'https://www.superkicks.in/cdn/shop/files/2_c313a3ff-21f4-4144-b6ff-b9d3d7600d29.jpg?v=1701435941&width=360',
            price:20000,
            rating:4.5,
            description:'AIR FORCE 1 07 TRIPLE WHITE',
            thumbnailImgs: [
              'https://www.superkicks.in/cdn/shop/files/1-2023-12-07T175859.773.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/2-2023-12-07T175901.635.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/3_97.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/5_66_178deb4c-afd4-40db-9dd7-a8f6a66c3050.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/6_56_51624324-c086-4c47-a883-5d39058a156f.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/7_11.jpg?v=1701952193&width=600'
    
          ],
          size: ['7','8','9','10','11'],
          aboutproduct: [
            {
              title: "HERITAGE STYLE, PREMIUM COMFORT ON AND OFF THE COURT.",
              content: "The Air Jordan 1 Mid brings full-court style and premium comfort to an iconic look. Its Air-Sole unit cushions play on the hardwood, while the padded collar gives you a supportive feel.",
            }
          ],
          productdescription: [
            {
              Manufacturer : "Nike India Pvt. Ltd.",
              Country:" Vietnam",
              ImportedBy : "Nike India Pvt. Ltd.",
              Weight : "0.10 KG",
              GenericName : "SHOE",
              UnitofMeasurement : "1 Pair",
              MarketedBy : "Superkicks India Pvt. Ltd.",
              ArticleCode : "BQ6472-200"
    
            }
          ]
        },
        {
            id:3,
            name:'nike',
            imgSrc:'https://www.superkicks.in/cdn/shop/files/2_c313a3ff-21f4-4144-b6ff-b9d3d7600d29.jpg?v=1701435941&width=360',
            price:20000,
            rating:4.5,
            description:'AIR FORCE 1 07 TRIPLE WHITE',
            thumbnailImgs: [
              'https://www.superkicks.in/cdn/shop/files/1-2023-12-07T175859.773.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/2-2023-12-07T175901.635.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/3_97.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/5_66_178deb4c-afd4-40db-9dd7-a8f6a66c3050.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/6_56_51624324-c086-4c47-a883-5d39058a156f.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/7_11.jpg?v=1701952193&width=600'
    
          ],
          size: ['7','8','9','10','11'],
          aboutproduct: [
            {
              title: "HERITAGE STYLE, PREMIUM COMFORT ON AND OFF THE COURT.",
              content: "The Air Jordan 1 Mid brings full-court style and premium comfort to an iconic look. Its Air-Sole unit cushions play on the hardwood, while the padded collar gives you a supportive feel.",
            }
          ],
          productdescription: [
            {
              Manufacturer : "Nike India Pvt. Ltd.",
              Country:" Vietnam",
              ImportedBy : "Nike India Pvt. Ltd.",
              Weight : "0.10 KG",
              GenericName : "SHOE",
              UnitofMeasurement : "1 Pair",
              MarketedBy : "Superkicks India Pvt. Ltd.",
              ArticleCode : "BQ6472-200"
    
            }
          ]
        },
        {
            id:4,
            name:'adidas',
            imgSrc:'https://www.superkicks.in/cdn/shop/files/2_c313a3ff-21f4-4144-b6ff-b9d3d7600d29.jpg?v=1701435941&width=360',
            price:20000,
            rating:4.5,
            description:'AIR FORCE 1 07 TRIPLE WHITE',
            thumbnailImgs: [
              'https://www.superkicks.in/cdn/shop/files/1-2023-12-07T175859.773.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/2-2023-12-07T175901.635.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/3_97.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/5_66_178deb4c-afd4-40db-9dd7-a8f6a66c3050.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/6_56_51624324-c086-4c47-a883-5d39058a156f.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/7_11.jpg?v=1701952193&width=600'
    
          ],
          size: ['7','8','9','10','11'],
          aboutproduct: [
            {
              title: "HERITAGE STYLE, PREMIUM COMFORT ON AND OFF THE COURT.",
              content: "The Air Jordan 1 Mid brings full-court style and premium comfort to an iconic look. Its Air-Sole unit cushions play on the hardwood, while the padded collar gives you a supportive feel.",
            }
          ],
          productdescription: [
            {
              Manufacturer : "Nike India Pvt. Ltd.",
              Country:" Vietnam",
              ImportedBy : "Nike India Pvt. Ltd.",
              Weight : "0.10 KG",
              GenericName : "SHOE",
              UnitofMeasurement : "1 Pair",
              MarketedBy : "Superkicks India Pvt. Ltd.",
              ArticleCode : "BQ6472-200"
    
            }
          ]
        },
        {
            id:5,
            name:'adidas',
            imgSrc:'https://www.superkicks.in/cdn/shop/files/2_c313a3ff-21f4-4144-b6ff-b9d3d7600d29.jpg?v=1701435941&width=360',
            price:20000,
            rating:4.5,
            description:'AIR FORCE 1 07 TRIPLE WHITE',
            thumbnailImgs: [
              'https://www.superkicks.in/cdn/shop/files/1-2023-12-07T175859.773.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/2-2023-12-07T175901.635.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/3_97.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/5_66_178deb4c-afd4-40db-9dd7-a8f6a66c3050.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/6_56_51624324-c086-4c47-a883-5d39058a156f.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/7_11.jpg?v=1701952193&width=600'
    
          ],
          size: ['7','8','9','10','11'],
          aboutproduct: [
            {
              title: "HERITAGE STYLE, PREMIUM COMFORT ON AND OFF THE COURT.",
              content: "The Air Jordan 1 Mid brings full-court style and premium comfort to an iconic look. Its Air-Sole unit cushions play on the hardwood, while the padded collar gives you a supportive feel.",
            }
          ],
          productdescription: [
            {
              Manufacturer : "Nike India Pvt. Ltd.",
              Country:" Vietnam",
              ImportedBy : "Nike India Pvt. Ltd.",
              Weight : "0.10 KG",
              GenericName : "SHOE",
              UnitofMeasurement : "1 Pair",
              MarketedBy : "Superkicks India Pvt. Ltd.",
              ArticleCode : "BQ6472-200"
    
            }
          ]
        },
        {
            id:6,
            name:'puma',
            imgSrc:'https://www.superkicks.in/cdn/shop/files/2_c313a3ff-21f4-4144-b6ff-b9d3d7600d29.jpg?v=1701435941&width=360',
            price:20000,
            rating:4.5,
            description:'AIR FORCE 1 07 TRIPLE WHITE',
            thumbnailImgs: [
              'https://www.superkicks.in/cdn/shop/files/1-2023-12-07T175859.773.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/2-2023-12-07T175901.635.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/3_97.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/5_66_178deb4c-afd4-40db-9dd7-a8f6a66c3050.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/6_56_51624324-c086-4c47-a883-5d39058a156f.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/7_11.jpg?v=1701952193&width=600'
    
          ],
          size: ['7','8','9','10','11'],
          aboutproduct: [
            {
              title: "HERITAGE STYLE, PREMIUM COMFORT ON AND OFF THE COURT.",
              content: "The Air Jordan 1 Mid brings full-court style and premium comfort to an iconic look. Its Air-Sole unit cushions play on the hardwood, while the padded collar gives you a supportive feel.",
            }
          ],
          productdescription: [
            {
              Manufacturer : "Nike India Pvt. Ltd.",
              Country:" Vietnam",
              ImportedBy : "Nike India Pvt. Ltd.",
              Weight : "0.10 KG",
              GenericName : "SHOE",
              UnitofMeasurement : "1 Pair",
              MarketedBy : "Superkicks India Pvt. Ltd.",
              ArticleCode : "BQ6472-200"
    
            }
          ]
        },
        {
            id:7,
            name:'puma',
            imgSrc:'https://www.superkicks.in/cdn/shop/files/2_de288e8f-38bd-4fc9-acdb-4e614dd5cadb.jpg?v=1701417954&width=360',
            price:20000,
            rating:4.5,
            description:'AIR FORCE 1 07 TRIPLE WHITE',
            thumbnailImgs: [
              'https://www.superkicks.in/cdn/shop/files/1-2023-12-07T175859.773.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/2-2023-12-07T175901.635.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/3_97.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/5_66_178deb4c-afd4-40db-9dd7-a8f6a66c3050.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/6_56_51624324-c086-4c47-a883-5d39058a156f.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/7_11.jpg?v=1701952193&width=600'
    
          ],
          size: ['7','8','9','10','11'],
          aboutproduct: [
            {
              title: "HERITAGE STYLE, PREMIUM COMFORT ON AND OFF THE COURT.",
              content: "The Air Jordan 1 Mid brings full-court style and premium comfort to an iconic look. Its Air-Sole unit cushions play on the hardwood, while the padded collar gives you a supportive feel.",
            }
          ],
          productdescription: [
            {
              Manufacturer : "Nike India Pvt. Ltd.",
              Country:" Vietnam",
              ImportedBy : "Nike India Pvt. Ltd.",
              Weight : "0.10 KG",
              GenericName : "SHOE",
              UnitofMeasurement : "1 Pair",
              MarketedBy : "Superkicks India Pvt. Ltd.",
              ArticleCode : "BQ6472-200"
    
            }
          ]
        },
        {
            id:8,
            name:'puma',
            imgSrc:'https://www.superkicks.in/cdn/shop/files/2_c313a3ff-21f4-4144-b6ff-b9d3d7600d29.jpg?v=1701435941&width=360',
            price:20000,
            rating:4.5,
            description:'AIR FORCE 1 07 TRIPLE WHITE',
            thumbnailImgs: [
              'https://www.superkicks.in/cdn/shop/files/1-2023-12-07T175859.773.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/2-2023-12-07T175901.635.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/3_97.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/5_66_178deb4c-afd4-40db-9dd7-a8f6a66c3050.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/6_56_51624324-c086-4c47-a883-5d39058a156f.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/7_11.jpg?v=1701952193&width=600'
    
          ],
          size: ['7','8','9','10','11'],
          aboutproduct: [
            {
              title: "HERITAGE STYLE, PREMIUM COMFORT ON AND OFF THE COURT.",
              content: "The Air Jordan 1 Mid brings full-court style and premium comfort to an iconic look. Its Air-Sole unit cushions play on the hardwood, while the padded collar gives you a supportive feel.",
            }
          ],
          productdescription: [
            {
              Manufacturer : "Nike India Pvt. Ltd.",
              Country:" Vietnam",
              ImportedBy : "Nike India Pvt. Ltd.",
              Weight : "0.10 KG",
              GenericName : "SHOE",
              UnitofMeasurement : "1 Pair",
              MarketedBy : "Superkicks India Pvt. Ltd.",
              ArticleCode : "BQ6472-200"
    
            }
          ]
        },
        {
            id:9,
            name:'louis vitton',
            imgSrc:'https://www.superkicks.in/cdn/shop/files/2_41a42f41-70dd-40bb-842e-3b5dd6e937b0.jpg?v=1701434591&width=360',
            price:20000,
            rating:4.5,
            description:'AIR FORCE 1 07 TRIPLE WHITE',
            thumbnailImgs: [
              'https://www.superkicks.in/cdn/shop/files/1-2023-12-07T175859.773.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/2-2023-12-07T175901.635.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/3_97.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/5_66_178deb4c-afd4-40db-9dd7-a8f6a66c3050.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/6_56_51624324-c086-4c47-a883-5d39058a156f.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/7_11.jpg?v=1701952193&width=600'
    
          ],
          size: ['7','8','9','10','11'],
          aboutproduct: [
            {
              title: "HERITAGE STYLE, PREMIUM COMFORT ON AND OFF THE COURT.",
              content: "The Air Jordan 1 Mid brings full-court style and premium comfort to an iconic look. Its Air-Sole unit cushions play on the hardwood, while the padded collar gives you a supportive feel.",
            }
          ],
          productdescription: [
            {
              Manufacturer : "Nike India Pvt. Ltd.",
              Country:" Vietnam",
              ImportedBy : "Nike India Pvt. Ltd.",
              Weight : "0.10 KG",
              GenericName : "SHOE",
              UnitofMeasurement : "1 Pair",
              MarketedBy : "Superkicks India Pvt. Ltd.",
              ArticleCode : "BQ6472-200"
    
            }
          ]
        },
        {
            id:10,
            name:'louis vitton',
            imgSrc:'https://www.superkicks.in/cdn/shop/files/2_67f9974b-aa18-4027-a9d8-f3767f15dd59.jpg?v=1701435287&width=360',
            price:20000,
            rating:4.5,
            description:'AIR FORCE 1 07 TRIPLE WHITE',
            thumbnailImgs: [
              'https://www.superkicks.in/cdn/shop/files/1-2023-12-07T175859.773.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/2-2023-12-07T175901.635.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/3_97.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/5_66_178deb4c-afd4-40db-9dd7-a8f6a66c3050.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/6_56_51624324-c086-4c47-a883-5d39058a156f.jpg?v=1701952193&width=600',
              'https://www.superkicks.in/cdn/shop/files/7_11.jpg?v=1701952193&width=600'
    
          ],
          size: ['7','8','9','10','11'],
          aboutproduct: [
            {
              title: "HERITAGE STYLE, PREMIUM COMFORT ON AND OFF THE COURT.",
              content: "The Air Jordan 1 Mid brings full-court style and premium comfort to an iconic look. Its Air-Sole unit cushions play on the hardwood, while the padded collar gives you a supportive feel.",
            }
          ],
          productdescription: [
            {
              Manufacturer : "Nike India Pvt. Ltd.",
              Country:" Vietnam",
              ImportedBy : "Nike India Pvt. Ltd.",
              Weight : "0.10 KG",
              GenericName : "SHOE",
              UnitofMeasurement : "1 Pair",
              MarketedBy : "Superkicks India Pvt. Ltd.",
              ArticleCode : "BQ6472-200"
    
            }
          ]
        },
    
    ];
    const{productId} = useParams();
const[filteredProduct, setFiltetredProduct] = useState({});
useEffect(() =>{
  const _filteredProduct = Products.find(product => product.id == productId);
  setFiltetredProduct(_filteredProduct);
},[]);
    return(
        <> 
        <div className="container">
            {filteredProduct.productdescription?.map(productdescription=>(
                <div className="row" key={Products.id}>
                <div className="col-sm-12 text-center">
                    <p>Manufacturer:{productdescription.Manufacturer}</p>
                    <p>Country of origin:{productdescription.Country}</p>
                    <p>imported By:{productdescription.ImportedBy}</p>
                    <p>Weight:{productdescription.Weight}</p>
                    <p>GenericName:{productdescription.GenericName}</p>
                    <p>Unit of Measurement:{productdescription.UnitofMeasurement}</p>
                    <p>Marketed By:{productdescription.MarketedBy}</p>
                    <p>ArticleCode:{productdescription.ArticleCode}</p>
                </div>
            </div>
            ))}

        </div>
        </>
    )
}
export default ProductDescription;