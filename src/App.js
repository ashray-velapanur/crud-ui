import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ConnectedProductList from './components/ProductList';
import ConnectedAddProduct from './components/AddProduct';

import ProductListPage from './pages/ProductListPage';
import AddProductPage from './pages/AddProductPage';
import UpdateProductPage from './pages/UpdateProductPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: '40px', paddingBottom: '40px'}}>
          <div>
            <Switch>
              <Route path='/update' component={UpdateProductPage}/>
              <Route path='/add' component={AddProductPage}/>
              <Route path='/' component={ProductListPage}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
