import React, { Fragment, useState } from "react";

import { Product } from "../product/Product";

import "./cart.css";

export function Cart() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState("");
  const numberOfProducts = products.length;

  const handleRemoveProducts = () => {
    const removeProducts = window.confirm(
      "Are you sure you want to remove all products?"
    );
    if (removeProducts) setProducts([]);
  };

  return (
    <Fragment>
      <div className=" my-5">
        <label htmlFor="product-title">Product title</label>
        <div className="d-flex">
          <input
            type="text"
            className="form-control mr-2"
            id="product-title"
            name="product-title"
            value={product}
            onChange={(e) => {
              setProduct(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setProducts([...products, product]);
              setProduct("");
            }}
            className="btn add-button"
          >
            Add product
          </button>
        </div>
      </div>

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
