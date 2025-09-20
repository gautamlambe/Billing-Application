import axios from "axios";
import { useState,useEffect } from "react";

const ProductGrid=()=>{

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/products/all').then((Response)=>{
            setProducts(Response.data);
        })
        
    },[]);


    return (<>

    <div className="grid grid-cols-5 gap-4 px-8 ">
        {products.map((product)=>{
            return <div className="bg-white p-4 rounded shadow w-[200px] h-[300px] border-black-2 flex flex-col "
             
            key={product.productId}>
                <img
              src="https://picsum.photos/200?1"
              alt="image"
              className="  h-40 object-cover rounded-xl mb-3"
               />
               <p>{product.productName}</p> 
               <p>{product.price}</p>
            </div>
        })
    }
    </div>
    
    </>)
}
export default ProductGrid