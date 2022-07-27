export default async function displayRazorpay() {
    const data = await fetch("http://localhost:1337/razorpay", {
      method: "POST",
    }).then((t) => t.json());
  
    console.log(data);
  
    const options = {
      key: "keyhere",
      currency: data.currency,
      amount: data.amount,
      name: "Coding Shiksha",
      description: "Wallet Transaction",
      image: "http://localhost:1337/logo.jpg",
      order_id: data.id,
      handler: function (response) {
        alert("PAYMENT ID ::" + response.razorpay_payment_id);
        alert("ORDER ID :: " + response.razorpay_order_id);
      },
      prefill: {
        name: "Gautam Sharma",
        email: "geekygautam1997@gmail.com",
        contact: "9821254649",
      },
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }