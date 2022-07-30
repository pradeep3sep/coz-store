export default async function displayRazorpay() {
    const data = await fetch("http://localhost:1337/razorpay", {
      method: "POST",
    }).then((t) => t.json());
  
    console.log(data);
  
    const options = {
      key: process.env.REACT_APP_KEY_ID,
      currency: data.currency,
      amount: data.amount,
      name: "Test Mode",
      description: "No money will deductm use any NET BANKING",
      image: "https://www.dropbox.com/s/zuyzy2su6ask55l/pin.png?raw=1",
      order_id: data.id,
      handler: function (response) {
        alert("PAYMENT ID ::" + response.razorpay_payment_id);
        alert("ORDER ID :: " + response.razorpay_order_id);
      },
      prefill: {
        name: "Test",
        email: "test@gmail.com",
        contact: "9811111111",
      },
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }