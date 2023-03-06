import { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
   const { cartItems, getTotalCartAmount } = useContext(ShopContext);
   const totalAmount = getTotalCartAmount();

   const navigate = useNavigate();

   return (
      <div className="cart">
         <div>
            <h1>Your Cart Items</h1>
         </div>
         <div className="cart">
            {PRODUCTS.map((product) => {
               if (cartItems[product.id] !== 0) {
                  //the product's id value is not 0, meaning it is in your cart.
                  return <CartItem data={product} />;
               }
            })}
         </div>

         {totalAmount > 0 ? (
            <div className="checkout">
               <p>Subtotal: ${totalAmount} </p>
               <button onClick={() => navigate("/")}>Continue Shopping</button>
               <button>Checkout</button>
            </div>
         ) : (
            <h1>Your cart is empty.</h1>
         )}
      </div>
   );
};
