import React from 'react';
import DemonymApp from './components/demonym-app/DemonymApp'

export default class App extends React.Component {
  render(){
    return (
      <main className='App'>
        <DemonymApp name="testName" country="testCountry" />
      </main>
    );
  }
}
