import React from 'react';

const Product = ({ productData, onClick }) => (
  <tr onClick={onClick}>
    <td>{productData.status}</td>
    <td>{productData.title}</td>
    <td>{productData.sellingPrice}</td>
    <td>{productData.category}</td>
    <td>{productData.sku}</td>
  </tr>
)

export default Product
