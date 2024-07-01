import "./app.css";
import ChatContainer from "./components/chatContainer/ChatContainer";
import Register from "./components/register/Register.jsx";
import Login from "./components/login/Login.jsx";
import useRegister from "./useRegister.js";

function App() {

  const { wantToRegister } = useRegister();
  const user = null;

  return (
    <div className="outerContainer">
      <div className="bg"></div>
      {
        user ? <ChatContainer /> : wantToRegister ? <Register /> : <Login />
      }

    </div>
  );
}

export default App;