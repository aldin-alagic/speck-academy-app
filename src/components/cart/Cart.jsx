import React, { Fragment, useState } from "react";

import { Product } from "../product/Product";

export function Cart() {
  const [products, setProducts] = useState([]);
  const numberOfProducts = products.length;

  const handleRemoveProducts = () => {
    const removeProducts = window.confirm(
      "Are you sure you want to remove all products?"
    );
    if (removeProducts) setProducts([]);
  };

  return (
    <Fragment>
      {numberOfProducts > 0 && (
        <div className="d-flex justify-content-between">
          <p>
            Number of products:
            <span className="text-danger"> {numberOfProducts}</span>
          </p>
          <button className="remove-button" onClick={handleRemoveProducts}>
            Remove all products
          </button>
        </div>
      )}
      {products.map((product, index) => (
        <Product key={index} name={product} />
      ))}
    </Fragment>
  );
}
