import React from "react";

function Product(props) {
  const info = props.data;
  return (
    <div>
      <img className = "imgStyle" src={info.image} />
      <h5>{info.name}</h5>
      <p>{info.price}</p>
    </div>
  );
}
export default Product;
