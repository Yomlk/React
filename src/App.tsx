
import Profile from "./components/MyProfile/Profile.tsx";
function App() {
  
const isLoggedIn = true;



  return (
    <>
      {isLoggedIn ? <Profile /> :  <div>Авторизуйтесь</div>}
    </>
  )
}

export default App
