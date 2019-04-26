import React, { Component } from 'react';
import {Slider} from 'primereact/slider';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFilter } from '../../actions/filterAction';
import { removeFilter } from '../../actions/filterAction';
import { RANGE_FILTER } from '../../constants/filtersTypes';
import PropTypes from 'prop-types';

class RangeFilter extends Component {
    constructor() {
        super();
        this.state = { 
            rangeValues: [100, 300] 
        };
        this.onChangeRangeSlider = this.onChangeRangeSlider.bind(this);
    }

    onChangeRangeSlider(e) {
        this.setState({ rangeValues: e.value });
    }

    render() { 
        
        const priceArr = this.props.products.map(e => e.price).sort();
        const max = priceArr[priceArr.length - 1];
        const min = priceArr[0];

        return(
            <React.Fragment>

            <h3>Price Range: {this.state.rangeValues[0]} - {this.state.rangeValues[1]}</h3>
            <Slider min = {min} max = {max} value={this.state.rangeValues} onChange={(e) => {
                this.setState({rangeValues: e.value});
                this.props.setFilter({type: RANGE_FILTER, value: e.value})
            }} range={true} />

            <button className="btns" onClick = {() => {
                this.setState({rangeValues: [100, 300]});
                this.props.removeFilter({
                    type: RANGE_FILTER
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

RangeFilter.propTypes = {
    products: PropTypes.array,
    setFilter: PropTypes.func,
    removeFilter: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(RangeFilter);