import React, { Component } from 'react';
import './styleProducts.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllProds } from './../../actions/productsAction';
import { Rating } from 'primereact/rating';
import {Paginator} from 'primereact/paginator';
import * as helper from '../../helper/productsListHelper';
import PropTypes from 'prop-types';

class ProductsList extends Component {
    constructor() {
        super();
        this.state = {
            filteredProductsList: null,
            filters: [],
            first: 0, 
            rows: 9
        }
        this.onPageChange = this.onPageChange.bind(this);
    }

    onPageChange(event) {
        this.setState({
            first: event.first,
            rows: event.rows
        });
    }

    componentDidMount(){

        this.props.getAllProducts(); // action get all the fetched data
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.filters !== prevState.filters) {
            const filteredProductsList = nextProps.products.filter(prod => helper.isMatchingFiltersProduct(prod, nextProps.filters))

            return ({ filters: nextProps.filters, filteredProductsList, first: 0 });
        }
    }

    render(){
        const {products} = this.props;

        let paginatorRecords = null;

        if(this.state.filteredProductsList.length === 0) {
            paginatorRecords = products.length
        }
        else {
            paginatorRecords = this.state.filteredProductsList.length
        }

        const filteredProductsList = this.state.filteredProductsList.slice(this.state.first, this.state.first + this.state.rows);

        const prodPaginator = products.slice(this.state.first, this.state.first + this.state.rows);

        const li = prodPaginator.map(e => 
            <li key={e.id} className="prod p-col-12 p-md-4 p-lg-3"><img className="prod-image" src={e.image} alt={e.name} /><p>{e.name}</p><Rating value={e.rating} readonly={true} stars={5} cancel={false} /> &#36; {e.price}</li>
            );

        const lis = filteredProductsList.map(e => 
            <li key={e.id} className="prod p-col-12 p-md-4 p-lg-3"><img className="prod-image" src={e.image} alt={e.name} /><p>{e.name}</p><Rating value={e.rating} readonly={true} stars={5} cancel={false} /> &#36; {e.price}</li>
            );
            
        return (
            <React.Fragment>
                <ol className="p-grid p-justify-even">
                    {this.state.filters.length === 0 ? li : filteredProductsList.length === 0 ? <h4>No Results</h4> : lis}
                </ol>

                <Paginator first={this.state.first} rows={this.state.rows} totalRecords={paginatorRecords} 
                rowsPerPageOptions={[9,20,30]} onPageChange={this.onPageChange}></Paginator>
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

ProductsList.propTypes = {
    products: PropTypes.array,
    filters: PropTypes.array,
    getAllProducts: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);