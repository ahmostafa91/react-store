import React, { Component } from 'react';
import './styleCategories.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllCateg } from '../../actions/categoriesAction';
import { setFilter } from './../../actions/filterAction';
import { CATEGORY_FILTER } from '../../constants/filtersTypes';

class CategoryList extends Component {

    componentDidMount(){

        this.props.getAllCategs(); // action get all the fetched data

    }

    render(){
        const li = this.props.categories.map(e => <li className="category-item p-col-5 p-md-4 p-lg-2" key={e.id} onClick={() => {this.props.setFilter({
            type: CATEGORY_FILTER,
            value: e.id
        });}}>{e.name}</li>);

        return (
            <React.Fragment>
            <ul className="caregory-list p-grid p-justify-even">
                {li}
            </ul>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories, // get categories array
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllCategs: bindActionCreators(getAllCateg, dispatch),
        setFilter: bindActionCreators(setFilter, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);