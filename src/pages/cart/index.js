import React from "react";

import { Container, ProductTable, Total } from "./styles";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from "react-icons/md";

const Cart = () => (
  <Container>
    <ProductTable>
      <thead>
        <tr>
          <th />
          <th>PRODUTO</th>
          <th>QTD</th>
          <th>SUBTOTAL</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-masculino/12/D12-9660-112/D12-9660-112_zoom1.jpg"
              alt="Tenis Nike"
            />
          </td>
          <td>
            <strong>Tenis Nike-Shox</strong>
            <span>R$499,00</span>
          </td>
          <td>
            <div>
              <button type="button">
                <MdRemoveCircleOutline size={20} color="#7159c1" />
              </button>
              <input type="number" readOnly value={3} />
              <button type="button">
                <MdAddCircleOutline size={20} color="#7159c1" />
              </button>
            </div>
          </td>
          <td>
            <strong>R$1496,00</strong>
          </td>
          <td>
            <button type="button">
              <MdDelete size={20} color="#7159c1" />
            </button>
          </td>
        </tr>
      </tbody>
    </ProductTable>
    <footer>
      <button type="button">Finalizar Pedido</button>
      <Total>
        <span>TOTAL</span>
        <strong>R$1520,00</strong>
      </Total>
    </footer>
  </Container>
);

export default Cart;
