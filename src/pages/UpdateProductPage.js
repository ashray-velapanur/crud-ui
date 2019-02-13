import React from 'react';

import UpdateProduct from '../components/UpdateProduct'

const UpdateProductPage = (props) => (
  <div>
    <UpdateProduct productData={props.history.location.state.productData} />
  </div>
)

export default UpdateProductPage
