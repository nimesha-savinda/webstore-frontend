const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

export const getAllProducts = async () => {
    await sleep(1000);
    const products = [
        { categoryId: "1", image: "/assets/products/airpods-max.png", id: "1", name: "AirPods Max", price: "549.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?" },
        { categoryId: "3", image: "/assets/products/echo-dot.png", id: "2", name: "Echo Dot", price: "99.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?" },
        { categoryId: "2", image: "/assets/products/pixel-buds.png", id: "3", name: "Galaxy Pixel Buds", price: "99.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?" },
        { categoryId: "1", image: "/assets/products/quietcomfort.png", id: "4", name: "Bose QuiteComfort", price: "249.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?" },
        { categoryId: "3", image: "/assets/products/soundlink.png", id: "5", name: "Bose SoundLink", price: "119.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?" },
        { categoryId: "5", image: "/assets/products/apple-watch.png", id: "6", name: "Apple Watch 9", price: "699.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?" },
        { categoryId: "4", image: "/assets/products/iphone-15.png", id: "7", name: "Apple Iphone 15", price: "1299.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?" },
        { categoryId: "4", image: "/assets/products/pixel-8.png", id: "8", name: "Galaxy Pixel 8", price: "549.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?" },
    ];
    return products;
}  