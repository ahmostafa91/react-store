import React, { Component } from 'react';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import CategoryList from './../components/categories-list/CategoriesList';
import ProductsList from './../components/products-list/ProductsList';
import RangeFilter from './../components/filters/rangeFilter';
import ColorFilter from './../components/filters/colorFilter';
import RatingFilter from './../components/filters/rateFilter';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="p-grid">
          <h1 className="p-col-12">Edf3ly Store</h1>
          <nav className="p-col-12">
            <CategoryList />
          </nav>
        </header>
        <main className="p-grid">
          <section className="filters p-col-12 p-md-4 p-lg-3">
            <RangeFilter />
            <ColorFilter />
            <RatingFilter />
          </section>
          
          <section className="p-col-12 p-md-8 p-lg-9">
            <ProductsList />
          </section>
        </main>
        <footer>
          All Rights Reserved &#169;
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
