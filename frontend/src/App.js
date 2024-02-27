import './App.css';
import HomePage from './screens/HomePage';
import NavBar from './component/NavBar';
import {Route, Routes} from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';
import OrderPage from './screens/OrderPage';

function App() {
  return (
    <div className="App bg-dark text-white">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/Cart" element={<CartScreen/>}/>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/SignUp" element={<RegisterPage/>}/>
        <Route path="/Order" element={<OrderPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
