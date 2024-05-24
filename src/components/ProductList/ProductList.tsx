import Product from "../Product/Product";
import { ProductItem } from "../../types/product.ts";
import Row from "../Row/Row.tsx";



const ProductList = () => {
  const products: ProductItem[] = [
    {
      id: 1,
      name: "Обработка Картинки Обычная",
      price: 50,
      imageUrl:"./src/components/MyProfile/img/sinie-glaza-leoparda.jpg",
    },
    {
      id: 2,
      name: "Обработка Картинки Средняя",
      price: 100,
      imageUrl:"./src/components/MyProfile/img/sinie-glaza-leoparda.jpg",
    },
    {
      id: 3,
      name: "Обработка Картинки Высокая",
      price: 300,
      imageUrl:"./src/components/MyProfile/img/sinie-glaza-leoparda.jpg",
    },
    {
      id: 4,
      name: "Обработка Картинки Турбо",
      price: 500,
      discount:30,
      imageUrl:"./src/components/MyProfile/img/sinie-glaza-leoparda.jpg",
    },
    
  ];
  const list = products.map((product) => {
    return <Product key={product.id} product={product} />;
  });
  return (
    <div>
      <Row direction="row">{list}</Row>
    </div>
  );
};
export default ProductList;
