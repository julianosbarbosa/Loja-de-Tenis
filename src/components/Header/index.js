import React from "react";
import { Container, Cart } from "./styles";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Juliano Shoes" />
        <h1>Juliano Shoes</h1>
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}
