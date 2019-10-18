// import request from 'request';
// var Razorpay = require('razorpay');

// var instance = new Razorpay({
//     key_id: 'rzp_test_HzIuk4ham2496s',
//     key_secret: 'Ys1CWdQUZywRI9IkL4CyMMWX',
//   });

// var options = {
//     amount: 50000,  // amount in the smallest currency unit
//     currency: "INR",
//     receipt: "order_rcptid_11",
//     payment_capture: '0'
//   };

//   instance.orders.create(options, function(err, order) {
//     console.log(order);
//   });

request({
  method: 'POST',
  url: 'https://rzp_test_HzIuk4ham2496s:Ys1CWdQUZywRI9IkL4CyMMWX@api.razorpay.com/v1/payments/pay_29QQoUBi66xm2f/capture',
  form: {
    amount: 5000,
    order_id: 'order_DAwyZCcwWV6Y0P',
  },
}, (error, response, body) => {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});

//  <form action="https://www.example.com/payment/success/" method="POST">
//       <script    src="https://checkout.razorpay.com/v1/checkout.js"
//      data-key="rzp_test_HzIuk4ham2496s" // Enter the Key ID generated from the Dashboard
//      data-amount="50000" // Amount is in currency subunits. Default currency is INR. Hence, 29935 refers to 29935 paise or INR 299.35.
//      data-currency="INR"
//      data-order_id="order_DB4JNgahmPkokJ"//This is a sample Order ID. Create an Order using Orders API. (https://razorpay.com/docs/payment-gateway/orders/integration/#step-1-create-an-order)
//      data-buttontext="Pay with Razorpay"
//      data-name="Acme Corp"
//      data-description="A Wild Sheep Chase is the third novel by Japanese author Haruki Murakami"
//      data-image="https://example.com/your_logo.jpg">
//      </script>
//      <input type="hidden" custom="Hidden Element" name="hidden"/>
// </form>
