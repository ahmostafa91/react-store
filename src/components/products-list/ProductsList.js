import React, { Component } from 'react';
import './styleProducts.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllProds } from './../../actions/productsAction';
import { Rating } from 'primereact/rating';
import * as helper from '../../helper/productsListHelper';

class ProductsList extends Component {
    state = {
        filteredProductsList: null,
        filters: []
    }

    componentDidMount(){

        this.props.getAllProducts(); // action get all the fetched data
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.filters !== prevState.filters) {
            const filteredProductsList = nextProps.products.filter(prod => helper.isMatchingFiltersProduct(prod, nextProps.filters))

            return ({ filters: nextProps.filters, filteredProductsList });
        }
    }

    render(){
        console.log(this.state.filteredProductsList)
        const {products} = this.props;

        const li = products.map(e => <li key={e.id} className="prod p-col-12 p-md-4 p-lg-3"><img className="prod-image" src={e.image} alt={e.name} /><p>{e.name}</p><Rating value={e.rating} readonly={true} stars={5} cancel={false} /> &#36; {e.price}</li>);

        const lis = this.state.filteredProductsList.map(e => <li key={e.id} className="prod p-col-12 p-md-4 p-lg-3"><img className="prod-image" src={e.image} alt={e.name} /><p>{e.name}</p><Rating value={e.rating} readonly={true} stars={5} cancel={false} /> &#36; {e.price}</li>)
        return (
            <React.Fragment>
                <ol className="p-grid p-justify-even">
                    {this.state.filters.length === 0 ? li : this.state.filteredProductsList.length === 0 ? <h4>no results</h4> : lis}
                </ol>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products, // get products array
        filters: state.filters
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllProducts: bindActionCreators(getAllProds, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);

//<li className="prod" key={e.id}>{e.name} <Rating value={e.rating} readonly={true} stars={5} cancel={false} /> || category: {e.categoryId} || price: {e.price} || color: {e.color} || rating: {e.rating}</li>

// <li key={e.id} className="prod"><img src={e.image} alt={e.name} /><p>{e.name}</p><Rating value={e.rating} readonly={true} stars={5} cancel={false} /> &#36; {e.price}</li>