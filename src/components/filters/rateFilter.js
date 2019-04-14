import React, { Component } from 'react';
import {Rating} from 'primereact/rating';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFilter } from './../../actions/filterAction';
import { RATTING_FILTER } from '../../constants/filtersTypes';

class RatingFilter extends Component {
    state = { 
        val1: null, 
    }

    render() {
        return(
            <React.Fragment>

            <h3 className="first">Stars Rate:  {this.state.val1}</h3>
            <Rating value={this.state.val1} cancel={false} onChange={(e) => {
                this.setState({val1: e.value});
                this.props.setFilter({
                    type: RATTING_FILTER,
                    value: e.value
                });
            }} />

            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products // get products array to get the colors
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setFilter: bindActionCreators(setFilter, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RatingFilter);