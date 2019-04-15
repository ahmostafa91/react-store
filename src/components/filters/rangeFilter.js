import React, { Component } from 'react';
import {Slider} from 'primereact/slider';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFilter } from '../../actions/filterAction';
import { RANGE_FILTER } from '../../constants/filtersTypes';

class RangeFilter extends Component {
    constructor() {
        super();
        this.state = { 
            rangeValues: [] 
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

        console.log(priceArr)
        return(
            <React.Fragment>

            <h3>Price Range: {this.state.rangeValues[0]} - {this.state.rangeValues[1]}</h3>
            <Slider min = {min} max = {max} value={this.state.rangeValues} onChange={(e) => {
                this.setState({rangeValues: e.value});
                this.props.setFilter({type: RANGE_FILTER, value: e.value})
            }} range={true} />

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

export default connect(mapStateToProps, mapDispatchToProps)(RangeFilter);