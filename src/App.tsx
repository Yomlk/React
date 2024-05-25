import MyButton from "./components/MyButton/MyButton";
import Profile from "./components/MyProfile/Profile.tsx";
import ProductList from "./components/ProductList/ProductList.tsx";

function App() {
  const isFavorite = false;

  return (
    <>
      {isFavorite ? ( <ProductList />) : (<Profile />) }
      <ProductList />
      <MyButton />
      <Profile />
    </>
  );
}

export default App;