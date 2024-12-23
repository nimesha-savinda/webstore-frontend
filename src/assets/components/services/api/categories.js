const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

export const getAllCategories = async () => {
    const res =await fetch("https://webstore-backend-i4tu.onrender.com/api/categories",{
        method:"GET",
        Headers:{
            "content-type":"application/json",
        },
    })
    const categories = await res.json();
    console.log(categories);
    return categories;

}
