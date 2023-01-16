import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import ProductPage from "../pages/ProductPage/ProductPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/" element={<MainPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
