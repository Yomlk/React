import Profile from "./components/MyProfile/Profile.tsx";
import ProductList from "./components/ProductList/ProductList.tsx";
function App() {
  const isLoggedIn = true;

  const message = "Hi!";

  return (
    <>
      {message.length > 0 && <p>{message}</p>}
      {isLoggedIn ? <Profile /> : <div>Авторизуйтесь</div>}
      <ProductList />
    </>
  );
}

export default App;
