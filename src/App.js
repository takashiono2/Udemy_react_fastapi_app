import './App.css';
import Result from './components/pages/Result';
import Submit from './components/pages/Submit';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Submit />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
