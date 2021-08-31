import { useState, useEffect } from "react";
import { Products, Navbar, Cart } from "./components";
import { commerce } from "./lib/commerce";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const getProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const getCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  useEffect(() => {
    getProducts();
    getCart();
  }, []);

  console.log(cart);

  console.log(products);
  return (
    <Router>
      <>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} />
          </Route>
        </Switch>
      </>
    </Router>
  );
};

export default App;
