import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import Tab from "./Tab";
import { getAllProducts } from "./services/api/products.js";
import { getAllCategories } from "./services/api/categories.js";

function Products() {
  const [Products,setProducts]=useState([]);
  const[SelectedCategory,setSelectCategory]=useState("ALL");
  const[Isloading,setIsloading]=useState(true);
  const[categories,setCategories]=useState([]);
 
  useEffect(()=>{
    
    getAllProducts()
      .then((data)=>setProducts(data))
      .finally(()=>setIsloading(false))
    
      getAllCategories()
      .then((data)=>setCategories(data))},[])

    const HandleTabClick=(id)=>{
      setSelectCategory(id)
    };

    const FileredProducts = 
      SelectedCategory==="ALL"
        ?Products
        :Products.filter((el)=>
          el.categoryId==SelectedCategory
        );
    if(Isloading){
      return(
        <section className="py-8 px-16">
            <h1 className="text-4xl font-semibold">Our Top Products</h1>
            <div className="border mt-4"></div>
            <p>Loading..............!</p>
        </section>
      )
    }
    else{
      return(
        <section className="py-8 px-16">
            <h1 className="text-4xl font-semibold">Our Top Products</h1>
            <div className="border mt-4"></div>

        <div className="py-8">
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
            <div className="py-8 grid grid-cols-4 gap-6 mt-4">
                {FileredProducts.map((el)=>{
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
      )
    }
    
}

export default Products;