import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
   return (
      <div className="shop">
         <div className="shoptTitle">
            <h1>Mami's Gold Bakery</h1>
         </div>
         <div className="products">
            {PRODUCTS.map((product) => (
               <Product data={product} />
               //PRODUCTSのデータを一つ一つマップして、Productのdataにproductを入れて表示させよ
            ))}
         </div>
      </div>
   );
};
