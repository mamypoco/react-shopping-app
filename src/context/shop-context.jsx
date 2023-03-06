import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

//this is to create a default cart item
const getDefaultCart = () => {
   let cart = {};
   for (let i = 1; i < PRODUCTS.length + 1; i++) {
      //id starts with 1, then id 1 = 0, id 2 = 0, and so on.
      cart[i] = 0;
   }
   return cart;
};

export const ShopContextProvider = (props) => {
   const [cartItems, setCartItems] = useState(getDefaultCart());

   const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItems) {
         if (cartItems[item] > 0) {
            //amount of items in the cart
            let itemInfo = PRODUCTS.find(
               (product) => product.id === Number(item)
            );
            //find product.id that is equal to item and covert to number.
            totalAmount += cartItems[item] * itemInfo.price;
         }
      }
      return totalAmount;
   };

   //the following shows that item will be counted based on the id.
   const addToCart = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
   };

   const removeFromCart = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
   };

   const updateCartItemCount = (newAmount, itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
   };

   const contextValue = {
      cartItems,
      addToCart,
      removeFromCart,
      updateCartItemCount,
      getTotalCartAmount,
   };
   //this is to pass the value to parent component

   console.log(cartItems);

   return (
      <ShopContext.Provider value={contextValue}>
         {props.children}
      </ShopContext.Provider>
   );
};
