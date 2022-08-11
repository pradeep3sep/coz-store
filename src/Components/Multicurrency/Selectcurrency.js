import { useDispatch} from "react-redux";
import { CartActions } from '../Store/CartProdcutReducer';
import {useSelector} from "react-redux";

const currList = ["INR(₹)","USD($)","GBP(£)","EUR(€)" ]

export default function Selectcurrency() {
    const dispatch = useDispatch();
    const currCurrency = useSelector(state => state.Cart.currentCurrency)
    
    function curreselecthandler(e){
        const selectvalue = e.target.innerText;
        let apiprice = '';
        if (selectvalue === 'INR(₹)') {
            apiprice = 'mrpprice'
        }
        if (selectvalue === 'USD($)') {
            apiprice = 'usdprice'
        }
        if (selectvalue === 'GBP(£)') {
            apiprice = 'gbpprice'
        }
        if (selectvalue === 'EUR(€)') {
            apiprice = 'eurprice'
        }
        dispatch(CartActions.currency({setvalue: selectvalue, symbol: selectvalue.slice(4,5), apiprice : apiprice}))

    }

  return (
    <div className="flex-c-m trans-04 p-lr-25 currency">
        <h6>{currCurrency.setvalue}</h6>
        <div className="sub">
            { currList.map((curr,index)=> <p className="subcurrency" onClick={curreselecthandler} key={index + "cc"}>{curr}</p>) }
        </div>
    </div>
  )
}
