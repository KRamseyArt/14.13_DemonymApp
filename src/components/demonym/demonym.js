import React, { Component } from 'react'
import './demonym.css';

export class dymonym extends Component {
  render() {
    const prop = this.props;
    return (
      <div className="demonym">
        <p>A {prop.name} comes from {prop.country}</p>
      </div>
    )
  }
}

export default dymonym
