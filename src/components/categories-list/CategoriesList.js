import React, { Component } from 'react';
import './styleCategories.css';
//import Categories from './../../api/CategoriesApi';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { getAllCateg } from '../../actions/categoriesAction';

class CategoryList extends Component {

    componentDidMount(){

        this.props.getAllCategs();
        /*Categories.getAllCategories().then((cat) => {
            
            let cate = cat.map((e) => {

                return (<div key={e.id}>{e.name}</div>)
            })
            this.setState({initData: cate})
            console.log(this.state.initData)
        })*/

    }

    render(){
        console.log(this.props);
        let divs = this.props.category.map(e => <div key={e.id}>{e.name}</div>)
        return (
            <React.Fragment>
            {divs}
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        category: state.categoriesReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllCategs: bindActionCreators(getAllCateg, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);