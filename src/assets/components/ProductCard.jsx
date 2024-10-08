import { useState } from "react";
import { Heart } from "lucide-react";
import { cartContext } from "../context/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";




function ProductCard(props) {
  const [num,setNum] = useState(0);
  const {updateCart} =useContext(cartContext);
  const [isLiked, setIsLiked] = useState(false);


  const handleClick = () => {
    setIsLiked(!isLiked);
  };


  const handleAddtoCart=()=>{
    updateCart({ _id:props._id,
      image:props.image,
      name:props.name,
      price:props.price,
      description:props.description})
  }
 
  const linkname = props._id;
  
    return(
        <div className="h-[432px] relative">
          {isLiked ? (
        <Heart
          className="absolute top-4 right-4 cursor-pointer z-10 text-red-500 fill-red-500"
          onClick={handleClick}
        />
      ) : (
        <Heart
          className="absolute top-4 right-4 cursor-pointer z-10 text-red-500 "
          onClick={handleClick}
        />
      )}
          <Link to={{ pathname: `/product/${linkname}` }}>
        <div className={`h-64 rounded-xl bg-[#f4f8f9] relative`}>
        <img src={props.image} alt="" className="w-full h-full object-cover" />
      </div></Link>
      <div className="mt-4">
        <div className=" flex items-center justify-between">
          <span className="block text-2xl font-semibold">{props.name}</span>
          <span className="block font-semibold">${props.price}</span>
        </div>
        <p className="text-sm">{props.description}</p>
        <div className="mt-2">
          <button
            type="button"
            onClick={handleAddtoCart}  
            className="border-2 border-black px-4 py-1 text-lg rounded-lg mt-2 font-medium hover:bg-black hover:text-white transition"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
    )
    
}
export default ProductCard;