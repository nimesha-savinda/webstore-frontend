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
        <p className='text-[3rem] font-black'>{selectedItem.name}</p>
        <div className='flex gap-2 justify-evenly items-center'>
        <img src={selectedItem.image} alt="" className=" object-cover" />
        </div>
        
        <p className='text-[1.6rem] font-black'>price:${selectedItem.price}</p>
        <p className='text-[1.4rem] '>{selectedItem.description}</p>
    </div>
  )
}

export default ProductDetails
