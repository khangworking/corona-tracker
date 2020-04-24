import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css';
import { fetchData } from './api'

class App extends Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data })
  }

  onCountryChanged = async (country) => {
    const data = await fetchData(country)
    this.setState({ data, country })
  }

  render() {
    const { data, country } = this.state
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker onCountryChanged={this.onCountryChanged} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;