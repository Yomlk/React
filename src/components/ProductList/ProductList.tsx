import Product from "../Product/Product.tsx";
import { ProductItem } from "../../types/product.ts";
import Row from "../Row/Row.tsx";

const ProductList = () => {
  const products: ProductItem[] = [
    {
      id: 1,
      name: "Наручные часы мужские SKMEI 1251",
      imageUrl: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg",
      price: 8165,
      
      rating:4.7,
      isFavorite:false,
    },
    {
      id: 2,
      name: "Наручные часы мужские Huawei",
      imageUrl: "https://avatars.mds.yandex.net/get-mpic/4448884/img_id4642926254272826359.jpeg/600x800",
      price: 150,
      
      rating:4.7,
      isFavorite:false,
    },
    {
      id: 3,
      name: "Наручные часы мужские Xiamoi",
      imageUrl: "https://avatars.mds.yandex.net/get-mpic/1992523/img_id620350081432278229.jpeg/600x800",
      price: 250,
      
      rating:4.7,
      isFavorite:false,
    },
    {
      id: 4,
      name: "Наручные часы мужские Mech",
      imageUrl: "https://avatars.mds.yandex.net/get-mpic/4101287/img_id372204153696236523.jpeg/600x800",
      price: 500,
      discount: {
        type: "Скидка:10%",
        value: 10,
      },
      rating:4.7,
      isFavorite:false,


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