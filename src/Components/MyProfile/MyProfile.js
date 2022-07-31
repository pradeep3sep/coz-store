import React from "react";
import { NavLink } from "react-router-dom";
import { getAuth, signOut} from "firebase/auth";
import swal from "sweetalert";
import {useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useDispatch} from "react-redux";
import { UiActions } from '../Store/UiReducer';

export default function MyProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const displayName = useSelector(state => state.UiThing.logName) 
  const email = useSelector(state => state.UiThing.logEmail) 
  const photoURL = useSelector(state => state.UiThing.photoURL) 

  const auth = getAuth();
    const signOutHandler = async () => {
        await signOut(auth).then((response) => {
            // Sign-out successful.
            console.log(response,"log out");
            dispatch(UiActions.setname({displayName: '', email : "" }));
            swal("Congratulations!", "You have Sign out successfully!", "success");

            navigate("/");
          }).catch((error) => {
            // An error happened.
            console.log(error);
          });
    };
  return (
    <>
      <div className="container p-t-100 myprofile">
        <div className="row">
          <div className="col-md-3">
            <ul className="sidesec">
              <li>
                <NavLink to="/myprofile">My Profile</NavLink>
              </li>
              {/* <li>
                <NavLink to="/myorders">My Orders</NavLink>
              </li> */}
              <li>
               <button onClick={signOutHandler} className="w-100 signout">
                    SignOut
               </button>
              </li>
            </ul>
          </div>
          <div className="col-md-9">
            <div className="row">
                <div className="col-md-1 login">
                  {
                    photoURL ?

                    <img src={photoURL} alt="loginImage" />
                    : 

                    <div className="logName mob">
                        <h5>{displayName.split('').splice(0,1)}</h5>
                    </div>
                  }
                </div>
                <div className="col-md-11">
                    <h4 className="main-heading">Contact Information</h4>
                    <div className="content-box cus-info-box">
                    <p>{displayName}</p>
                    <p>{email}</p>
                    {/* <p>7503383036</p> */}
                </div>
                </div>
            </div>
            <div>
                <h4 className="main-heading">Default Shipping Address</h4>
                <div className="content-box cus-info-box">
                <p>Static Main Address</p>
                <p>Static Main area</p>
                <p>Static Pincode</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
