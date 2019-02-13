import React from 'react';
import { Redirect } from 'react-router-dom';

import { Table } from 'reactstrap';

import Product from './Product'
import { addProductAPI, getProductsAPI } from '../api'


class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      titleSearchString: '',
      filteredProducts: null
    }

    this.handleTitleSearch = this.handleTitleSearch.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8000/get/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoading: false,
          products: data,
          filteredProducts: data
        })
      })
  }

  handleTitleSearch(event) {
    let titleSearchString = event.target.value.toLowerCase();
    let filteredProducts = []
    console.log(titleSearchString)

    this.state.products.map((product) => {
      if (product.title.includes(titleSearchString)) {
        filteredProducts.push(product);
      }
    })

    this.setState({
      filteredProducts: filteredProducts,
      titleSearchString: titleSearchString,
    })
  }

  render() {
    let filteredProducts = this.state.filteredProducts
    let isLoading = this.state.isLoading

    let updateProduct = (productData) => {
      this.props.history.push({
        pathname: '/update',
        state: {
          productData: productData
        }
      })
    }

    if (isLoading) {
      return (
        <h1>Loading...</h1>
      )
    }

    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>
                <input onChange={this.handleTitleSearch}
                  placeholder='Search by title'
                  type='text'
                  value={this.state.titleSearchString} />
              </th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th>Status</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>SKU</th>
            </tr>
          </thead>
          <tbody>
            { filteredProducts.map((productData, index) =>
              <Product key={index} productData={productData} onClick={() => updateProduct(productData)}/>
            )}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default ProductList
