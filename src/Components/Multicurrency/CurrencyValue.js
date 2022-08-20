import {useSelector} from "react-redux";

export default function CurrencyValue({price, qty}) {
    const currencySymbol = useSelector(state => state.Cart.currentCurrency.symbol)
    
    let value = ''
    if (currencySymbol === '₹') {
        value = price.mrpprice
    }
    if (currencySymbol === '$') {
        value = price.usdprice
    }
    if (currencySymbol === '£') {
        value = price.gbpprice
    }
    if (currencySymbol === '€') {
        value = price.eurprice
    }

  return (
    <>
    {/* { qty  ? <span>{currencySymbol}{value}</span> : <span>{currencySymbol}{ qty * value}</span> } */}
    <span>{currencySymbol}{value}</span>
    </>
  )
}
