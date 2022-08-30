import ProductCarasoul from './ProductCarasoul'
import VariationSelect from './VariationSelect';
import QtySelector from './QtySelector'
import { useNavigate } from 'react-router-dom';
import { useReducer, useState } from 'react';
import swal from 'sweetalert';
import ZoomModal from './ZoomModal/ZoomModal';
import ShareIcon from './ShareIcon';
import { useDispatch } from 'react-redux';
import { CartActions } from '../Store/CartProdcutReducer';
import CurrencyValue from '../Multicurrency/CurrencyValue';
import {useSelector} from "react-redux";
import { addItemInCart } from '../RealTimeDatabse/FirestoreDatabase';

const initValue = {
	Image: '',
	Size: '',
	Color: '',
	Quantity: 1,
	id: 0,
	Price: '',
	ProductName: ''
}


function productReducer(state, action){
	if (action.type === "SIZE_SELECTED") {
	 	return	{
			Size: action.value,
			Color: state.Color,
			Quantity: state.Quantity,
			id: action.id,
			Image: action.img,
			Price: action.price,
			ProductName: action.prodctName,
		}
	}
	if (action.type === "COLOR_SELECTED") {
		return	{
			Size: state.Size,
			Color: action.value,
			Quantity: state.Quantity,
			id: state.id,
			Image: state.Image,
			Price: state.Price,
			ProductName: state.ProductName,
		}
	}
	if (action.type === "QTY_SELECTED") {
		return	{
			Size: state.Size,
			Color: state.Color,
			Quantity: action.value,
			id: state.id,
			Image: state.Image,
			Price: state.Price,
			ProductName: state.ProductName,
		}
	}
}


export default function Modal(props) {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	let prodctName = props.modalProduct.productName;
	let price = props.modalProduct.price;
	let productId = props.modalProduct.id
	let imageArray = props.modalProduct.image;
	let variations_size = props.modalProduct.size;
	let variations_color = props.modalProduct.color;

	const [productState, productdispatch] = useReducer(productReducer, initValue );
	const [zoomModal, setzoomModal] = useState(true)
	
	function sizeSelected(size){
		productdispatch({type: 'SIZE_SELECTED', value: size, id:productId , img: imageArray[0], price: price, prodctName: prodctName})
	}
	function colorSelected(color){
		productdispatch({type: 'COLOR_SELECTED', value: color})
	}
	function qtySelected(qty){
		productdispatch({type: 'QTY_SELECTED', value: qty})
		// console.log("qty",qty);
	}
	function showZoomModal(){
		setzoomModal(!zoomModal)
	}

	const cartqty = useSelector(state => state.Cart)
	function AddToCart(){
		if ( !localStorage.getItem("name")) {
			return	swal({
						title: "Login Needed",
						text: "Please Login to add items!!!",
						buttons: true,
			  		}).then((accepted)=> {
						if (accepted) {
							navigate("/login");
							window.scrollTo(0,0)
						}
					})
		}
		if (productState.Size && productState.Color) {
			dispatch(CartActions.addproduct(productState))
			const cartdata = addItemInCart({items : [productState,...cartqty.items], TotalArticle : cartqty.TotalArticle + 1, TotalPrice : cartqty.TotalPrice + (productState.Price.mrpprice * productState.Quantity)})
			console.log("productState",productState);
			swal("Congratulations!", "Your product has been added to the cart!", "success");
		} else {
			swal("OOPS!", "Please select all the combination", "error");
		}
		// console.log(productState,"full state");
		// console.log(props.modalProduct.price,"bhai");
	}



  return (
    <div className='wrap-modal1 js-modal1 p-t-60 p-b-20 show-modal1'>
		<div className="overlay-modal1 js-hide-modal1"></div>

		{zoomModal && <div className="container">
			<div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
				<button className="how-pos3 hov3 trans-04 js-hide-modal1" onClick={props.closeModal}>
					<img src={require("../../images/icons/icon-close.png")} alt="CLOSE"/>
				</button>

				<div className="row">
					<div className='expand_arrow' onClick={showZoomModal}>
						<i className="fa fa-expand" aria-hidden="true"></i>
					</div>
					<div className="col-md-6 col-lg-7 p-b-30">
						<ProductCarasoul imageArray={imageArray}/>
					</div>
					<div className="col-md-6 col-lg-5 p-b-30">
						<div className="p-r-50 p-t-5 p-lr-0-lg">
							<h4 className="mtext-105 cl2 js-name-detail p-b-14">
								{prodctName}
							</h4>

							<span className="mtext-106 cl2">
								<CurrencyValue price={price}/>
							</span>

							<p className="stext-102 cl3 p-t-23">
								Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
							</p>
							
							<div className="p-t-33">
								<div className="variationfull p-b-10">
									<div className="size-203 flex-c-m respon6">
										Size
									</div>
									<VariationSelect data={variations_size} Selected={sizeSelected}/>
								</div>

								<div className="variationfull p-b-10">
									<div className="size-203 flex-c-m respon6">
										Color
									</div>
									<VariationSelect data={variations_color} Selected={colorSelected}/>
								</div>

								<div className="flex-w flex-r-m p-b-10">
									<div className="size-204 flex-w flex-m respon6-next">
										<QtySelector qtySelected={qtySelected}/>
										<button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail" onClick={AddToCart}>
											Add to cart
										</button>
									</div>
								</div>	
							</div>
							<ShareIcon/>
						</div>
					</div>
				</div>
			</div>
		</div>}
		
		{!zoomModal && <ZoomModal imageArray={imageArray} showZoomModal={showZoomModal}/>}
		
	</div>
  )
}
