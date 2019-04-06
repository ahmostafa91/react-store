import React, { Component } from 'react';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import CategoryList from './../components/categories-list/CategoriesList';
import ProductsList from './../components/products-list/ProductsList';
import RangeFilter from './../components/filters/rangeFilter';
import ColorFilter from './../components/filters/colorFilter';
import RatingFilter from './../components/filters/rateFilter';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Edf3ly Store</h1>
        <RatingFilter />
        <ColorFilter />
        <CategoryList />
        <RangeFilter />
        <ProductsList />
      </React.Fragment>
    );
  }
}

export default App;
