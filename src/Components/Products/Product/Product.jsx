import { Card, CardContent, CardMedia, IconButton, Typography, CardActions } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import React from 'react'
import useStyles from './styles'

function Product({ product, onAddToCart }) {
    const classes = useStyles();
    return (

        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image.url}
                title={product.name} />
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h5'>
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography variant='body2' color='textSecondary' dangerouslySetInnerHTML={{ __html: product.description }} />
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label='Add to Cart' onClick={() => {onAddToCart(product.id, 1)}}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product