import React, { useEffect, useState } from 'react'
import useStyle from './styles'
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import { commerce } from '../../../lib/commerce';

const steps = ['Shipping address', 'Payment details'];

function CheckoutForm({ cart }) {
    const classes = useStyle();
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                // console.log(token);
                setCheckoutToken(token);
            } catch (error) {

            }
        }
        generateToken();
    }, [cart])

    const Form = () => activeStep === 0 ? <AddressForm checkoutToken={checkoutToken}/> : <PaymentForm />
 
    const Confirmation = () => (
        <div>
            <h1>heloo</h1>
        </div>
    )


    return (
        <>
            <CssBaseline />
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </main>
        </>
    )
}

export default CheckoutForm