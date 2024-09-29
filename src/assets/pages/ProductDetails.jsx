import React from 'react'
import { useState,useEffect } from 'react';
import { getAllProducts } from '../components/services/api/products';
import { useParams } from 'react-router-dom'

function ProductDetails() {

  const [Products,setProducts]=useState([]);
 
  const {id} = useParams();
  
  useEffect(()=>{
    getAllProducts()
    .then((data)=>setProducts(data))},[])


  const selectedItem = Products.find(item => item._id === id);
  if (!selectedItem) {
    return <div>Item not found......!</div>;
  }

 
  return (
    <div className='py-8 px-16'>
        <p>name:{selectedItem.name}</p>
        <img src={selectedItem.image} alt="" className="w-full h-full object-cover" />
        <p>price:{selectedItem.price}</p>
        <p>description:{selectedItem.description}</p>
    </div>
  )
}

export default ProductDetails
