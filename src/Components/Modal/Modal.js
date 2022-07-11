import ProductCarasoul from './ProductCarasoul'
import VariationSelect from './VariationSelect';

export default function Modal(props) {
	let prodctName = props.modalProduct.productName;
	let price = props.modalProduct.price;
	let imageArray = props.modalProduct.image;
	let variations_size = props.modalProduct.size;
	let variations_color = props.modalProduct.color;

  return (
    <div className='wrap-modal1 js-modal1 p-t-60 p-b-20 show-modal1'>
		<div className="overlay-modal1 js-hide-modal1"></div>

		<div className="container">
			<div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
				<button className="how-pos3 hov3 trans-04 js-hide-modal1" onClick={props.closeModal}>
					<img src={require("../../images/icons/icon-close.png")} alt="CLOSE"/>
				</button>

				<div className="row">
					<div className="col-md-6 col-lg-7 p-b-30">
						<ProductCarasoul imageArray={imageArray}/>
					</div>
					
					<div className="col-md-6 col-lg-5 p-b-30">
						<div className="p-r-50 p-t-5 p-lr-0-lg">
							<h4 className="mtext-105 cl2 js-name-detail p-b-14">
								{prodctName}
							</h4>

							<span className="mtext-106 cl2">
								${price}
							</span>

							<p className="stext-102 cl3 p-t-23">
								Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
							</p>
							
							<div className="p-t-33">
								<div className="variationfull p-b-10">
									<div className="size-203 flex-c-m respon6">
										Size
									</div>
									{variations_size.map((size)=>{
										return <VariationSelect value={size} key={size} />
									})}
								</div>

								<div className="variationfull p-b-10">
									<div className="size-203 flex-c-m respon6">
										Color
									</div>
									{variations_color.map((color)=>{
										return <VariationSelect value={color} key={color}/>
									})}
								</div>

								<div className="flex-w flex-r-m p-b-10">
									<div className="size-204 flex-w flex-m respon6-next">
										<div className="wrap-num-product flex-w m-r-20 m-tb-10">
											<div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
												<i className="fs-16 zmdi zmdi-minus"></i>
											</div>

											<input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product" defaultValue="1"/>

											<div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
												<i className="fs-16 zmdi zmdi-plus"></i>
											</div>
										</div>

										<button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
											Add to cart
										</button>
									</div>
								</div>	
							</div>

							{/* <!--  --> */}
							<div className="flex-w flex-m p-l-100 p-t-40 respon7">
								<div className="flex-m bor9 p-r-10 m-r-11">
									<a href="/" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
										<i className="zmdi zmdi-favorite"></i>
									</a>
								</div>

								<a href="/" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
									<i className="fa fa-facebook"></i>
								</a>

								<a href="/" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
									<i className="fa fa-twitter"></i>
								</a>

								<a href="/" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
									<i className="fa fa-google-plus"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}
