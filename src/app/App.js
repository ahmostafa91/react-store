import React, { Component } from 'react';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import CategoryList from './../components/categories-list/CategoriesList';
import ProductsList from './../components/products-list/ProductsList';
import RangeFilter from './../components/filters/RangeFilter';
import ColorFilter from './../components/filters/ColorFilter';
import RatingFilter from './../components/filters/RateFilter';
import AnimateHeight from 'react-animate-height';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronCircleDown, faChevronCircleUp)

class App extends Component {

  state = {
    height: 0,
  };
 
  toggle = () => {
    const { height } = this.state;
 
    this.setState({
      height: height === 0 ? 'auto' : 0,
    });
  };

  render() {
    const { height } = this.state;

    return (
      <React.Fragment>
        <header className="p-grid">
          <h1 className="p-col-12">Edf3ly Store</h1>
          <nav className="p-col-12">
            <CategoryList />
          </nav>
        </header>
        <main className="p-grid">
          <section className="smHide lgShow filters p-col-12 p-md-4 p-lg-3">
            <RangeFilter />
            <ColorFilter />
            <RatingFilter />
          </section>

          <section className="smShow lgHide filters p-col-12 p-md-4 p-lg-3">
            <h2>Filters</h2> {height === 0 ? <FontAwesomeIcon style={{color: '#dea127'}} onClick={ this.toggle } icon="chevron-circle-down" size="2x" /> : <FontAwesomeIcon style={{color: '#dea127'}} onClick={ this.toggle } icon="chevron-circle-up" size="2x" />}
            <AnimateHeight
            duration={ 500 }
            height={ height } // see props documentation bellow
            >
              <RangeFilter />
              <ColorFilter />
              <RatingFilter />
            </AnimateHeight>
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
