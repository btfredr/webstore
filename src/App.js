import { useState, useEffect } from "react";
import { Products, Navbar } from "./components";
import { commerce } from "./lib/commerce";

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
    <>
      <Navbar totalItems={cart.total_items} />
      <Products products={products} onAddToCart={handleAddToCart} />
    </>
  );
};

export default App;
