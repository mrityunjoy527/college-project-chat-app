import "./app.css";
import ChatContainer from "./components/chatContainer/ChatContainer";
import Register from "./components/register/Register.jsx";
import Login from "./components/login/Login.jsx";

function App() {

  return (
    <div className="outerContainer">
      <div className="bg"></div>
      <ChatContainer />
      {/* <Register/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;