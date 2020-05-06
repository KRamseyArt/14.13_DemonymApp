import React, { Component } from 'react'
import './CountrySelector.css';

export class CountrySelector extends Component {
  changeSelection(value){
    if(value === 'None'){
      this.props.changeHolder(null);
    } else {
      //find the country selected
      const country = this.props.countries.find(country => country.name === value);
      this.props.changeHandler(country);
    }
  }
  
  render() {
    const options = this.props.countries.map((country, i) => {
      return (
        <option value={country.name} key={i}>{country.name}</option>
      )
    })

    return (
      <div className="country_selector">
        <form>
          <label htmlFor="country">Select a Country:</label>
          <select
            id="country"
            name="country"
            onChange={e => this.changeSelection(e.target.value)}
          >
            <option value="None">Select one...</option>
            {options}
          </select>
        </form>
      </div>
    )
  }
}

CountrySelector.defaultProps = {
  countries: []
}

export default CountrySelector
