import React, { Component } from 'react';
import {ListBox} from 'primereact/listbox';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFilter } from '../../actions/filterAction';
import { removeFilter } from '../../actions/filterAction';
import { COLOR_FILTER } from '../../constants/filtersTypes';
import './style.css';

class ColorFilter extends Component {

    state = {
        selectedColors: []
    };

    render() {
        
        const color = this.props.products.map(e => e.color).filter(onlyUnique); // make array of colors and make it unique

        const colorObj = color.map((i) => { // create objects for option select
            return {label: i, value: i}
        });

        return(
            <React.Fragment>
                <h3 key = "colorVal">The Chosen Color: "{[this.state.selectedColors].join('')}"</h3>
                <ListBox value={this.state.selectedColors} multiple metaKeySelection={false} filter={true} options={colorObj} onChange={(e) => {
                    this.setState({selectedColors: e.value});
                    this.props.setFilter({
                        type: COLOR_FILTER,
                        value: e.value
                    });
                }}
                style={{width: '15em', margin: 0}} listStyle={{maxHeight: '250px'}}/>
                <button className="btns" onClick = {() => {
                    this.setState({selectedColors: []});
                    this.props.removeFilter({
                        type: COLOR_FILTER
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

function onlyUnique(value, index, self) { // function used to make unique array
    return self.indexOf(value) === index;
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorFilter);