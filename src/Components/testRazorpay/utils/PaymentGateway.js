import axios from 'axios';
export default  function displayRazorpay() {
       axios.post('https://api.razorpay.com/v1/orders',{
        "amount": 500,
        "currency": "INR",
        "receipt": "qwsaq1sss",
        "partial_payment": true,
        "first_payment_min_amount": 230
      },{
        auth: {
          username: process.env.KEY_ID,
          password: process.env.KEY_SECRET
        }
      }).then((response)=> console.log(response))
    
}