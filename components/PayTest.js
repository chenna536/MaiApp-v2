const crypto = require('crypto');

const hmac = crypto.createHmac('sha256', 'Ys1CWdQUZywRI9IkL4CyMMW3');

// c6f7244d6ea9c71cbe4782e51219c3733a09586a

const razorpayOrderId = 'order_DMnnoJwvJqlMYC';
const razorpayPaymentId = 'pay_DK4irW2RtcqXIr';

hmac.update(`${razorpayOrderId}|${razorpayPaymentId}`);

const generatedSignature = hmac.digest('hex');

const razorpaySignature = "'a' || 1==1";

// const generatedSignature = '0f7cec4454115ba0da2a30fef4b1d1b3dbb331408dee075d45c6eb57a4752e5d';

const isSignatureValid = generatedSignature === razorpaySignature;

console.log(generatedSignature);
console.log(isSignatureValid);
console.log(razorpaySignature);
