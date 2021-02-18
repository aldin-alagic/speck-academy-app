import React, { PureComponent } from "react";
import { PropTypes } from "prop-types";

import "./product.css";

export class Product extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    const { name } = this.props;
    return (
      <div className="product text-center animate__animated animate__slideInDown">
        {name}
      </div>
    );
  }
}
