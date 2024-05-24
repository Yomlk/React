import { ProductItem } from "../../types/product";

interface ProductProps {
    product:ProductItem
}

const Product = (props: ProductProps) => {
    const {product} = props;
    return(
        <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
        </div>
    )
     
}
export default Product;