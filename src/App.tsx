import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './components/login-user/Login';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>

          <Route path='/login' element={<Login />} ></Route>

        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
