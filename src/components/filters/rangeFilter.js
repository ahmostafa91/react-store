import React, { Component } from 'react';
import {Slider} from 'primereact/slider';

class RangeFilter extends Component {
    constructor() {
        super();
        this.state = { 
            rangeValues: [20, 80] 
        };
        this.onChangeRangeSlider = this.onChangeRangeSlider.bind(this);
    }

    onChangeRangeSlider(e) {
        this.setState({ rangeValues: e.value });
    }

    render() {
        return(
            <React.Fragment>

            <h3>Range: {this.state.rangeValues[0]},{this.state.rangeValues[1]}</h3>
            <Slider value={this.state.rangeValues} onChange={(e) => this.setState({rangeValues: e.value})} range={true} />

            </React.Fragment>
        )
    }
}

export default RangeFilter;