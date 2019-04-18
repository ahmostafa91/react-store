import React, { Component } from 'react';
import './styleProducts.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllProds } from './../../actions/productsAction';
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

            return ({ filters: nextProps.filters,  filteredProductsList });
        }
    }

    render(){
        console.log(this.state.filteredProductsList)
        const {products} = this.props;

        const li = products.map(e => <li key={e.id} className="prod"><p>{e.name}</p><img src={e.image} alt={e.name} />></li>);

        const lis = this.state.filteredProductsList.map(e => <li key={e.id}>{e.name}</li>)
        return (
            <React.Fragment>
                <ol>
                    {this.state.filteredProductsList.length > 0 ? lis : li}
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