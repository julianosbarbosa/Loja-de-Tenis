import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { formatPrice } from "../../util/format";
import { Container, ProductTable, Total } from "./styles";
import * as CartActions from "../../store/modules/cart/actions";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from "react-icons/md";

const Cart = ({ cart, removeFromCart, updateAmount, total }) => {
  const increment = product => {
    updateAmount(product.id, product.amount + 1);
  };
  const decrement = product => {
    updateAmount(product.id, product.amount - 1);
  };
  return (
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
          {cart.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormated}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => removeFromCart(product.id)}
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar Pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount)
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
