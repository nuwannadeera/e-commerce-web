import { Grid } from '@material-ui/core'
import React from 'react'
import Product from './Product/Product'
import useStyles from './styles'

const products = [
    { id: 1, name: 'shoes', description: 'deck shoes', price: 'Rs 4500.00' },
    { id: 2, name: 'tv', description: 'smart TV', price: 'Rs 60000.00' }
]

function Products() {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent='center' spacing={4}>
                {
                    products.map((product) => (
                        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} />
                        </Grid>
                    ))
                }
            </Grid>
        </main>
    )
}

export default Products