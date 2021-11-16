import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

// const products = [
//     { id: 1, name: 'Shoes', description: 'Running show.', price:'$5',
//       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinxdsUAcOMCQkcvEQHrpxWNC2XvKvXV-Xlw&usqp=CAU'
//     },
//     { id: 2, name: 'Macbook', description: 'Apple macbook', price:  '$10', image: 'https://media.wired.com/photos/5fb2cc575c9914713ead03de/1:1/w_1800,h_1800,c_limit/Gear-Apple-MacBook-Air-top-down-SOURCE-Apple.jpg'
//     },
// ];

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

  return(
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={ product } onAddToCart={onAddToCart} />
            </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products;