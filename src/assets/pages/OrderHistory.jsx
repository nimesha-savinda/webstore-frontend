import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { getOrderById } from '../components/services/api/orders';

function OrderHistory() {
  const { user, isSignedIn, isLoaded } = useUser();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      console.log(user.id); // Safe to access user.id after isLoaded is true
      getOrderById(user)
        .then((data) => setHistory(data))
        .catch((error) => console.error(error));
    }
  }, [isLoaded, isSignedIn, user]);
 // console.log(user.id)
  return (
    <div>
      helloooo
    </div>
  )
}

export default OrderHistory
