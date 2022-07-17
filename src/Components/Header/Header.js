import "./util.css";
import "./main.css";
import Marquee from './Marquee'
import HeaderMenu from "./HeaderMenu";
import IconHeader from "./IconHeader";
import Logo from "./Logo";
import useCheckMobileScreen from "../CustomHooks/MobileCheck";
import { useDispatch} from "react-redux";
import { UiActions } from '../Store/UiReducer';
import Hamburger from "./MobileHeader/Hamburger";
import MarqueeM from './MobileHeader/Marquee_m'
import MenuMobile from "./MobileHeader/MenuMobile";
import { useState } from "react";
import SearchMobile from "./MobileHeader/SearchMobile";


const Header = (props) => {
  // This is using the custom hook for checking the mobile
  const mobileCheck = useCheckMobileScreen()

  // This is dispatching the custom hook value in store, either true or false
  const dispatch = useDispatch();
  dispatch(UiActions.checkWidth(mobileCheck))

  const [MobileMenu, setMobileMenu] = useState();
  const [searchBox, setsearchBox] = useState()
  const toggleMobileMenu = ()=> {
    setMobileMenu(!MobileMenu)
  }
  const showSearch = ()=> {
    setsearchBox(!searchBox)
  }
  const closeSearch = ()=> {
    setsearchBox(!searchBox)
  }

  return (
    <>
      <header>
        <div className="container-menu-desktop">
          <Marquee/>
          <div className="wrap-menu-desktop how-shadow1">
            <nav className="limiter-menu-desktop container">
              <Logo/>
              <HeaderMenu/>
              <IconHeader click={props.onClick} showSearch={showSearch}/>
            </nav>
          </div>
        </div>

        {/* <!-- Header Mobile --> */}
        <div className="wrap-header-mobile">
          <Logo/>
          <IconHeader click={props.onClick} showSearch={showSearch}/>
          <Hamburger toggleMobileMenu={toggleMobileMenu} MobileMenu={MobileMenu}/>
        </div>

        {/* <!-- Menu Mobile --> */}
        <div className={`menu-mobile ${MobileMenu ? 'shomenu' : ''}`}>
          <MarqueeM/>
          <MenuMobile/>
        </div>

        {/* <!-- Modal Search --> */}
        <SearchMobile searchBox={searchBox} closeSearch={closeSearch}/>
      </header>
    </>
  );
};

export default Header;
