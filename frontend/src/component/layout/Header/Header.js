import React from 'react'
import {ReactNavbar} from "overlay-navbar";
import {MdAccountCircle, MdSearch, MdAddShoppingCart} from 'react-icons/md';

import logo from '../../../images/logo.png';

const options = {
  profileIcon : true,
  searchIcon : true,
  cartIcon : true,
  ProfileIconElement : MdAccountCircle,
  SearchIconElement : MdSearch,
  CartIconElement : MdAddShoppingCart,
  
  burgerColor : '#9e9e9e',
  burgerColorHover : '#eb4034',
  logo,
  logoWidth : "15vmax",
  navColor1 : "white",
  logoHoverSize : "10px",
  logoHoverColor : "#eb4034",
  
  link1Text : "Home",
  link2Text : "Products",
  link3Text : "Contact",
  link4Text : "About",
  
  link1Url : "/",
  link2Url : "/products",
  link3Url : "/contact",
  link4Url : "/about",
  
  link1Size : "1.3vmax",
  link1Color : "rgba(35, 35, 35, 0.8)",
  
  nav1justifyContent : "flex-end",
  nav2justifyContent : "flex-end",
  nav3justifyContent : "flex-start",
  nav4justifyContent : "flex-start",
  
  link1Margin : "1vmax",
  cartIconMargin : "1vmax",
  profileIconUrl : "/login",
  
  profileIconColor : "rgba(35, 35, 35, 0.8)",
  searchIconColor : "rgba(35, 35, 35, 0.8)",
  cartIconColor : "rgba(35, 35, 35, 0.8)",
  
  link1ColorHover : "#eb4034",
  profileIconColorHover : "#eb4034",
  searchIconColorHover : "#eb4034",
  cartIconColorHover : "#eb4034",
};

const Header = () => {
  return (
      <ReactNavbar {...options} />        
  );
}

export default Header;