import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/LoginPage/Login/Login';

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
