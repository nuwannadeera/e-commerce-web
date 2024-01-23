import React from 'react'
import useStyle from './styles'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

function CartItem({ item }) {
    const classes = useStyle();

    return (
        <Card className="cart-item">
            <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small">-</Button>
                    <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
                    <Button type="button" size="small">+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary">Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem