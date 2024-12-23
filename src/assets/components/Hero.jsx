import App from "../pages/HomePage";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="py-8 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-md min-h-[60vh] bg-[#f4f8f9]">
        {/* Left Content */}
        <div className="flex flex-col justify-center gap-y-4 p-6 md:p-16">
          <span className="block rounded-full px-2 py-1 text-xs w-fit bg-[#febc26]">
            WEEKLY DISCOUNT
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold leading-snug">
            Premium Product Online Shop
          </h1>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos
            suscipit est autem quia? Voluptatem?
          </p>
          <Link
            className="px-4 py-2 text-white font-medium bg-black rounded w-fit"
            to="/shop"
          >
            Shop Now
          </Link>
        </div>
        {/* Right Image */}
        <div className="relative">
          <img
            src="https://fee-storefront.vercel.app/assets/hero/hero.jpg"
            alt="Hero"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
