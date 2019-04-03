import React, { Component } from 'react';
import './styleProducts.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllProds } from './../../actions/productsAction';

class ProductsList extends Component {

    componentDidMount(){

        this.props.getAllProducts(); // action get all the fetched data
    }

    render(){
        // console.log(this.props)
        let li = this.props.products.map(e => <li key={e.id} className="prod">{e.name}</li>);
        return (
            <React.Fragment>
                <ol>
                    {li}
                </ol>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllProducts: bindActionCreators(getAllProds, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);