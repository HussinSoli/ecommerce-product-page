import React from "react";
import { useProduct } from "../data-context-hook";
import ProductPrice from "./ProductPrice";
import ProductForm from "./ProductForm";
export default function ProductInfo() {
  const { compney } = useProduct();
  const compneyName = compney.name;
  const productName = compney.products.name;
  const productInfo = compney.products.info;
  return (
    <div className="product_info">
      <h1 className="product_title">
        <span className="compney_name">{compneyName}</span>
        {productName}
      </h1>
      <p className="product_info--p">{productInfo}</p>
      <ProductPrice />
      <ProductForm />
    </div>
  );
}
