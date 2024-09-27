import { useContext, useState } from "react";
import TextInput from "../components/TextInput";
import { cartContext } from "../context/cartContext";
//import { createOrder } from "../../services/api/orders";

function Checkout() {
  const { cart } = useContext(cartContext);

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    line_1: "",
    line_2: "",
    city: "",
    phone: "",
  });
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createOrder({
        userId: "123",
        orderProducts: cart.map((el) => ({
          productId: el._id,
          quantity: el.count,
        })),        
      });
    } catch (error) {}
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <section className="py-8 px-16">
        <h1 className="text-4xl font-semibold">Checkout</h1>
        <div className="grid grid-cols-3 gap-x-4 mt-4">
          <div className="col-span-2 border-2 border-gray-500 rounded-lg p-2">
            <h2 className="text-2xl font-semibold">Shipping Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4">
                <TextInput
                  onChange={handleChange}
                  name="fname"
                  required={true}
                  label="First Name"
                  value={formData.fname}
                  placeholder="John"
                />
                <TextInput
                  onChange={handleChange}
                  name="lname"
                  required={true}
                  label="Last Name"
                  value={formData.lname}
                  placeholder="Doe"
                />
                <TextInput
                  onChange={handleChange}
                  name="line_1"
                  required={true}
                  value={formData.line_1}
                  label="Address Line 1"
                  placeholder="123 Main St"
                />
                <TextInput
                  onChange={handleChange}
                  name="line_2"
                  required={true}
                  label="Address Line 2"
                  value={formData.line_2}
                  placeholder="Westside"
                />
                <TextInput
                  onChange={handleChange}
                  name="city"
                  required={true}
                  value={formData.city}
                  label="City"
                  placeholder="New York"
                />
                <TextInput
                  onChange={handleChange}
                  name="phone"
                  required={false}
                  value={formData.phone}
                  label="Phone Number"
                  placeholder="+1 (123) 456-7890"
                />
              </div>
              <div className="mt-4">
                <button className="border-2 border-black px-4 py-1 text-lg rounded-lg mt-2 font-medium hover:bg-black hover:text-white transition">
                  Proceed to payment
                </button>
              </div>
            </form>
          </div>
          <div className="col-span-1 border-2 border-gray-500 rounded-lg p-2">
            <h2 className="text-2xl font-semibold">Order Summary</h2>
            <div className="flex flex-col gap-y-4 mt-4">
              {cart.map((el) => {
                return (
                  <div className="grid grid-cols-3 border p-2 rounded-xl">
                    <div className="col-span-1 bg-[#f4f8f9] rounded-lg">
                      <img
                        src={el.image}
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="col-span-2 px-4">
                      <h3 className="text-lg font-semibold">{el.name}</h3>
                      <p className="text-sm">{el.description}</p>
                      <span className="block text-lg font-semibold mt-2">
                        $ {el.price}
                      </span>
                      <p className="mt-1 text-sm">Amount: {el.count}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <span className="block mt-4 font-semibold text-xl">
                Total: $
                {cart.reduce(
                  (acc, el) => acc + el.count * parseFloat(el.price),
                  0
                )}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Checkout;