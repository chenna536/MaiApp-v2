import React, { Component } from 'react';
import './checkout.css';
import Header from '../Results/Header'

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: false, payment_amount: 0, amount: 0 };
        this.handleChange = this.handleChange.bind(this);
        this.paymentHandler = this.paymentHandler.bind(this);
        this.changeAmount = this.changeAmount.bind(this);

    }

    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://checkout.razorpay.com/v1...";
        script.async = true;

        document.body.appendChild(script);
    }
    
    handleChange() {
        this.setState({
            checked: !this.state.checked
        })
    }
    changeAmount(e) {
        this.setState({ amount: e.target.value })
    }
    paymentHandler(e) {
        e.preventDefault();
        let options = {
            "key": "rzp_test_3OHEkrM9aPMz5u",
            "amount": this.state.amount, // 2000 paise = INR 20, amount in paisa
            "name": "Myvillagefoods",
            "description": "ordered Items",
            "image": "/your_logo.png",
            "handler": function (response) {
                alert(response.razorpay_payment_id);
            },
            "prefill": {
                "name": "Harshil Mathur",
                "email": "harshil@razorpay.com"
            },
            "notes": {
                "address": "Hello World"
            },
            "theme": {
                "color": "#F37254"
            }
        };

        let rzp = new window.Razorpay(options);
        rzp.open();
    }


    render() {
        return (

            <div className="bg">
                <h1 className="heading">Checkout</h1>

                <div className="payments-form">

                    <p>
                        <label htmlFor="pay_amount" className="pay_amount">
                            Amount to be paid
 </label>
                    </p>
                    <input type='text' onChange={
                        this.changeAmount
                    } />
                    <p>
                        <button onClick={this.paymentHandler}>Pay Now</button>
                    </p>


                </div></div>
        );
    }
}
export default Checkout;