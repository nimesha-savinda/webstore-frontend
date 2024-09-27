export const getAllProducts = async () => {
    const res =await fetch("http://localhost:8000/api/products/",{
        method:"GET",
        Headers:{
            "content-type":"application/json",
        },
    })
    const products = await res.json();
    console.log(products);
    return products;

}

export const SortProducts = async (value) => {
    const res =await fetch("http://localhost:8000/api/products/sort/",{
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body: JSON.stringify({value}),
    });
    const SortedProducts = await res.json();
    console.log(SortedProducts);
    return SortedProducts;
    
}
   