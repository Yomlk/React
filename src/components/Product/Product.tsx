import * as classes from "./Product.modules.scss";
import { ProductItem } from "../../types/product";
import "./Product.modules.scss"

interface ProductProps {
  product: ProductItem;
}

const Product = (props: ProductProps) => {
  const { product } = props;
  
  return (
    <div className="cards">
      <img className="img" src={product.imageUrl} />
      <p className="card">{product.name}</p>
      
      <p className="card">{product.price} руб.</p>
      <p className="card">Скидка:{product.discount} %</p>
    </div>
  );
};
export default Product;
