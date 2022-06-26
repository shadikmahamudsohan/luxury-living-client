import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/LoginPage/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Booking from './pages/Booking/Booking';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
