import React, { Component } from 'react';
import {Rating} from 'primereact/rating';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFilter } from '../../actions/filterAction';
import { removeFilter } from '../../actions/filterAction';
import { RATTING_FILTER } from '../../constants/filtersTypes';
import PropTypes from 'prop-types';

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


            <button className="btns" onClick = {() => {
                this.setState({val1: null});
                this.props.removeFilter({
                    type: RATTING_FILTER
                });
            }} key="clearColor">Clear Filter</button>

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
        setFilter: bindActionCreators(setFilter, dispatch),
        removeFilter: bindActionCreators(removeFilter, dispatch)
    }
}

RatingFilter.propTypes = {
    products: PropTypes.array,
    setFilter: PropTypes.func,
    removeFilter: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(RatingFilter);