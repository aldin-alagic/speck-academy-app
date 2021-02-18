import React, { PureComponent } from "react";

import { Heading } from "./components/Heading";
import { Cart } from "./components/cart/Cart";

import "./App.css";

export class App extends PureComponent {
  render() {
    return (
      <div className="main-container">
        <main className="container col-9">
          <Heading />
          <Cart />
        </main>
      </div>
    );
  }
}
