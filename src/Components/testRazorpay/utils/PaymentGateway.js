import axios from 'axios';
export default  function displayRazorpay() {
  console.log("bb",process.env,{
    username: process.env.REACT_APP_KEY_ID,
    password: process.env.REACT_APP_KEY_SECRET  
  });
       axios.post('https://api.razorpay.com/v1/orders',{
        "amount": 500,
        "currency": "INR",
        "receipt": "qwsaq1sss",
        "partial_payment": true,
        "first_payment_min_amount": 230
      },{
        auth: {
          username: 'rzp_test_im9CRBIIbA0voX',
          password: 'RBJkrBvrGjFIUXsnQkJE0q0T'
        }
      }).then((response)=> console.log(response))
    
}