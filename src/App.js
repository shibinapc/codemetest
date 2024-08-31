import './App.css';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import {store, persistor} from './redux/store';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './pages/home';
import { PersistGate } from 'redux-persist/integration/react';
import Forgetpage from './pages/forgot';
import ProductPage from './pages/productPage';
import AdminPage from './pages/adminpage';
import ProductmenPage from './pages/productmenPage';
import ProductkidPage from './pages/productkidPage';
import AddproductPage from './pages/addproPage';
import FavouritePage from './pages/favouritePage';
import Productlist from './components/productlist';
import CartPage from './pages/cartPage';

function App() {
  return (
    <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>

    <Router> 
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/Forget" element={<Forgetpage/>} />
        <Route path="/register" element={<RegisterPage />} />  
        <Route path="/*" element={<RegisterPage />} />  
        <Route path="/women" element={<ProductPage />} /> 
        <Route path="/admin" element={<AdminPage />} />   
        <Route path="/men" element={<ProductmenPage />} />  
        <Route path="/kid" element={<ProductkidPage />} />  
        <Route path="/addproduct" element={<AddproductPage />} />  
        <Route path="/productlist" element={<Productlist />} />
        <Route path="/favourite" element={<FavouritePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes> 
    </Router> 
    </PersistGate>

    </Provider> 
  );
}

export default App;
