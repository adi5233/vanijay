import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  // link3Text: "About Us",
  // link4Text: "Contact Us",
  link3Text: "Profile",
  link4Text: "Cart",
  link1Url: "/",
  link2Url: "/products",
  // link3Url: "/about",
  link4Url: "/contact",
  link3Url: "/login",
  link4Url: "/cart",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  searchIcon: true,
  profileIcon: true,
  cartIcon: true,
  searchIconUrl: "/search",
  profileIconUrl: "/login",
  cartIconUrl: "/cart",
  SearchIconElement: SearchIcon,
  ProfileIconElement: PersonIcon,
  CartIconElement: ShoppingCartIcon,
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
