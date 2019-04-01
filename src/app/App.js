import React, { Component } from 'react';
import './App.css';
import CategoryList from './../components/categories-list/CategoriesList';
import ProductsList from './../components/products-list/ProductsList';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Edf3ly Store</h1>
        <CategoryList />
        <ProductsList />
      </React.Fragment>
    );
  }
}

export default App;
