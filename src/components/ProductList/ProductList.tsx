import Product from "../Product/Product";
import {ProductItem} from "../../types/product"
import Row from "../../components/row/Row"

const ProductList = () => {
 const products: ProductItem[]= [
    {
        id:1,
        name:'Товар  1',
        price:50,
    },
    {
        id:2,
        name:"Товар 2",
        price:500,
    },
    {
        id:3,
        name:"Товар 3",
        price:500,
    },
    {
        id:4,
        name:"Товар 4",
        price:500,
    }
    

 ];
 const list = products.map((product)=> {
  return <Product key = {product.id} product={product} />
 });
 return <div>
          <Row direction ="row">{list}</Row>
    </div>
};
export default ProductList;