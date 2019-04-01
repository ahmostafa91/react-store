import React, { Component } from 'react';
import './styleCategories.css';
import Categories from './../../api/CategoriesApi';

class CategoryList extends Component {
    constructor() {
        super();
        this.state = {
            initData: []
        };
    }

    componentDidMount(){

        Categories.getAllCategories().then((cat) => {
            
            let cate = cat.map((e) => {

                return (<div key={e.id}>{e.name}</div>)
            })
            this.setState({initData: cate})
            console.log(this.state.initData)
        })

    }

    render(){
        return (
            <React.Fragment>
                <div>
                    {this.state.initData}
                </div>
            </React.Fragment>
        );
    }
}

export default CategoryList;