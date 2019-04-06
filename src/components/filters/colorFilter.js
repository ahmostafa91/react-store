import React, { Component } from 'react';
import {ListBox} from 'primereact/listbox';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getColor } from '../../actions/colorFilterAction';
import './style.css';

class ColorFilter extends Component {

    state = {
        color: []
    };

    render() {
        console.log(this.state)

        const color = this.props.products.map(e => e.color).filter(onlyUnique); // make array of colors and make it unique

        const colorObj = color.map((i) => { // create objects for option select
            return {label: i, value: i}
        });

        const getColorVal = this.props.getColorValue(this.state.color)

        console.log(getColorVal);

        return(
            <React.Fragment>
                <h3 key = "colorVal">The Chosen Color(s): "{[this.state.color].join('')}"</h3>
                <ListBox value={this.state.color} multiple filter={true} options={colorObj} onChange={(e) => this.setState({color: e.value})}
                style={{width: '15em'}} listStyle={{maxHeight: '250px'}}/>
                <button onClick = {() => this.setState({color: null})} key="clearColor">Clear Filter</button>
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
        getColorValue: bindActionCreators(getColor, dispatch)
    }
}

function onlyUnique(value, index, self) { // function used to make unique array
    return self.indexOf(value) === index;
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorFilter);