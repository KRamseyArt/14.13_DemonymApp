import React, { Component } from 'react'
import './DemonymApp.css';

import Demonym from '../demonym/demonym';
import CountrySelector from '../country-selector/CountrySelector';

export class DemonymApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selected: null
    }
  }

  setSelected(selected) {
    this.setState({
      selected
    })
  }

  componentDidMount(){
    fetch('https://country.register.gov.uk/record.json?page-size=5000')
      .then(response => {
        if(!response.ok){
          throw new Error('Something went wrong');//throw an error
        }
        return response.json();
      })
      .then(data => {
        const countries = Object.keys(data)
          .map(key => data[key].item[0]);
        this.setState({
          countries
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }
  
  render() {
    const error = this.state.error
      ? <div className="demonym_app__error">{this.state.error}</div>
      : "";
    const demon = this.state.selected
      ? <Demonym name={this.state.selected['citizen-names']} country={this.state.selected.name} />
      : <div className="demonym_app__placeholder">Select a country above</div>
    
      return (
      <div className="demonym_app">
        {error}
        <CountrySelector countries={this.state.countries} changeHandler={selected => this.setSelected(selected)} />
        {demon}
      </div>
    )
  }
}

export default DemonymApp;
