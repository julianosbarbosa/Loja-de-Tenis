import React from "react";
import { ProductList } from "./styles";
import { MdAddShoppingCart } from "react-icons/md";

const Home = () => (
  <ProductList>
    <li>
      <img
        src={
          "https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-masculino/12/D12-9660-112/D12-9660-112_zoom1.jpg"
        }
        alt="Tenis nike"
      />
      <strong>Tenis Nike-Shox</strong>
      <span>R$499,00</span>
      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#fff" /> 3
        </div>
        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </li>
  </ProductList>
);
export default Home;
