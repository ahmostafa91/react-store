import React, { Component } from 'react';
import './styleCategories.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllCateg, getCategoryId } from '../../actions/categoriesAction';

class CategoryList extends Component {

    componentDidMount(){

        this.props.getAllCategs(); // action get all the fetched data

    }

    render(){
        // console.log(this.props);
        const prodId = (id) => {this.props.getCategoryId(id)}; // click function to get id

        const divs = this.props.categories.map(e => <div key={e.id} onClick={() => prodId(e.id)}>{e.name}</div>);

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
        getAllCategs: bindActionCreators(getAllCateg, dispatch),
        getCategoryId: bindActionCreators(getCategoryId, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);