import React, { Component } from 'react';
import {Rating} from 'primereact/rating';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class RatingFilter extends Component {
    constructor() {
        super();
        this.state = { 
            val1: null, 
            val2: null
        };
    }

    render() {
        return(
            <React.Fragment>

            <h3 className="first">Basic {this.state.val1}</h3>
            <Rating value={this.state.val1} onChange={(e) => this.setState({val1: e.value})} />

            </React.Fragment>
        )
    }
}

export default RatingFilter;