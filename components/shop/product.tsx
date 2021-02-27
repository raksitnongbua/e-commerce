import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Favorite, Share } from '@material-ui/icons';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 200,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  })
);
interface IProps {
  product: IProduct;
}
const Product: React.FC<IProps> = ({ product }) => {
  const { media, root } = useStyles();
  return (
    <Card className={root}>
      <CardMedia
        className={media}
        image='/images/shop/product-placeholder.png'
        title='product'
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {product.detail}
        </Typography>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='body2' color='textSecondary' component='p'>
            ฿{product.price}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {product.sold > 0 ? `ขายแล้ว ${product.sold} ชิ้น` : ''}
          </Typography>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <Favorite />
        </IconButton>
        <IconButton aria-label='share'>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
