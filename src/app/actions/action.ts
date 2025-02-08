"use client"

import { Products } from "../../../types/product";

// Helper function to safely retrieve the cart from localStorage
const getCart = (): Products[] => {
  if (typeof window === "undefined") return []; // Prevents SSR issues

  try {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Error parsing cart data:", error);
    return [];
  }
};

// Function to save the cart to localStorage
const saveCart = (cart: Products[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

// Function to add a product to the cart
const addToCart = (product: Products) => {
  const cart = getCart();

  if (!Array.isArray(cart)) {
    console.log("Cart data is not an array:", cart);
    return
  }

  // Debugging: Ensure cart is an array before calling findIndex
  console.log("Current Cart:", cart);

  // Check if the product already exists in the cart
  const existingProductIndex = cart.findIndex((item) => item?._id === product._id);

  if (existingProductIndex > -1) {
    // If the product exists, increment its inventory count (initialize if missing)
    cart[existingProductIndex].inventory = (cart[existingProductIndex].inventory || 1) + 1;
  } else {
    // If the product doesn't exist, add it to the cart with an inventory count of 1
    cart.push({ ...product, inventory: 1 });
  }

  saveCart(cart);
};

// Function to remove a product from the cart
export const removeFromCart = (productId: string) => {
  const cart = getCart().filter((item) => item?._id !== productId);
  saveCart(cart);
};

// Function to update the quantity of a product in the cart
export const updateCartQuantity = (productId: string, quantity: number) => {
  const cart = getCart();
  const productIndex = cart.findIndex((item) => item?._id === productId);

  if (productIndex > -1) {
    cart[productIndex].inventory = Math.max(quantity, 1);
    saveCart(cart);
  }
};

// Function to retrieve all items in the cart
export const getCartItems = (): Products[] => getCart();

export default addToCart;
