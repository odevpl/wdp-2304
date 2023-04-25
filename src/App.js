import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';
import Blog from './components/views/Blog/Blog';
import Search from './components/views/Search/Search';
import Cart from './components/views/Cart/Cart';
import RegistrationPage from './components/views/RegistrationPage/RegistrationPage';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/shop/:categoryId' element={<ProductList />} />
          <Route path='/product/:productId' element={<ProductPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
