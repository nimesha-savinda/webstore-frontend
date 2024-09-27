import React from 'react'
import { useState, useEffect } from "react";
import Tab from '../components/Tab.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { SortProducts } from '../components/services/api/products.js';
import { getAllCategories } from '../components/services/api/categories.js';
import { Link } from "react-router-dom";

export default function Shop() {

  const [SortedProducts,setSortedProducts]=useState([]);
  const[SelectedCategory,setSelectCategory]=useState("ALL");
  const[Isloading,setIsloading]=useState(true);
  const[categories,setCategories]=useState([]);
  const[SortMethod,setSortMethod]=useState('asc');

  useEffect(()=>{
    
      getAllCategories()
      .then((data)=>setCategories(data))},[])

      const selectedmethod = (event) =>{
        const value = event.target.value;
        setSortMethod(value);
        console.log(value);
      }
  useEffect(()=>{
   SortProducts(SortMethod).then((data)=>setSortedProducts(data))

  },[SortMethod])

  
      
  
  const HandleTabClick=(id)=>{
    setSelectCategory(id)
  };

  const FilteredSortedProducts = 
      SelectedCategory==="ALL"
        ?SortedProducts
        :SortedProducts.filter((el)=>
          el.categoryId==SelectedCategory
        );

  return (
    <div>
      <section className='py-8 px-16'>
        <div className='flex gap-2 justify-center items-center'>
        <div className="flex items-center gap-x-4">
            {categories.concat([{_id:'ALL',name:'All'}]).map((el) => {
              return (
                <Tab
                selectedCategory={SelectedCategory}
                category={el}
                onClick={HandleTabClick}
                />
              );
            })}
            
          </div>
        </div>
        <div className="border mt-4">
          <div className='flex gap-2 justify-evenly items-center'>
            <div>Products</div>
            <div>
            <label>Sort by: </label>
            <select value={SortMethod} onChange={selectedmethod}>
              <option value="asc">Price:high to low</option>
              <option value="desc">Price:low to high</option>
            </select>
            </div>
            
          </div>
          </div>
          <div className="py-8 grid grid-cols-4 gap-6 mt-4">
                {FilteredSortedProducts.map((el)=>{
                  return(<ProductCard
                    key={el.id}
                    _id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    description={el.description}/>)   
                }
                )}
            </div>
        

      </section>

    </div>
  )
}
