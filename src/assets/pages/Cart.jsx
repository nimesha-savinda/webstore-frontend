import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart } = useContext(cartContext);

  return (
    <div>
      <section className="py-8 px-4 sm:px-8 md:px-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center sm:text-left">
          Your Shopping Cart
        </h1>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 border-black py-4">
          {cart.length > 0 ? (
            cart.map((el) => {
              return (
                <div
                  key={el.id}
                  className="grid grid-cols-1 sm:grid-cols-3 border p-4 rounded-xl"
                >
                  <div className="col-span-1 bg-[#f4f8f9] rounded-lg">
                    <img
                      src={el.image}
                      alt={el.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="col-span-2 sm:px-4 mt-4 sm:mt-0">
                    <h1 className="text-xl sm:text-2xl font-semibold">
                      {el.name}
                    </h1>
                    <p className="text-sm sm:text-base">{el.description}</p>
                    <span className="block text-lg sm:text-2xl font-semibold mt-2">
                      $ {el.price}
                    </span>
                    <p className="mt-4 text-base sm:text-lg">
                      Amount: {el.count}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-lg sm:text-xl">
              No items in cart
            </p>
          )}
        </div>
        {cart.length > 0 && (
          <div className="text-center sm:text-left mt-6">
            <Link
              className="border-2 border-black px-4 py-2 text-base sm:text-lg rounded-lg font-medium hover:bg-black hover:text-white transition"
              to="/checkout"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}

export default CartPage;
