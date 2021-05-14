import React from "react";
import "./App.css";
import Header from "./Header";
import "./index.css";
import Main from "./Main";
import Footer from "./footer";
import { Provider } from "react-redux";
import store from "./store/";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
