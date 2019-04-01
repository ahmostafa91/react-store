import React, { Component } from 'react';
import './styleProducts.css';
import Products from './../../api/ProductsApi';

class ProductsList extends Component {
    constructor() {
        super();
        this.state = {
            initData: []
        };
    }

    componentDidMount(){

        Products.getAllCategories().then((prod) => {
            
            let product = prod.map((e) => {

                return (<div key={e.id} className="prod">{e.name}</div>)
            })
            this.setState({initData: product})
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

export default ProductsList;