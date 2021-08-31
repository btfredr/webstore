import { useState, useEffect } from "react";
import { Products, Navbar } from "./components";
import { commerce } from "./lib/commerce";

const App = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);
  return (
    <>
      <Navbar />
      <Products products={products} />
    </>
  );
};

export default App;
