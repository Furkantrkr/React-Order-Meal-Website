import { useState } from 'react';

import Meals from './components/Meals/Meals';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHandler() {
    setCartIsShown(!cartIsShown);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onCart={showCartHandler} />}
      <Header onCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
