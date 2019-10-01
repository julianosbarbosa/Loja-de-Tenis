import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./config/ReactotronConfig";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store/index";
import { ToastContainer } from "react-toastify";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  </Provider>
);

export default App;
