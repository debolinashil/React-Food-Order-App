import React, { useState } from "react";
import Header from "./components/Header/Header";
import MealSummary from "./components/MealSummary/MealSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from "./context/cart-context";

function App() {
  const [isShowCart, setIsShowCart] = useState(false);

  const showCartHandler = () => {
    setIsShowCart(true);
  };

  const hideCartHandler = () => {
    setIsShowCart(false);
  }

  return (
    <CartContextProvider>
      {isShowCart && <Cart onClose={hideCartHandler} />}
      <Header onClickCart={showCartHandler}/>
      <main>
        <MealSummary />
        <AvailableMeals />
      </main>
    </CartContextProvider>
  );
}

export default App;
