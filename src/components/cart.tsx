import React, { useEffect, useState } from 'react';
import { Products } from '../../types/product';
import { getCartItems, removeFromCart, updateCartQuantity } from '../app/actions/action';
import Swal from 'sweetalert2';

const Cartpage = () => {
  const [cartItems, setCartItems] = useState<Products[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this item.',
      icon: 'warning',
      showCancelButton: true, // Corrected spelling and type
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it', // Corrected spelling
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire('Removed', 'Item has been removed', 'success');
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity); // Corrected function call
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  const handleProceed = () => {
    Swal.fire({
      title: 'Proceed to Checkout',
      text: 'Please review your cart before checkout.',
      icon: 'question',
      showCancelButton: true, // Corrected spelling and type
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, proceed', // Corrected spelling
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Success', 'Your order has been successfully processed', 'success');
      }
    });
  };

  return (
    
        <div>
          {Array.isArray(cartItems) && cartItems.map((item) => (
            <div key={item._id}>
              {item.title}
              {/* Add buttons for increment, decrement, and remove */}
            </div>
          ))}
  </div>
      );
      
    <div>
      {cartItems.map((item) => (
        <div key={item._id}>
          {item.title}
          {/* Add buttons for increment, decrement, and remove */}
          <button onClick={() => handleIncrement(item._id)}>+</button>
          <button onClick={() => handleDecrement(item._id)}>-</button>
          <button onClick={() => handleRemove(item._id)}>Remove</button>
        </div>
      ))}
      <div>Total: {calculateTotal()}</div>
      <button onClick={handleProceed}>Proceed to Checkout</button>
    </div>

};

export default Cartpage;
