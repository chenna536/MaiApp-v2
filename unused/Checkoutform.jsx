import React from "react";
// import ReactDOM from "react-dom";
// var Razorpay = require('razorpay');

import Razorpay from 'razorpay'; 
export default class Checkout extends React.Component {
  state = {
    amount: 0,
    payment: false
  };

  constructor() {
    super()
    this.changeAmount = this.changeAmount.bind(this);
    this.initiatePayment = this.initiatePayment.bind(this);
  }

  changeAmount(e) {
    this.setState({amount: e.target.value})
  }

    
  
   initiatePayment = async(e)=>{
    let options = {
      "key_id": "rzp_test_HzIuk4ham2496s",
      "key_secret":"Ys1CWdQUZywRI9IkL4CyMMWX",
      "amount": this.state.amount, // 2000 paise = INR 20, amount in paisa
      "name": "Merchant Name",
      "description": "Purchase Description",
      "image": "/your_logo.png",
      "handler": function (response){
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
      let rzp = await new Razorpay(options);
      await rzp.open()
    }
    
  render () {
    return (
      <>
       <div>
        <input type='text' onChange={
           this.changeAmount
          }/>
        <button onClick={this.initiatePayment}>Pay Rs. {this.state.amount/100}</button> 
      </div>
      </>
    )
  }
}

// ReactDOM.render(<Checkout/>, document.getElementById("root"));

// ReactDOM.render(<Checkout />, document.getElementById('react-root'));