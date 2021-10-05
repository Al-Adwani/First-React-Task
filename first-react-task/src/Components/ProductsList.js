import React from "react";
import productsData from "../Product-List";
import Product from "./Product";

function ProductsList() {
  const products = productsData.map((element) => <Product data={element} />);
  return <div className="items">{products}</div>;
}

export default ProductsList;
