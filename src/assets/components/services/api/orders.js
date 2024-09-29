export const createOrder = async (data) => {
    const token = await window.Clerk?.session?.getToken();
  
    const res = await fetch("https://fee-storefront-backend.onrender.com/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  
    return await res.json();
  };
  
  export const getOrderById = async (id) => {
    const token = await window.Clerk?.session?.getToken();
  
    const res = await fetch(`https://fee-storefront-backend.onrender.com/api/orders/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  
    return await res.json();
  };