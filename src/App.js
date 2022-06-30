import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/LoginPage/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Details from "./pages/Details/Details";
import Houses from "./pages/Houses/Houses";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
