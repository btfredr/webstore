import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes",
    price: "$5",
    image:
      "https://media.kohlsimg.com/is/image/kohls/3798326_Gray_Platinum?wid=600&hei=600&op_sharpen=1",
  },
  {
    id: 2,
    name: "Apple Macbook",
    description: "Apple Macbook",
    price: "$10",
    image: "https://www.komplett.no/img/p/1024/1174474_1.jpg",
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={3} lg={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
