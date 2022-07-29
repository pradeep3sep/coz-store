import React from "react";
import { NavLink } from "react-router-dom";
import acclogo from '../../images/accountsLog.svg'

export default function MyProfile() {
  return (
    <>
      <div className="container p-t-100 myprofile">
        <div className="row">
          <div className="col-md-3">
            <ul className="sidesec">
              <li>
                <NavLink to="/myprofile">My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/myorders">My Orders</NavLink>
              </li>
              <li>
               <button className="w-100 signout">
                    SignOut
               </button>
              </li>
            </ul>
          </div>
          <div className="col-md-9">
            <div className="row">
                <div className="col-2">
                    <img src="https://www.dropbox.com/s/gi96663v0cm1c3b/product-01.jpg?raw=1" alt="loginImage" />
                </div>
                <div className="col-10">
                    <h4 className="main-heading">Contact Information</h4>
                    <div className="content-box cus-info-box">
                    <p>Pradeep Verma</p>
                    <p>pradeepverma@gmail.com</p>
                    <p>7503383036</p>
                </div>
                </div>
            </div>
            <div>
                <h4 className="main-heading">Default Shipping Address</h4>
                <div className="content-box cus-info-box">
                <p>RC 197 Sangam Park</p>
                <p>Khoda colony, Ghaziabad, Uttar Pradesh</p>
                <p>201001</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
