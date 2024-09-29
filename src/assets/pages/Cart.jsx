import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart } = useContext(cartContext);

  return (
    <div>
      <section className="py-8 px-16">
        <h1 className="text-4xl font-semibold">Your Shopping Cart</h1>
        <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4 border-black py-4">
          {cart.length > 0 ? (
            cart.map((el) => {
              return (
                <div key={el.id} className="grid grid-cols-3 border p-2 rounded-xl">
                  <div className="col-span-1 bg-[#f4f8f9] rounded-lg">
                    <img
                      src={el.image}
                      alt={el.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="col-span-2 px-4">
                    <h1 className="text-2xl font-semibold">{el.name}</h1>
                    <p>{el.description}</p>
                    <span className="block text-2xl font-semibold mt-2">
                      $ {el.price}
                    </span>
                    <p className="mt-4 text-lg">Amount: {el.count}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No items in cart</p>
          )}
        </div>
        {cart.length > 0 && (
          <div>
            <Link
              className="border-2 border-black px-4 py-1 text-lg rounded-lg mt-2 font-medium hover:bg-black hover:text-white transition"
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
