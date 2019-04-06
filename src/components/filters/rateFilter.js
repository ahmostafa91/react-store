import React, { Component } from 'react';
import {Rating} from 'primereact/rating';

class RatingFilter extends Component {
    state = { 
        val1: null, 
    }

    render() {
        return(
            <React.Fragment>

            <h3 className="first">Stars Rate:  {this.state.val1}</h3>
            <Rating value={this.state.val1} onChange={(e) => this.setState({val1: e.value})} />

            </React.Fragment>
        )
    }
}

export default RatingFilter;