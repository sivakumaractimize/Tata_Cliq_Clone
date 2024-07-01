import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Store from './Redux/Store';
import React, { Suspense, lazy } from 'react';

const Homepage = lazy(() => import('./Pages/Homepage'));
const Productspage = lazy(() => import('./Pages/Productspage'));
const InnerProductspage = lazy(() => import('./Pages/InnerProductsPage'));
const WishlistPage = lazy(() => import('./Pages/WishlistPage'));
const AddTObagPage = lazy(() => import('./Pages/AddtoBagpage'));
const Myaccount = lazy(() => import('./Pages/Myaccountpage'));

const theme = createTheme();

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Homepage />}></Route>
              <Route path='/productpage' element={<Productspage />}></Route>
              <Route path='/Innerproductspage' element={<InnerProductspage />}></Route>
              <Route path='/wishlistpage' element={<WishlistPage />}></Route>
              <Route path='/addtobagpage' element={<AddTObagPage />}></Route>
              <Route path='/myaccount/*' element={<Myaccount />}></Route>
            </Routes>
          </Suspense>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
