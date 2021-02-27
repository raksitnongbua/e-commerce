import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import Layout from '../../components/layout';
import Product from '../../components/shop/product';

const Shop = ({ products }) => {
  return (
    <Layout>
      <Container maxWidth='lg'>
        <Box p={2}>
          <Grid container spacing={1}>
            {products.map((product: IProduct, index: number) => (
              <Grid item key={`product-${index}`}>
                <Product product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export default Shop;

export const getStaticProps = async () => {
  const products: IProduct[] = [
    {
      id: 'p-1',
      image: '',
      price: 5,
      sold: 100,
      detail: 'รายละเอียดสินค้า',
    },
    {
      id: 'p-2',
      image: '',
      price: 5,
      sold: 0,
      detail: 'รายละเอียดสินค้า',
    },
    {
      id: 'p-3',
      image: '',
      price: 5,
      sold: 0,
      detail: 'รายละเอียดสินค้า',
    },
    {
      id: 'p-4',
      image: '',
      price: 5,
      sold: 0,
      detail: 'รายละเอียดสินค้า',
    },
    {
      id: 'p-5',
      image: '',
      price: 5,
      sold: 0,
      detail: 'รายละเอียดสินค้า',
    },
    {
      id: 'p-6',
      image: '',
      price: 5,
      sold: 0,
      detail: 'รายละเอียดสินค้า',
    },
    {
      id: 'p-7',
      image: '',
      price: 5,
      sold: 0,
      detail: 'รายละเอียดสินค้า',
    },
    {
      id: 'p-8',
      image: '',
      price: 5,
      sold: 0,
      detail: 'รายละเอียดสินค้า',
    },
    {
      id: 'p-9',
      image: '',
      price: 5,
      sold: 0,
      detail: 'รายละเอียดสินค้า',
    },
    {
      id: 'p-10',
      image: '',
      price: 5,
      sold: 0,
      detail: 'รายละเอียดสินค้า',
    },
  ];

  return {
    props: {
      products,
    },
  };
};
