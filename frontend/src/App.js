import LoginPage from "./LoginPage/LoginPage"
import "./App.css"
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRote";

function App() {
  return <BrowserRouter >
      <AppRouter />
          </BrowserRouter>
}

export default App
