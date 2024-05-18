
import Profile from "./components/MyProfile/Profile.tsx";
function App() {
  
const isLoggedIn = true;

const message = 'gf'


  return (
    <>
      {message.length > 0 && <p>{message}</p>}
      {isLoggedIn ? <Profile /> :  <div>Авторизуйтесь</div>}
    </>
  )
}

export default App
