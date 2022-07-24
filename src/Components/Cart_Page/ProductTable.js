import React from "react";
import { useDispatch} from "react-redux";
import { CartActions } from '../Store/CartProdcutReducer';
import swal from "sweetalert";

export default function ProductTable(props) {
    const comeData = props.data

    const dispatch = useDispatch();

    const removeArticle = ()=>{
      dispatch(CartActions.removeproduct(props.data));
      swal("Congratulations!", "Your product has been removed from the cart!", "success");
    }

    function decreaseQty(){
      dispatch(CartActions.changeQty({needAction: "decreaseQty",id: comeData.id,Size: comeData.Size} ));
    }
    function increaseQty(){
      // dispatch(CartActions.removeproduct(props.data));
      dispatch(CartActions.changeQty({needAction: "increaseQty",id: comeData.id,Size: comeData.Size} ));
    }


  return (
    <tr className="table_row">
      <td className="column-1">
        <div className="how-itemcart1" onClick={removeArticle}>
          <img src={comeData.Image} alt="IMG" />
        </div>
      </td>
      <td className="column-2">{comeData.ProductName}</td>
      <td className="column-3">{comeData.Size}</td>
      <td className="column-3">$ {comeData.Price}</td>
      <td className="column-4">
        <div className="wrap-num-product flex-w m-l-auto m-r-0">
          <div onClick={decreaseQty} className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
            <i className="fs-16 zmdi zmdi-minus"></i>
          </div>

          <input
            className="mtext-104 cl3 txt-center num-product"
            type="number"
            name="num-product1"
            value={comeData.Quantity}
          />

          <div onClick={increaseQty} className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
            <i className="fs-16 zmdi zmdi-plus"></i>
          </div>
        </div>
      </td>
      <td className="column-5">$ {comeData.Quantity * comeData.Price}</td>
    </tr>
  );
}
