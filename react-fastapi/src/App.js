import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import LoginFailed from './components/pages/LoginFailed';
import Register from './components/pages/Register';
import RegisterSucceeded from './components/pages/RegisterSucceeded';
import { LoginUserProvider } from './components/providers/LoginUserProvider';
import Footer from './components/templates/Footer';
import RegisterFailed from './components/pages/RegisterFailed';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <LoginUserProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginfailed" element={<LoginFailed />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registersucceed" element={<RegisterSucceeded />} />
          <Route path="/registerfailed" element={<RegisterFailed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </LoginUserProvider>
  );
}

export default App;
