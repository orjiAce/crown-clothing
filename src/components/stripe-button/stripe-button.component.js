import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const pubkey = 'pk_test_Tv9XIwlNS1D6aKbf8jhexcQY'

    const onToken = token => {
        console.log(token)
        alert("Payment successful")
    }
    return (
        <StripeCheckout
            label='pay now'
            name="Crown Clothing"
            billingAddress
            shippingAddress
            stripeKey={pubkey}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='pay now'
            token={onToken}
        />
    );
};

export default StripeCheckoutButton;
