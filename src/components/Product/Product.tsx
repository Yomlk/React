import classes from './Product.module.scss'
import { ProductItem } from "../../types/product.ts";

interface ProductProps {
  product: ProductItem;
}

const Product = (props: ProductProps) => {
  const { product } = props;

  return (
    <div className={classes.cards}>
      
      <p className={classes.name}>{product.name}</p>
      <p><img src={product.imageUrl} className={classes.img}/></p>
      <p className={classes.price}>{product.price} руб.</p>
      <p className={classes.discount}>{product.discount?.type}</p>
    </div>
  );
};

export default Product;