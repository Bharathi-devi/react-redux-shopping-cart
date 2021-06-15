import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import reducer from './components/reducer';
// items
import cartItems from "./cart-items";
// redux stuff
import {createStore} from 'redux';
import { Provider } from "react-redux";
// initial store


//reducer

const store=createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


function App() {
  // cart setup

  return (
    <main>
      <Provider store={store}>
      <Navbar/>
      <CartContainer cart={cartItems} />
      </Provider>
    </main>
  );
}

export default App;
