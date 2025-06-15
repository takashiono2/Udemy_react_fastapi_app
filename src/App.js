import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import LoginFailed from './components/pages/LoginFailed';
import Register from './components/pages/Register';
import { LoginUserProvider } from './components/providers/LoginUserProvider';
import Footer from './components/templates/Footer';

function App() {
  return (
    <LoginUserProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/loginfailed" element={<LoginFailed />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </LoginUserProvider>
  );
}

export default App;
