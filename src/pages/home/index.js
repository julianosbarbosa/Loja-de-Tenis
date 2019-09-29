import React, { Component } from "react";
import { ProductList } from "./styles";
import { MdAddShoppingCart } from "react-icons/md";
import api from "../../services/api";
import { formatPrice } from "../../util/format";

class Home extends Component {
  state = {
    products: []
  };

  async componentDidMount() {
    const response = await api.get("products");
    const data = response.data.map(product => ({
      ...product,
      priceFormated: formatPrice(product.price)
    }));
    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;
    return (
      <ProductList>
        {products.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            <strong>{item.title}</strong>
            <span>{item.priceFormated}</span>
            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#fff" /> 3
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

export default Home;
