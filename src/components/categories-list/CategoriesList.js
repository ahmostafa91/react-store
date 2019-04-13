import React, { Component } from 'react';
import './styleCategories.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllCateg } from '../../actions/categoriesAction';

class CategoryList extends Component {

    componentDidMount(){

        this.props.getAllCategs(); // action get all the fetched data

    }

    render(){
        const divs = this.props.categories.map(e => <div key={e.id} onClick={() => {}}>{e.name}</div>);

        return (
            <React.Fragment>
            {divs}
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
        getAllCategs: bindActionCreators(getAllCateg, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);