import axios from "axios";
export default async function displayRazorpay(TotalPrice, receipt) {
  const data = await axios
    .get("https://x8ki-letl-twmt.n7.xano.io/api:3s7Dkrjt/reeee", {
      params: {
        amount: TotalPrice * 100,
        receipt: receipt,
      },
    })
  if (data) {
    try {
      return data.data.response.result.id
    } catch (error) {
      console.log(error);
    }
  }
}
