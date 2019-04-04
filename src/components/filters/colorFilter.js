import React, { Component } from 'react';
import {ListBox} from 'primereact/listbox';

class ColorFilter extends Component {

    state = {
        car: 'BMW'
    };

    render() {
        const cars = [
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];

        return(
            <React.Fragment>
                <ListBox value={this.state.car} filter={true} options={cars} onChange={(e) => this.setState({car: e.value})} itemTemplate={this.carTemplate} 
                style={{width: '15em'}} listStyle={{maxHeight: '250px'}}/>
                <button key="clearColor">clear</button>
            </React.Fragment>
        )
    }
}

export default ColorFilter;