import React from 'react';
import { Button } from 'reactstrap';

import ProductList from '../components/ProductList'

const ProductListPage = (props) => (
  <div style={{width: '800px'}}>
    <ProductList history={props.history}/>
    <Button color='primary' onClick={() => {props.history.push('/add')}}>Add Product</Button>
  </div>
)

export default ProductListPage
